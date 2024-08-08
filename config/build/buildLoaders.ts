import { RuleSetRule } from "webpack";

export function buildLoaders(): RuleSetRule[] {
  const typescriptLoader = {
    test: /\.tsx?$/, // регулярка для нахождения ts файлов
    use: "ts-loader", // сам лоадер
    exclude: /node_modules/, // исключение папок
  };
  return [typescriptLoader];
}
