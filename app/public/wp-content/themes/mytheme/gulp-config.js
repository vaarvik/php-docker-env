/**
 *
 *  ██████╗ ██╗   ██╗██╗     ██████╗      ██████╗ ██████╗ ███╗   ██╗███████╗██╗ ██████╗
 * ██╔════╝ ██║   ██║██║     ██╔══██╗    ██╔════╝██╔═══██╗████╗  ██║██╔════╝██║██╔════╝
 * ██║  ███╗██║   ██║██║     ██████╔╝    ██║     ██║   ██║██╔██╗ ██║█████╗  ██║██║  ███╗
 * ██║   ██║██║   ██║██║     ██╔═══╝     ██║     ██║   ██║██║╚██╗██║██╔══╝  ██║██║   ██║
 * ╚██████╔╝╚██████╔╝███████╗██║         ╚██████╗╚██████╔╝██║ ╚████║██║     ██║╚██████╔╝
 *  ╚═════╝  ╚═════╝ ╚══════╝╚═╝          ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝╚═╝     ╚═╝ ╚═════╝
 *
 * This file contains:
 * * Settings for gulp.
 */

//add the proxy if you're using a server as for example WAMP
module.exports.config = {
    assetsUri: 'assets', //path to the assets folder
    gutenBlocksName: 'mytheme-blocks', //the name of the Gutenberg blocks plugin you use
};
