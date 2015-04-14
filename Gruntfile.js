module.exports = function (grunt) {

	grunt.initConfig({
		webServer: {
			rootFolder: "www",
			port: 8080
		}
	});

	grunt.registerTask("default", "start a web server", function(port) {

		var
			webServer = require("./web-server"),
			webServerConfig = grunt.config("webServer");

			webServerConfig.port = port || webServerConfig.port; //returns Value of an operand. they don't return true or false

			this.async();
			webServer(webServerConfig, function() {
				grunt
					.log
					.writeln("web server listening on port: " + webServerConfig.port);
			});

	});

	grunt.registerTask("haveABaby", function(name, age, height) {
		console.log("Here comes my tax deduction!");
		console.log(arguments);
	});
};