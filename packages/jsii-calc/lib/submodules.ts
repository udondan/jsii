import { submodule } from '@scope/jsii-calc-lib';
import { IReflectable, ReflectableEntry, Reflector } from '@scope/jsii-calc-lib/lib/submodule';

/**
 * Ensures submodule-imported types from dependencies can be used correctly.
 */
export class UpcasingReflectable implements submodule.IReflectable {
  public static readonly reflector = new submodule.Reflector();

  public constructor(private readonly delegate: Record<string, unknown>) { }

  public get entries(): submodule.ReflectableEntry[] {
      return Object.entries(this.delegate)
          .map(([key, value]) => ({ key: key.toLocaleUpperCase(), value }));
  }
}

export class UpcasingReflectableNamed implements IReflectable {
  public static readonly reflector = new Reflector();

  public constructor(private readonly delegate: Record<string, unknown>) { }

  public get entries(): ReflectableEntry[] {
      return Object.entries(this.delegate)
          .map(([key, value]) => ({ key: key.toLocaleUpperCase(), value }));
  }
}
