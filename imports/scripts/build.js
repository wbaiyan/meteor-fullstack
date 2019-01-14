//------------------------------------------------------------------------------
// Customise this section for your project
//------------------------------------------------------------------------------
// define project name
var project_name = 'meteor-fullstack';

// defined server address
var server_address = 'https://www.meteor-fullstack.com';

// define projects folder that contains this project and will contain the build folder
var dir_projects = '~/projects';
//------------------------------------------------------------------------------

// imports
var shell = require('shelljs');
var child_process = require('child_process');
var chalk = require('chalk');
shell.config.fatal = true;

// define keystore and alias for google upload key
var keystore_name = 'keystore';
var keystore_alias_goolge_upload = 'googlePlayUpload';

// derive directories
var dir_project = dir_projects + '/' + project_name;
console.log(chalk.yellow('dir_project: ' + dir_project));
var dir_build = dir_projects + '/build';
console.log(chalk.yellow('dir_build: ' + dir_build));
var dir_build_project = dir_build + '/' + project_name;
console.log(chalk.yellow('dir_build_project: ' + dir_build_project));
var dir_build_android = dir_build_project + '/android';
console.log(chalk.yellow('dir_build_android: ' + dir_build_android));
var dir_build_ios = dir_build_project + '/ios';
console.log(chalk.yellow('dir_build_ios: ' + dir_build_ios));

// derive file names
var file_keystore = dir_project + '/secure/' + keystore_name;
console.log(chalk.yellow('file_keystore: ' + file_keystore));
var file_keystore_copy = dir_build_android + '/' + keystore_name;
console.log(chalk.yellow('file_keystore_copy: ' + file_keystore_copy));
var file_tarball = dir_build + '/' + project_name + '.tar.gz';
console.log(chalk.yellow('file_tarball: ' + file_tarball));
var file_apk_unsigned = 'release-unsigned.apk';
console.log(chalk.yellow('file_apk_unsigned: ' + file_apk_unsigned));
var file_apk_unsigned_copy = project_name + '-unsigned.apk';
console.log(chalk.yellow('file_apk_unsigned_copy: ' + file_apk_unsigned_copy));
var file_apk_signed = project_name+'-signed.apk';
console.log(chalk.yellow('file_apk_signed: ' + file_apk_signed));
var file_apk_optimised = project_name + '.apk';
console.log(chalk.yellow('file_apk_optimised: ' + file_apk_optimised));

// create build directory? or should the user do it? safety?

// remove old build folder of this project
shell.rm('-rf', dir_build_project);
console.log(chalk.yellow('removed build directory: ' + dir_build_project));

// create build directory for this project
shell.mkdir(dir_build_project);
console.log(chalk.yellow('created build directory: ' + dir_build_project));

// build meteor project for iOS and Android platforms
console.log(chalk.yellow('starting build in ' + dir_build_project +
    ' for server ' + server_address));
shell.exec('meteor build ' + dir_build_project +' --server ' + server_address);
console.log(chalk.black.bgGreen('completed build for server: ' + server_address));

// copy the keystore from the secure folder to the project build folder
shell.cp(file_keystore, file_keystore_copy);
console.log(chalk.yellow('copied' + file_keystore + 'to ' + file_keystore_copy));

// go to android build directory
shell.cd(dir_build_android);
console.log(chalk.yellow('changed directory to ' + dir_build_project));

// copy the unsigned apk
shell.cp(file_apk_unsigned, file_apk_unsigned_copy);
console.log(chalk.yellow('copied unsigned apk from ' + file_apk_unsigned +
    ' to ' + file_apk_unsigned_copy));

// sign the unsigned apk
console.log(chalk.yellow('starting signing of apk using alias ' +
    keystore_alias_goolge_upload + ' in keystore ' + keystore_name));
child_process.execFileSync('jarsigner', ['-verbose', '-sigalg', 'SHA1withRSA',
    '-digestalg', 'SHA1', file_apk_unsigned, keystore_alias_goolge_upload,
    '-keystore', keystore_name], {stdio: 'inherit'});
console.log(chalk.black.bgGreen('completed signing of apk'));

// rename the unsigned apk to signed apk
shell.mv(file_apk_unsigned, file_apk_signed);
console.log(chalk.yellow('renamed ' + file_apk_unsigned + ' to ' +
    file_apk_signed));

// optimise the apk for android platform
var optimiseCmd = '$ANDROID_HOME/build-tools/28.0.3/zipalign 4 ' +
    file_apk_signed + ' ' + file_apk_optimised;
console.log(chalk.yellow('optimiseCmd: ' + optimiseCmd));
shell.exec(optimiseCmd);
console.log(chalk.black.bgGreen('completed optimization of apk'));

// go to project directory
shell.cd(dir_project);
console.log(chalk.yellow('changed directory to ' + dir_build_project));
