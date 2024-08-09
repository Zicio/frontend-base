import { RuleSetRule } from "webpack";

//  Если не используем TS - нужен babel-loader
export function buildLoaders(): RuleSetRule[] {
  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      "style-loader",
      // Translates CSS into CommonJS
      "css-loader",
      // Compiles Sass to CSS
      "sass-loader",
    ],
  };
  const typescriptLoader = {
    test: /\.tsx?$/, // регулярка для нахождения ts файлов
    use: "ts-loader", // сам лоадер
    exclude: /node_modules/, // исключение папок
  };
  return [typescriptLoader, cssLoader];
}
