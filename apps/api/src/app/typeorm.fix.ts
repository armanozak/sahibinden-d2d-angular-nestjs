const entityContext = (require as any).context('../../', true, /.entity.ts$/);

export const entities = entityContext
  .keys()
  .map(modulePath => entityContext(modulePath))
  .reduce(
    (result, someModule) =>
      result.concat(Object.keys(someModule).map(key => someModule[key])),
    [],
  );

const migrationContext = (require as any).context('../../', true, /.migration.ts$/);

export const migrations = migrationContext
    .keys()
    .map(modulePath => migrationContext(modulePath))
    .reduce(
      (result, someModule) =>
        result.concat(Object.keys(someModule).map(key => someModule[key])),
      [],
    );
