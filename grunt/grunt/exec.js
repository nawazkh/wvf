module.exports = function(grunt) {
    return {
        createvisualization: {
            cwd: grunt.dirs.workspacesvisualizations + '<%= projectName %>' + '/' + '<%= visualizationName %>',
            cmd: [
                'git init',
                'git remote add -f origin ' + '<%= pluginsURL %>',
                'git config core.sparseCheckout true',
                'echo ' + '<%= visualizationName %>' + '/*>> .git/info/sparse-checkout'
            ].join("&&")
        },
        buildvisualization: {
            cwd: grunt.dirs.workspacesvisualizations + '<%= projectName %>' + '/' + '<%= visualizationName %>',
            cmd: [
                ('git fetch origin ' + ('<%= commitID %>' || 'master')),
                'git reset --hard FETCH_HEAD'
            ].join("&&")
        },        
        initproject: {
            cwd: grunt.dirs.workspacesprojects + '<%= projectName %>',
            cmd: [
                'git init',
                'git remote add -f origin ' + '<%= projectURL %>',
                'git fetch origin ' + ('<%= commitID %>' || 'master'),
                'git reset --hard FETCH_HEAD'
            ].join("&&")
        }
    }
}
