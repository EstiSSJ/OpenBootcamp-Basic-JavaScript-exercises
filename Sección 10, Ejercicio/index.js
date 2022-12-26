import * as controller from "./controller.js";
import chalk from "chalk";

console.log(chalk.green(controller.multiplica(controller.suma(1, 2), controller.suma(4, 5))));
