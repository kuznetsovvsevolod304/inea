   sourceFile.getExportDeclarations().forEach((exportDecl) => {
     const namedExports = exportDecl.getNamedExports();
     namedExports.forEach((namedExport) => {
       const name = namedExport.getName();
       const alias = namedExport.getAliasNode()?.getText() || name;
       defs.push({ name, alias });
     });
   });
   