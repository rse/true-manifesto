
/* global module: true */
module.exports = function (grunt) {
    grunt.loadNpmTasks("grunt-contrib-clean")
    grunt.loadNpmTasks("grunt-contrib-copy")
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        copy: {
            "normalize": {
                src: [ "node_modules/normalize.css/normalize.css" ],
                dest: "lib/normalize/normalize.css"
            },
            "jquery": {
                src: [ "node_modules/jquery/dist/jquery.js" ],
                dest: "lib/jquery/jquery.js"
            },
            "typopro": {
                files: [
                    { expand: true, flatten: false, cwd: "node_modules/typopro-web/web",
                      src: "TypoPRO-Overlock/**", dest: "lib/typopro/" }
                ]
            }
        },
        clean: {
            clean:     [ "lib" ],
            distclean: [ "node_modules" ]
        }
    })
    grunt.registerTask("default", [ "copy" ])
}

