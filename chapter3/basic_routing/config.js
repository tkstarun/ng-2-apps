System.config({
  baseURL: "/",
  transpiler: "typescript",
  typescriptOptions: {
    "emitDecoratorMetadata": true
  },
  packages: {
    "app": {
      "defaultExtension": "ts",
      "main": "main_child_route.ts"
    }
  }
});
