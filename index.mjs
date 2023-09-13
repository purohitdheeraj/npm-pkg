#!/usr/bin/env node
import { program } from "commander";
import cliMd from "cli-markdown";

program
	.name("dheeraj-purohit")
	.usage("[options]")
	.option("-r, --resume", "prints my developer resume");

program.parse(process.argv);

const { resume } = program.opts();

if (resume) {
	fetch(
		"https://raw.githubusercontent.com/purohitdheeraj/Resume/main/Dheeraj-Purohit.md",
		{
			method: "GET",
			headers: {
				"Content-Type": "text/plain",
			},
		}
	)
		.then((response) => response.text())
		.then((text) => console.log(cliMd(text)))
		.catch((error) => {
			console.error(error);
		});
} else {
	fetch(
		"https://raw.githubusercontent.com/purohitdheeraj/purohitdheeraj/main/README.md",
		{
			method: "GET",
			headers: { "Content-Type": "text/plain" },
		}
	)
		.then((response) => response.text())
		.then((text) => console.log(cliMd(text)))
		.catch((error) => {
			console.error(error);
		});
}