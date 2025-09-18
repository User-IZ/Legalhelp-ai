
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Profile
 * 
 */
export type Profile = $Result.DefaultSelection<Prisma.$ProfilePayload>
/**
 * Model AdvocateProfile
 * 
 */
export type AdvocateProfile = $Result.DefaultSelection<Prisma.$AdvocateProfilePayload>
/**
 * Model Report
 * 
 */
export type Report = $Result.DefaultSelection<Prisma.$ReportPayload>
/**
 * Model VkycDocument
 * 
 */
export type VkycDocument = $Result.DefaultSelection<Prisma.$VkycDocumentPayload>
/**
 * Model ConsultationRequest
 * 
 */
export type ConsultationRequest = $Result.DefaultSelection<Prisma.$ConsultationRequestPayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model AccessGrant
 * 
 */
export type AccessGrant = $Result.DefaultSelection<Prisma.$AccessGrantPayload>
/**
 * Model ChatMessage
 * 
 */
export type ChatMessage = $Result.DefaultSelection<Prisma.$ChatMessagePayload>
/**
 * Model VideoCall
 * 
 */
export type VideoCall = $Result.DefaultSelection<Prisma.$VideoCallPayload>
/**
 * Model MonthlyEarnings
 * 
 */
export type MonthlyEarnings = $Result.DefaultSelection<Prisma.$MonthlyEarningsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  REGULAR_USER: 'REGULAR_USER',
  BARRISTER: 'BARRISTER',
  LAWYER: 'LAWYER',
  GOVERNMENT_OFFICIAL: 'GOVERNMENT_OFFICIAL'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const KycType: {
  REGULAR: 'REGULAR',
  PROFESSIONAL: 'PROFESSIONAL'
};

export type KycType = (typeof KycType)[keyof typeof KycType]


export const ConsultationType: {
  VIDEO: 'VIDEO',
  CHAT: 'CHAT',
  BOTH: 'BOTH'
};

export type ConsultationType = (typeof ConsultationType)[keyof typeof ConsultationType]


export const RequestStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
};

export type RequestStatus = (typeof RequestStatus)[keyof typeof RequestStatus]


export const PaymentStatus: {
  PENDING: 'PENDING',
  PROCESSING: 'PROCESSING',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED',
  REFUNDED: 'REFUNDED'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]


export const MessageType: {
  TEXT: 'TEXT',
  FILE: 'FILE',
  IMAGE: 'IMAGE'
};

export type MessageType = (typeof MessageType)[keyof typeof MessageType]


export const CallStatus: {
  PENDING: 'PENDING',
  ACTIVE: 'ACTIVE',
  ENDED: 'ENDED',
  FAILED: 'FAILED'
};

export type CallStatus = (typeof CallStatus)[keyof typeof CallStatus]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type KycType = $Enums.KycType

export const KycType: typeof $Enums.KycType

export type ConsultationType = $Enums.ConsultationType

export const ConsultationType: typeof $Enums.ConsultationType

export type RequestStatus = $Enums.RequestStatus

export const RequestStatus: typeof $Enums.RequestStatus

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

export type MessageType = $Enums.MessageType

export const MessageType: typeof $Enums.MessageType

export type CallStatus = $Enums.CallStatus

export const CallStatus: typeof $Enums.CallStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Profiles
 * const profiles = await prisma.profile.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Profiles
   * const profiles = await prisma.profile.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.profile`: Exposes CRUD operations for the **Profile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profile.findMany()
    * ```
    */
  get profile(): Prisma.ProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.advocateProfile`: Exposes CRUD operations for the **AdvocateProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AdvocateProfiles
    * const advocateProfiles = await prisma.advocateProfile.findMany()
    * ```
    */
  get advocateProfile(): Prisma.AdvocateProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.report`: Exposes CRUD operations for the **Report** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reports
    * const reports = await prisma.report.findMany()
    * ```
    */
  get report(): Prisma.ReportDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vkycDocument`: Exposes CRUD operations for the **VkycDocument** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VkycDocuments
    * const vkycDocuments = await prisma.vkycDocument.findMany()
    * ```
    */
  get vkycDocument(): Prisma.VkycDocumentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.consultationRequest`: Exposes CRUD operations for the **ConsultationRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ConsultationRequests
    * const consultationRequests = await prisma.consultationRequest.findMany()
    * ```
    */
  get consultationRequest(): Prisma.ConsultationRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.accessGrant`: Exposes CRUD operations for the **AccessGrant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AccessGrants
    * const accessGrants = await prisma.accessGrant.findMany()
    * ```
    */
  get accessGrant(): Prisma.AccessGrantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.chatMessage`: Exposes CRUD operations for the **ChatMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatMessages
    * const chatMessages = await prisma.chatMessage.findMany()
    * ```
    */
  get chatMessage(): Prisma.ChatMessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.videoCall`: Exposes CRUD operations for the **VideoCall** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VideoCalls
    * const videoCalls = await prisma.videoCall.findMany()
    * ```
    */
  get videoCall(): Prisma.VideoCallDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.monthlyEarnings`: Exposes CRUD operations for the **MonthlyEarnings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MonthlyEarnings
    * const monthlyEarnings = await prisma.monthlyEarnings.findMany()
    * ```
    */
  get monthlyEarnings(): Prisma.MonthlyEarningsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.11.1
   * Query Engine version: f40f79ec31188888a2e33acda0ecc8fd10a853a9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Profile: 'Profile',
    AdvocateProfile: 'AdvocateProfile',
    Report: 'Report',
    VkycDocument: 'VkycDocument',
    ConsultationRequest: 'ConsultationRequest',
    Payment: 'Payment',
    AccessGrant: 'AccessGrant',
    ChatMessage: 'ChatMessage',
    VideoCall: 'VideoCall',
    MonthlyEarnings: 'MonthlyEarnings'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "profile" | "advocateProfile" | "report" | "vkycDocument" | "consultationRequest" | "payment" | "accessGrant" | "chatMessage" | "videoCall" | "monthlyEarnings"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Profile: {
        payload: Prisma.$ProfilePayload<ExtArgs>
        fields: Prisma.ProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findFirst: {
            args: Prisma.ProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findMany: {
            args: Prisma.ProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          create: {
            args: Prisma.ProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          createMany: {
            args: Prisma.ProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          delete: {
            args: Prisma.ProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          update: {
            args: Prisma.ProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          deleteMany: {
            args: Prisma.ProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          upsert: {
            args: Prisma.ProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          aggregate: {
            args: Prisma.ProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfile>
          }
          groupBy: {
            args: Prisma.ProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfileCountArgs<ExtArgs>
            result: $Utils.Optional<ProfileCountAggregateOutputType> | number
          }
        }
      }
      AdvocateProfile: {
        payload: Prisma.$AdvocateProfilePayload<ExtArgs>
        fields: Prisma.AdvocateProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdvocateProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvocateProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdvocateProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvocateProfilePayload>
          }
          findFirst: {
            args: Prisma.AdvocateProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvocateProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdvocateProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvocateProfilePayload>
          }
          findMany: {
            args: Prisma.AdvocateProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvocateProfilePayload>[]
          }
          create: {
            args: Prisma.AdvocateProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvocateProfilePayload>
          }
          createMany: {
            args: Prisma.AdvocateProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdvocateProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvocateProfilePayload>[]
          }
          delete: {
            args: Prisma.AdvocateProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvocateProfilePayload>
          }
          update: {
            args: Prisma.AdvocateProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvocateProfilePayload>
          }
          deleteMany: {
            args: Prisma.AdvocateProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdvocateProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdvocateProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvocateProfilePayload>[]
          }
          upsert: {
            args: Prisma.AdvocateProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdvocateProfilePayload>
          }
          aggregate: {
            args: Prisma.AdvocateProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdvocateProfile>
          }
          groupBy: {
            args: Prisma.AdvocateProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdvocateProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdvocateProfileCountArgs<ExtArgs>
            result: $Utils.Optional<AdvocateProfileCountAggregateOutputType> | number
          }
        }
      }
      Report: {
        payload: Prisma.$ReportPayload<ExtArgs>
        fields: Prisma.ReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          findFirst: {
            args: Prisma.ReportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          findMany: {
            args: Prisma.ReportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>[]
          }
          create: {
            args: Prisma.ReportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          createMany: {
            args: Prisma.ReportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>[]
          }
          delete: {
            args: Prisma.ReportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          update: {
            args: Prisma.ReportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          deleteMany: {
            args: Prisma.ReportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReportUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>[]
          }
          upsert: {
            args: Prisma.ReportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReportPayload>
          }
          aggregate: {
            args: Prisma.ReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReport>
          }
          groupBy: {
            args: Prisma.ReportGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReportCountArgs<ExtArgs>
            result: $Utils.Optional<ReportCountAggregateOutputType> | number
          }
        }
      }
      VkycDocument: {
        payload: Prisma.$VkycDocumentPayload<ExtArgs>
        fields: Prisma.VkycDocumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VkycDocumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VkycDocumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VkycDocumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VkycDocumentPayload>
          }
          findFirst: {
            args: Prisma.VkycDocumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VkycDocumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VkycDocumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VkycDocumentPayload>
          }
          findMany: {
            args: Prisma.VkycDocumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VkycDocumentPayload>[]
          }
          create: {
            args: Prisma.VkycDocumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VkycDocumentPayload>
          }
          createMany: {
            args: Prisma.VkycDocumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VkycDocumentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VkycDocumentPayload>[]
          }
          delete: {
            args: Prisma.VkycDocumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VkycDocumentPayload>
          }
          update: {
            args: Prisma.VkycDocumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VkycDocumentPayload>
          }
          deleteMany: {
            args: Prisma.VkycDocumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VkycDocumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VkycDocumentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VkycDocumentPayload>[]
          }
          upsert: {
            args: Prisma.VkycDocumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VkycDocumentPayload>
          }
          aggregate: {
            args: Prisma.VkycDocumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVkycDocument>
          }
          groupBy: {
            args: Prisma.VkycDocumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<VkycDocumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.VkycDocumentCountArgs<ExtArgs>
            result: $Utils.Optional<VkycDocumentCountAggregateOutputType> | number
          }
        }
      }
      ConsultationRequest: {
        payload: Prisma.$ConsultationRequestPayload<ExtArgs>
        fields: Prisma.ConsultationRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ConsultationRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ConsultationRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationRequestPayload>
          }
          findFirst: {
            args: Prisma.ConsultationRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ConsultationRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationRequestPayload>
          }
          findMany: {
            args: Prisma.ConsultationRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationRequestPayload>[]
          }
          create: {
            args: Prisma.ConsultationRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationRequestPayload>
          }
          createMany: {
            args: Prisma.ConsultationRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ConsultationRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationRequestPayload>[]
          }
          delete: {
            args: Prisma.ConsultationRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationRequestPayload>
          }
          update: {
            args: Prisma.ConsultationRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationRequestPayload>
          }
          deleteMany: {
            args: Prisma.ConsultationRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ConsultationRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ConsultationRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationRequestPayload>[]
          }
          upsert: {
            args: Prisma.ConsultationRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ConsultationRequestPayload>
          }
          aggregate: {
            args: Prisma.ConsultationRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateConsultationRequest>
          }
          groupBy: {
            args: Prisma.ConsultationRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<ConsultationRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.ConsultationRequestCountArgs<ExtArgs>
            result: $Utils.Optional<ConsultationRequestCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      AccessGrant: {
        payload: Prisma.$AccessGrantPayload<ExtArgs>
        fields: Prisma.AccessGrantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccessGrantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessGrantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccessGrantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessGrantPayload>
          }
          findFirst: {
            args: Prisma.AccessGrantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessGrantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccessGrantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessGrantPayload>
          }
          findMany: {
            args: Prisma.AccessGrantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessGrantPayload>[]
          }
          create: {
            args: Prisma.AccessGrantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessGrantPayload>
          }
          createMany: {
            args: Prisma.AccessGrantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccessGrantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessGrantPayload>[]
          }
          delete: {
            args: Prisma.AccessGrantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessGrantPayload>
          }
          update: {
            args: Prisma.AccessGrantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessGrantPayload>
          }
          deleteMany: {
            args: Prisma.AccessGrantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccessGrantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccessGrantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessGrantPayload>[]
          }
          upsert: {
            args: Prisma.AccessGrantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccessGrantPayload>
          }
          aggregate: {
            args: Prisma.AccessGrantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccessGrant>
          }
          groupBy: {
            args: Prisma.AccessGrantGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccessGrantGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccessGrantCountArgs<ExtArgs>
            result: $Utils.Optional<AccessGrantCountAggregateOutputType> | number
          }
        }
      }
      ChatMessage: {
        payload: Prisma.$ChatMessagePayload<ExtArgs>
        fields: Prisma.ChatMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          findFirst: {
            args: Prisma.ChatMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          findMany: {
            args: Prisma.ChatMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          create: {
            args: Prisma.ChatMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          createMany: {
            args: Prisma.ChatMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatMessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          delete: {
            args: Prisma.ChatMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          update: {
            args: Prisma.ChatMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          deleteMany: {
            args: Prisma.ChatMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ChatMessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>[]
          }
          upsert: {
            args: Prisma.ChatMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMessagePayload>
          }
          aggregate: {
            args: Prisma.ChatMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatMessage>
          }
          groupBy: {
            args: Prisma.ChatMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatMessageCountArgs<ExtArgs>
            result: $Utils.Optional<ChatMessageCountAggregateOutputType> | number
          }
        }
      }
      VideoCall: {
        payload: Prisma.$VideoCallPayload<ExtArgs>
        fields: Prisma.VideoCallFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VideoCallFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoCallPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VideoCallFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoCallPayload>
          }
          findFirst: {
            args: Prisma.VideoCallFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoCallPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VideoCallFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoCallPayload>
          }
          findMany: {
            args: Prisma.VideoCallFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoCallPayload>[]
          }
          create: {
            args: Prisma.VideoCallCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoCallPayload>
          }
          createMany: {
            args: Prisma.VideoCallCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VideoCallCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoCallPayload>[]
          }
          delete: {
            args: Prisma.VideoCallDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoCallPayload>
          }
          update: {
            args: Prisma.VideoCallUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoCallPayload>
          }
          deleteMany: {
            args: Prisma.VideoCallDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VideoCallUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VideoCallUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoCallPayload>[]
          }
          upsert: {
            args: Prisma.VideoCallUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VideoCallPayload>
          }
          aggregate: {
            args: Prisma.VideoCallAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVideoCall>
          }
          groupBy: {
            args: Prisma.VideoCallGroupByArgs<ExtArgs>
            result: $Utils.Optional<VideoCallGroupByOutputType>[]
          }
          count: {
            args: Prisma.VideoCallCountArgs<ExtArgs>
            result: $Utils.Optional<VideoCallCountAggregateOutputType> | number
          }
        }
      }
      MonthlyEarnings: {
        payload: Prisma.$MonthlyEarningsPayload<ExtArgs>
        fields: Prisma.MonthlyEarningsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MonthlyEarningsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyEarningsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MonthlyEarningsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyEarningsPayload>
          }
          findFirst: {
            args: Prisma.MonthlyEarningsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyEarningsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MonthlyEarningsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyEarningsPayload>
          }
          findMany: {
            args: Prisma.MonthlyEarningsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyEarningsPayload>[]
          }
          create: {
            args: Prisma.MonthlyEarningsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyEarningsPayload>
          }
          createMany: {
            args: Prisma.MonthlyEarningsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MonthlyEarningsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyEarningsPayload>[]
          }
          delete: {
            args: Prisma.MonthlyEarningsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyEarningsPayload>
          }
          update: {
            args: Prisma.MonthlyEarningsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyEarningsPayload>
          }
          deleteMany: {
            args: Prisma.MonthlyEarningsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MonthlyEarningsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MonthlyEarningsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyEarningsPayload>[]
          }
          upsert: {
            args: Prisma.MonthlyEarningsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonthlyEarningsPayload>
          }
          aggregate: {
            args: Prisma.MonthlyEarningsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMonthlyEarnings>
          }
          groupBy: {
            args: Prisma.MonthlyEarningsGroupByArgs<ExtArgs>
            result: $Utils.Optional<MonthlyEarningsGroupByOutputType>[]
          }
          count: {
            args: Prisma.MonthlyEarningsCountArgs<ExtArgs>
            result: $Utils.Optional<MonthlyEarningsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    profile?: ProfileOmit
    advocateProfile?: AdvocateProfileOmit
    report?: ReportOmit
    vkycDocument?: VkycDocumentOmit
    consultationRequest?: ConsultationRequestOmit
    payment?: PaymentOmit
    accessGrant?: AccessGrantOmit
    chatMessage?: ChatMessageOmit
    videoCall?: VideoCallOmit
    monthlyEarnings?: MonthlyEarningsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ProfileCountOutputType
   */

  export type ProfileCountOutputType = {
    reports: number
    vkycDocuments: number
  }

  export type ProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reports?: boolean | ProfileCountOutputTypeCountReportsArgs
    vkycDocuments?: boolean | ProfileCountOutputTypeCountVkycDocumentsArgs
  }

  // Custom InputTypes
  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileCountOutputType
     */
    select?: ProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportWhereInput
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountVkycDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VkycDocumentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Profile
   */

  export type AggregateProfile = {
    _count: ProfileCountAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  export type ProfileMinAggregateOutputType = {
    id: string | null
    address: string | null
    created_at: Date | null
    email: string | null
    password: string | null
    first_name: string | null
    last_name: string | null
    phone: string | null
    role: $Enums.UserRole | null
    kyc_type: $Enums.KycType | null
    updated_at: Date | null
    vkyc_completed: boolean | null
    vkyc_completed_at: Date | null
    can_upload_reports: boolean | null
  }

  export type ProfileMaxAggregateOutputType = {
    id: string | null
    address: string | null
    created_at: Date | null
    email: string | null
    password: string | null
    first_name: string | null
    last_name: string | null
    phone: string | null
    role: $Enums.UserRole | null
    kyc_type: $Enums.KycType | null
    updated_at: Date | null
    vkyc_completed: boolean | null
    vkyc_completed_at: Date | null
    can_upload_reports: boolean | null
  }

  export type ProfileCountAggregateOutputType = {
    id: number
    address: number
    created_at: number
    email: number
    password: number
    first_name: number
    last_name: number
    phone: number
    role: number
    kyc_type: number
    updated_at: number
    vkyc_completed: number
    vkyc_completed_at: number
    can_upload_reports: number
    _all: number
  }


  export type ProfileMinAggregateInputType = {
    id?: true
    address?: true
    created_at?: true
    email?: true
    password?: true
    first_name?: true
    last_name?: true
    phone?: true
    role?: true
    kyc_type?: true
    updated_at?: true
    vkyc_completed?: true
    vkyc_completed_at?: true
    can_upload_reports?: true
  }

  export type ProfileMaxAggregateInputType = {
    id?: true
    address?: true
    created_at?: true
    email?: true
    password?: true
    first_name?: true
    last_name?: true
    phone?: true
    role?: true
    kyc_type?: true
    updated_at?: true
    vkyc_completed?: true
    vkyc_completed_at?: true
    can_upload_reports?: true
  }

  export type ProfileCountAggregateInputType = {
    id?: true
    address?: true
    created_at?: true
    email?: true
    password?: true
    first_name?: true
    last_name?: true
    phone?: true
    role?: true
    kyc_type?: true
    updated_at?: true
    vkyc_completed?: true
    vkyc_completed_at?: true
    can_upload_reports?: true
    _all?: true
  }

  export type ProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profile to aggregate.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Profiles
    **/
    _count?: true | ProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfileMaxAggregateInputType
  }

  export type GetProfileAggregateType<T extends ProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfile[P]>
      : GetScalarType<T[P], AggregateProfile[P]>
  }




  export type ProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileWhereInput
    orderBy?: ProfileOrderByWithAggregationInput | ProfileOrderByWithAggregationInput[]
    by: ProfileScalarFieldEnum[] | ProfileScalarFieldEnum
    having?: ProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfileCountAggregateInputType | true
    _min?: ProfileMinAggregateInputType
    _max?: ProfileMaxAggregateInputType
  }

  export type ProfileGroupByOutputType = {
    id: string
    address: string | null
    created_at: Date
    email: string | null
    password: string | null
    first_name: string | null
    last_name: string | null
    phone: string | null
    role: $Enums.UserRole
    kyc_type: $Enums.KycType
    updated_at: Date
    vkyc_completed: boolean
    vkyc_completed_at: Date | null
    can_upload_reports: boolean
    _count: ProfileCountAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  type GetProfileGroupByPayload<T extends ProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileGroupByOutputType[P]>
        }
      >
    >


  export type ProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    created_at?: boolean
    email?: boolean
    password?: boolean
    first_name?: boolean
    last_name?: boolean
    phone?: boolean
    role?: boolean
    kyc_type?: boolean
    updated_at?: boolean
    vkyc_completed?: boolean
    vkyc_completed_at?: boolean
    can_upload_reports?: boolean
    reports?: boolean | Profile$reportsArgs<ExtArgs>
    advocateProfile?: boolean | Profile$advocateProfileArgs<ExtArgs>
    vkycDocuments?: boolean | Profile$vkycDocumentsArgs<ExtArgs>
    _count?: boolean | ProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    created_at?: boolean
    email?: boolean
    password?: boolean
    first_name?: boolean
    last_name?: boolean
    phone?: boolean
    role?: boolean
    kyc_type?: boolean
    updated_at?: boolean
    vkyc_completed?: boolean
    vkyc_completed_at?: boolean
    can_upload_reports?: boolean
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    created_at?: boolean
    email?: boolean
    password?: boolean
    first_name?: boolean
    last_name?: boolean
    phone?: boolean
    role?: boolean
    kyc_type?: boolean
    updated_at?: boolean
    vkyc_completed?: boolean
    vkyc_completed_at?: boolean
    can_upload_reports?: boolean
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectScalar = {
    id?: boolean
    address?: boolean
    created_at?: boolean
    email?: boolean
    password?: boolean
    first_name?: boolean
    last_name?: boolean
    phone?: boolean
    role?: boolean
    kyc_type?: boolean
    updated_at?: boolean
    vkyc_completed?: boolean
    vkyc_completed_at?: boolean
    can_upload_reports?: boolean
  }

  export type ProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "address" | "created_at" | "email" | "password" | "first_name" | "last_name" | "phone" | "role" | "kyc_type" | "updated_at" | "vkyc_completed" | "vkyc_completed_at" | "can_upload_reports", ExtArgs["result"]["profile"]>
  export type ProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reports?: boolean | Profile$reportsArgs<ExtArgs>
    advocateProfile?: boolean | Profile$advocateProfileArgs<ExtArgs>
    vkycDocuments?: boolean | Profile$vkycDocumentsArgs<ExtArgs>
    _count?: boolean | ProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Profile"
    objects: {
      reports: Prisma.$ReportPayload<ExtArgs>[]
      advocateProfile: Prisma.$AdvocateProfilePayload<ExtArgs> | null
      vkycDocuments: Prisma.$VkycDocumentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      address: string | null
      created_at: Date
      email: string | null
      password: string | null
      first_name: string | null
      last_name: string | null
      phone: string | null
      role: $Enums.UserRole
      kyc_type: $Enums.KycType
      updated_at: Date
      vkyc_completed: boolean
      vkyc_completed_at: Date | null
      can_upload_reports: boolean
    }, ExtArgs["result"]["profile"]>
    composites: {}
  }

  type ProfileGetPayload<S extends boolean | null | undefined | ProfileDefaultArgs> = $Result.GetResult<Prisma.$ProfilePayload, S>

  type ProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfileCountAggregateInputType | true
    }

  export interface ProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Profile'], meta: { name: 'Profile' } }
    /**
     * Find zero or one Profile that matches the filter.
     * @param {ProfileFindUniqueArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfileFindUniqueArgs>(args: SelectSubset<T, ProfileFindUniqueArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfileFindUniqueOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfileFindFirstArgs>(args?: SelectSubset<T, ProfileFindFirstArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profile.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profileWithIdOnly = await prisma.profile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfileFindManyArgs>(args?: SelectSubset<T, ProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profile.
     * @param {ProfileCreateArgs} args - Arguments to create a Profile.
     * @example
     * // Create one Profile
     * const Profile = await prisma.profile.create({
     *   data: {
     *     // ... data to create a Profile
     *   }
     * })
     * 
     */
    create<T extends ProfileCreateArgs>(args: SelectSubset<T, ProfileCreateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profiles.
     * @param {ProfileCreateManyArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfileCreateManyArgs>(args?: SelectSubset<T, ProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Profiles and returns the data saved in the database.
     * @param {ProfileCreateManyAndReturnArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Profile.
     * @param {ProfileDeleteArgs} args - Arguments to delete one Profile.
     * @example
     * // Delete one Profile
     * const Profile = await prisma.profile.delete({
     *   where: {
     *     // ... filter to delete one Profile
     *   }
     * })
     * 
     */
    delete<T extends ProfileDeleteArgs>(args: SelectSubset<T, ProfileDeleteArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profile.
     * @param {ProfileUpdateArgs} args - Arguments to update one Profile.
     * @example
     * // Update one Profile
     * const profile = await prisma.profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfileUpdateArgs>(args: SelectSubset<T, ProfileUpdateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profiles.
     * @param {ProfileDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfileDeleteManyArgs>(args?: SelectSubset<T, ProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfileUpdateManyArgs>(args: SelectSubset<T, ProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles and returns the data updated in the database.
     * @param {ProfileUpdateManyAndReturnArgs} args - Arguments to update many Profiles.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Profile.
     * @param {ProfileUpsertArgs} args - Arguments to update or create a Profile.
     * @example
     * // Update or create a Profile
     * const profile = await prisma.profile.upsert({
     *   create: {
     *     // ... data to create a Profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profile we want to update
     *   }
     * })
     */
    upsert<T extends ProfileUpsertArgs>(args: SelectSubset<T, ProfileUpsertArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profile.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends ProfileCountArgs>(
      args?: Subset<T, ProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProfileAggregateArgs>(args: Subset<T, ProfileAggregateArgs>): Prisma.PrismaPromise<GetProfileAggregateType<T>>

    /**
     * Group by Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileGroupByArgs['orderBy'] }
        : { orderBy?: ProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Profile model
   */
  readonly fields: ProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reports<T extends Profile$reportsArgs<ExtArgs> = {}>(args?: Subset<T, Profile$reportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    advocateProfile<T extends Profile$advocateProfileArgs<ExtArgs> = {}>(args?: Subset<T, Profile$advocateProfileArgs<ExtArgs>>): Prisma__AdvocateProfileClient<$Result.GetResult<Prisma.$AdvocateProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    vkycDocuments<T extends Profile$vkycDocumentsArgs<ExtArgs> = {}>(args?: Subset<T, Profile$vkycDocumentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VkycDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Profile model
   */
  interface ProfileFieldRefs {
    readonly id: FieldRef<"Profile", 'String'>
    readonly address: FieldRef<"Profile", 'String'>
    readonly created_at: FieldRef<"Profile", 'DateTime'>
    readonly email: FieldRef<"Profile", 'String'>
    readonly password: FieldRef<"Profile", 'String'>
    readonly first_name: FieldRef<"Profile", 'String'>
    readonly last_name: FieldRef<"Profile", 'String'>
    readonly phone: FieldRef<"Profile", 'String'>
    readonly role: FieldRef<"Profile", 'UserRole'>
    readonly kyc_type: FieldRef<"Profile", 'KycType'>
    readonly updated_at: FieldRef<"Profile", 'DateTime'>
    readonly vkyc_completed: FieldRef<"Profile", 'Boolean'>
    readonly vkyc_completed_at: FieldRef<"Profile", 'DateTime'>
    readonly can_upload_reports: FieldRef<"Profile", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Profile findUnique
   */
  export type ProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findUniqueOrThrow
   */
  export type ProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findFirst
   */
  export type ProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findFirstOrThrow
   */
  export type ProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findMany
   */
  export type ProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profiles to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile create
   */
  export type ProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a Profile.
     */
    data?: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
  }

  /**
   * Profile createMany
   */
  export type ProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profile createManyAndReturn
   */
  export type ProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profile update
   */
  export type ProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a Profile.
     */
    data: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
    /**
     * Choose, which Profile to update.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile updateMany
   */
  export type ProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
  }

  /**
   * Profile updateManyAndReturn
   */
  export type ProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
  }

  /**
   * Profile upsert
   */
  export type ProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the Profile to update in case it exists.
     */
    where: ProfileWhereUniqueInput
    /**
     * In case the Profile found by the `where` argument doesn't exist, create a new Profile with this data.
     */
    create: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
    /**
     * In case the Profile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
  }

  /**
   * Profile delete
   */
  export type ProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter which Profile to delete.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile deleteMany
   */
  export type ProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profiles to delete
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to delete.
     */
    limit?: number
  }

  /**
   * Profile.reports
   */
  export type Profile$reportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    where?: ReportWhereInput
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    cursor?: ReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Profile.advocateProfile
   */
  export type Profile$advocateProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdvocateProfile
     */
    select?: AdvocateProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdvocateProfile
     */
    omit?: AdvocateProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvocateProfileInclude<ExtArgs> | null
    where?: AdvocateProfileWhereInput
  }

  /**
   * Profile.vkycDocuments
   */
  export type Profile$vkycDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VkycDocument
     */
    select?: VkycDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VkycDocument
     */
    omit?: VkycDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VkycDocumentInclude<ExtArgs> | null
    where?: VkycDocumentWhereInput
    orderBy?: VkycDocumentOrderByWithRelationInput | VkycDocumentOrderByWithRelationInput[]
    cursor?: VkycDocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VkycDocumentScalarFieldEnum | VkycDocumentScalarFieldEnum[]
  }

  /**
   * Profile without action
   */
  export type ProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
  }


  /**
   * Model AdvocateProfile
   */

  export type AggregateAdvocateProfile = {
    _count: AdvocateProfileCountAggregateOutputType | null
    _avg: AdvocateProfileAvgAggregateOutputType | null
    _sum: AdvocateProfileSumAggregateOutputType | null
    _min: AdvocateProfileMinAggregateOutputType | null
    _max: AdvocateProfileMaxAggregateOutputType | null
  }

  export type AdvocateProfileAvgAggregateOutputType = {
    experience: number | null
    hourly_rate: number | null
    total_consultations: number | null
    total_earnings: number | null
    rating: number | null
  }

  export type AdvocateProfileSumAggregateOutputType = {
    experience: number | null
    hourly_rate: number | null
    total_consultations: number | null
    total_earnings: number | null
    rating: number | null
  }

  export type AdvocateProfileMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    experience: number | null
    bio: string | null
    education: string | null
    hourly_rate: number | null
    location: string | null
    image_url: string | null
    is_verified: boolean | null
    is_available: boolean | null
    total_consultations: number | null
    total_earnings: number | null
    rating: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AdvocateProfileMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    experience: number | null
    bio: string | null
    education: string | null
    hourly_rate: number | null
    location: string | null
    image_url: string | null
    is_verified: boolean | null
    is_available: boolean | null
    total_consultations: number | null
    total_earnings: number | null
    rating: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type AdvocateProfileCountAggregateOutputType = {
    id: number
    user_id: number
    specialization: number
    experience: number
    bio: number
    education: number
    certifications: number
    hourly_rate: number
    location: number
    languages: number
    image_url: number
    is_verified: number
    is_available: number
    total_consultations: number
    total_earnings: number
    rating: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type AdvocateProfileAvgAggregateInputType = {
    experience?: true
    hourly_rate?: true
    total_consultations?: true
    total_earnings?: true
    rating?: true
  }

  export type AdvocateProfileSumAggregateInputType = {
    experience?: true
    hourly_rate?: true
    total_consultations?: true
    total_earnings?: true
    rating?: true
  }

  export type AdvocateProfileMinAggregateInputType = {
    id?: true
    user_id?: true
    experience?: true
    bio?: true
    education?: true
    hourly_rate?: true
    location?: true
    image_url?: true
    is_verified?: true
    is_available?: true
    total_consultations?: true
    total_earnings?: true
    rating?: true
    created_at?: true
    updated_at?: true
  }

  export type AdvocateProfileMaxAggregateInputType = {
    id?: true
    user_id?: true
    experience?: true
    bio?: true
    education?: true
    hourly_rate?: true
    location?: true
    image_url?: true
    is_verified?: true
    is_available?: true
    total_consultations?: true
    total_earnings?: true
    rating?: true
    created_at?: true
    updated_at?: true
  }

  export type AdvocateProfileCountAggregateInputType = {
    id?: true
    user_id?: true
    specialization?: true
    experience?: true
    bio?: true
    education?: true
    certifications?: true
    hourly_rate?: true
    location?: true
    languages?: true
    image_url?: true
    is_verified?: true
    is_available?: true
    total_consultations?: true
    total_earnings?: true
    rating?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type AdvocateProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdvocateProfile to aggregate.
     */
    where?: AdvocateProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdvocateProfiles to fetch.
     */
    orderBy?: AdvocateProfileOrderByWithRelationInput | AdvocateProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdvocateProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdvocateProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdvocateProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AdvocateProfiles
    **/
    _count?: true | AdvocateProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdvocateProfileAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdvocateProfileSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdvocateProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdvocateProfileMaxAggregateInputType
  }

  export type GetAdvocateProfileAggregateType<T extends AdvocateProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateAdvocateProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdvocateProfile[P]>
      : GetScalarType<T[P], AggregateAdvocateProfile[P]>
  }




  export type AdvocateProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdvocateProfileWhereInput
    orderBy?: AdvocateProfileOrderByWithAggregationInput | AdvocateProfileOrderByWithAggregationInput[]
    by: AdvocateProfileScalarFieldEnum[] | AdvocateProfileScalarFieldEnum
    having?: AdvocateProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdvocateProfileCountAggregateInputType | true
    _avg?: AdvocateProfileAvgAggregateInputType
    _sum?: AdvocateProfileSumAggregateInputType
    _min?: AdvocateProfileMinAggregateInputType
    _max?: AdvocateProfileMaxAggregateInputType
  }

  export type AdvocateProfileGroupByOutputType = {
    id: string
    user_id: string
    specialization: string[]
    experience: number
    bio: string | null
    education: string | null
    certifications: string[]
    hourly_rate: number
    location: string | null
    languages: string[]
    image_url: string | null
    is_verified: boolean
    is_available: boolean
    total_consultations: number
    total_earnings: number
    rating: number
    created_at: Date
    updated_at: Date
    _count: AdvocateProfileCountAggregateOutputType | null
    _avg: AdvocateProfileAvgAggregateOutputType | null
    _sum: AdvocateProfileSumAggregateOutputType | null
    _min: AdvocateProfileMinAggregateOutputType | null
    _max: AdvocateProfileMaxAggregateOutputType | null
  }

  type GetAdvocateProfileGroupByPayload<T extends AdvocateProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdvocateProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdvocateProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdvocateProfileGroupByOutputType[P]>
            : GetScalarType<T[P], AdvocateProfileGroupByOutputType[P]>
        }
      >
    >


  export type AdvocateProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    specialization?: boolean
    experience?: boolean
    bio?: boolean
    education?: boolean
    certifications?: boolean
    hourly_rate?: boolean
    location?: boolean
    languages?: boolean
    image_url?: boolean
    is_verified?: boolean
    is_available?: boolean
    total_consultations?: boolean
    total_earnings?: boolean
    rating?: boolean
    created_at?: boolean
    updated_at?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["advocateProfile"]>

  export type AdvocateProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    specialization?: boolean
    experience?: boolean
    bio?: boolean
    education?: boolean
    certifications?: boolean
    hourly_rate?: boolean
    location?: boolean
    languages?: boolean
    image_url?: boolean
    is_verified?: boolean
    is_available?: boolean
    total_consultations?: boolean
    total_earnings?: boolean
    rating?: boolean
    created_at?: boolean
    updated_at?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["advocateProfile"]>

  export type AdvocateProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    specialization?: boolean
    experience?: boolean
    bio?: boolean
    education?: boolean
    certifications?: boolean
    hourly_rate?: boolean
    location?: boolean
    languages?: boolean
    image_url?: boolean
    is_verified?: boolean
    is_available?: boolean
    total_consultations?: boolean
    total_earnings?: boolean
    rating?: boolean
    created_at?: boolean
    updated_at?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["advocateProfile"]>

  export type AdvocateProfileSelectScalar = {
    id?: boolean
    user_id?: boolean
    specialization?: boolean
    experience?: boolean
    bio?: boolean
    education?: boolean
    certifications?: boolean
    hourly_rate?: boolean
    location?: boolean
    languages?: boolean
    image_url?: boolean
    is_verified?: boolean
    is_available?: boolean
    total_consultations?: boolean
    total_earnings?: boolean
    rating?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type AdvocateProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "specialization" | "experience" | "bio" | "education" | "certifications" | "hourly_rate" | "location" | "languages" | "image_url" | "is_verified" | "is_available" | "total_consultations" | "total_earnings" | "rating" | "created_at" | "updated_at", ExtArgs["result"]["advocateProfile"]>
  export type AdvocateProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type AdvocateProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type AdvocateProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }

  export type $AdvocateProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AdvocateProfile"
    objects: {
      profile: Prisma.$ProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      specialization: string[]
      experience: number
      bio: string | null
      education: string | null
      certifications: string[]
      hourly_rate: number
      location: string | null
      languages: string[]
      image_url: string | null
      is_verified: boolean
      is_available: boolean
      total_consultations: number
      total_earnings: number
      rating: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["advocateProfile"]>
    composites: {}
  }

  type AdvocateProfileGetPayload<S extends boolean | null | undefined | AdvocateProfileDefaultArgs> = $Result.GetResult<Prisma.$AdvocateProfilePayload, S>

  type AdvocateProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdvocateProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdvocateProfileCountAggregateInputType | true
    }

  export interface AdvocateProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AdvocateProfile'], meta: { name: 'AdvocateProfile' } }
    /**
     * Find zero or one AdvocateProfile that matches the filter.
     * @param {AdvocateProfileFindUniqueArgs} args - Arguments to find a AdvocateProfile
     * @example
     * // Get one AdvocateProfile
     * const advocateProfile = await prisma.advocateProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdvocateProfileFindUniqueArgs>(args: SelectSubset<T, AdvocateProfileFindUniqueArgs<ExtArgs>>): Prisma__AdvocateProfileClient<$Result.GetResult<Prisma.$AdvocateProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AdvocateProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdvocateProfileFindUniqueOrThrowArgs} args - Arguments to find a AdvocateProfile
     * @example
     * // Get one AdvocateProfile
     * const advocateProfile = await prisma.advocateProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdvocateProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, AdvocateProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdvocateProfileClient<$Result.GetResult<Prisma.$AdvocateProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdvocateProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvocateProfileFindFirstArgs} args - Arguments to find a AdvocateProfile
     * @example
     * // Get one AdvocateProfile
     * const advocateProfile = await prisma.advocateProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdvocateProfileFindFirstArgs>(args?: SelectSubset<T, AdvocateProfileFindFirstArgs<ExtArgs>>): Prisma__AdvocateProfileClient<$Result.GetResult<Prisma.$AdvocateProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AdvocateProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvocateProfileFindFirstOrThrowArgs} args - Arguments to find a AdvocateProfile
     * @example
     * // Get one AdvocateProfile
     * const advocateProfile = await prisma.advocateProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdvocateProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, AdvocateProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdvocateProfileClient<$Result.GetResult<Prisma.$AdvocateProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AdvocateProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvocateProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AdvocateProfiles
     * const advocateProfiles = await prisma.advocateProfile.findMany()
     * 
     * // Get first 10 AdvocateProfiles
     * const advocateProfiles = await prisma.advocateProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const advocateProfileWithIdOnly = await prisma.advocateProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdvocateProfileFindManyArgs>(args?: SelectSubset<T, AdvocateProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdvocateProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AdvocateProfile.
     * @param {AdvocateProfileCreateArgs} args - Arguments to create a AdvocateProfile.
     * @example
     * // Create one AdvocateProfile
     * const AdvocateProfile = await prisma.advocateProfile.create({
     *   data: {
     *     // ... data to create a AdvocateProfile
     *   }
     * })
     * 
     */
    create<T extends AdvocateProfileCreateArgs>(args: SelectSubset<T, AdvocateProfileCreateArgs<ExtArgs>>): Prisma__AdvocateProfileClient<$Result.GetResult<Prisma.$AdvocateProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AdvocateProfiles.
     * @param {AdvocateProfileCreateManyArgs} args - Arguments to create many AdvocateProfiles.
     * @example
     * // Create many AdvocateProfiles
     * const advocateProfile = await prisma.advocateProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdvocateProfileCreateManyArgs>(args?: SelectSubset<T, AdvocateProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AdvocateProfiles and returns the data saved in the database.
     * @param {AdvocateProfileCreateManyAndReturnArgs} args - Arguments to create many AdvocateProfiles.
     * @example
     * // Create many AdvocateProfiles
     * const advocateProfile = await prisma.advocateProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AdvocateProfiles and only return the `id`
     * const advocateProfileWithIdOnly = await prisma.advocateProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdvocateProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, AdvocateProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdvocateProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AdvocateProfile.
     * @param {AdvocateProfileDeleteArgs} args - Arguments to delete one AdvocateProfile.
     * @example
     * // Delete one AdvocateProfile
     * const AdvocateProfile = await prisma.advocateProfile.delete({
     *   where: {
     *     // ... filter to delete one AdvocateProfile
     *   }
     * })
     * 
     */
    delete<T extends AdvocateProfileDeleteArgs>(args: SelectSubset<T, AdvocateProfileDeleteArgs<ExtArgs>>): Prisma__AdvocateProfileClient<$Result.GetResult<Prisma.$AdvocateProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AdvocateProfile.
     * @param {AdvocateProfileUpdateArgs} args - Arguments to update one AdvocateProfile.
     * @example
     * // Update one AdvocateProfile
     * const advocateProfile = await prisma.advocateProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdvocateProfileUpdateArgs>(args: SelectSubset<T, AdvocateProfileUpdateArgs<ExtArgs>>): Prisma__AdvocateProfileClient<$Result.GetResult<Prisma.$AdvocateProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AdvocateProfiles.
     * @param {AdvocateProfileDeleteManyArgs} args - Arguments to filter AdvocateProfiles to delete.
     * @example
     * // Delete a few AdvocateProfiles
     * const { count } = await prisma.advocateProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdvocateProfileDeleteManyArgs>(args?: SelectSubset<T, AdvocateProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdvocateProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvocateProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AdvocateProfiles
     * const advocateProfile = await prisma.advocateProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdvocateProfileUpdateManyArgs>(args: SelectSubset<T, AdvocateProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AdvocateProfiles and returns the data updated in the database.
     * @param {AdvocateProfileUpdateManyAndReturnArgs} args - Arguments to update many AdvocateProfiles.
     * @example
     * // Update many AdvocateProfiles
     * const advocateProfile = await prisma.advocateProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AdvocateProfiles and only return the `id`
     * const advocateProfileWithIdOnly = await prisma.advocateProfile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdvocateProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, AdvocateProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdvocateProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AdvocateProfile.
     * @param {AdvocateProfileUpsertArgs} args - Arguments to update or create a AdvocateProfile.
     * @example
     * // Update or create a AdvocateProfile
     * const advocateProfile = await prisma.advocateProfile.upsert({
     *   create: {
     *     // ... data to create a AdvocateProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AdvocateProfile we want to update
     *   }
     * })
     */
    upsert<T extends AdvocateProfileUpsertArgs>(args: SelectSubset<T, AdvocateProfileUpsertArgs<ExtArgs>>): Prisma__AdvocateProfileClient<$Result.GetResult<Prisma.$AdvocateProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AdvocateProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvocateProfileCountArgs} args - Arguments to filter AdvocateProfiles to count.
     * @example
     * // Count the number of AdvocateProfiles
     * const count = await prisma.advocateProfile.count({
     *   where: {
     *     // ... the filter for the AdvocateProfiles we want to count
     *   }
     * })
    **/
    count<T extends AdvocateProfileCountArgs>(
      args?: Subset<T, AdvocateProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdvocateProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AdvocateProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvocateProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdvocateProfileAggregateArgs>(args: Subset<T, AdvocateProfileAggregateArgs>): Prisma.PrismaPromise<GetAdvocateProfileAggregateType<T>>

    /**
     * Group by AdvocateProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdvocateProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdvocateProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdvocateProfileGroupByArgs['orderBy'] }
        : { orderBy?: AdvocateProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdvocateProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdvocateProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AdvocateProfile model
   */
  readonly fields: AdvocateProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AdvocateProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdvocateProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profile<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AdvocateProfile model
   */
  interface AdvocateProfileFieldRefs {
    readonly id: FieldRef<"AdvocateProfile", 'String'>
    readonly user_id: FieldRef<"AdvocateProfile", 'String'>
    readonly specialization: FieldRef<"AdvocateProfile", 'String[]'>
    readonly experience: FieldRef<"AdvocateProfile", 'Int'>
    readonly bio: FieldRef<"AdvocateProfile", 'String'>
    readonly education: FieldRef<"AdvocateProfile", 'String'>
    readonly certifications: FieldRef<"AdvocateProfile", 'String[]'>
    readonly hourly_rate: FieldRef<"AdvocateProfile", 'Float'>
    readonly location: FieldRef<"AdvocateProfile", 'String'>
    readonly languages: FieldRef<"AdvocateProfile", 'String[]'>
    readonly image_url: FieldRef<"AdvocateProfile", 'String'>
    readonly is_verified: FieldRef<"AdvocateProfile", 'Boolean'>
    readonly is_available: FieldRef<"AdvocateProfile", 'Boolean'>
    readonly total_consultations: FieldRef<"AdvocateProfile", 'Int'>
    readonly total_earnings: FieldRef<"AdvocateProfile", 'Float'>
    readonly rating: FieldRef<"AdvocateProfile", 'Float'>
    readonly created_at: FieldRef<"AdvocateProfile", 'DateTime'>
    readonly updated_at: FieldRef<"AdvocateProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AdvocateProfile findUnique
   */
  export type AdvocateProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdvocateProfile
     */
    select?: AdvocateProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdvocateProfile
     */
    omit?: AdvocateProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvocateProfileInclude<ExtArgs> | null
    /**
     * Filter, which AdvocateProfile to fetch.
     */
    where: AdvocateProfileWhereUniqueInput
  }

  /**
   * AdvocateProfile findUniqueOrThrow
   */
  export type AdvocateProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdvocateProfile
     */
    select?: AdvocateProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdvocateProfile
     */
    omit?: AdvocateProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvocateProfileInclude<ExtArgs> | null
    /**
     * Filter, which AdvocateProfile to fetch.
     */
    where: AdvocateProfileWhereUniqueInput
  }

  /**
   * AdvocateProfile findFirst
   */
  export type AdvocateProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdvocateProfile
     */
    select?: AdvocateProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdvocateProfile
     */
    omit?: AdvocateProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvocateProfileInclude<ExtArgs> | null
    /**
     * Filter, which AdvocateProfile to fetch.
     */
    where?: AdvocateProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdvocateProfiles to fetch.
     */
    orderBy?: AdvocateProfileOrderByWithRelationInput | AdvocateProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdvocateProfiles.
     */
    cursor?: AdvocateProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdvocateProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdvocateProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdvocateProfiles.
     */
    distinct?: AdvocateProfileScalarFieldEnum | AdvocateProfileScalarFieldEnum[]
  }

  /**
   * AdvocateProfile findFirstOrThrow
   */
  export type AdvocateProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdvocateProfile
     */
    select?: AdvocateProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdvocateProfile
     */
    omit?: AdvocateProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvocateProfileInclude<ExtArgs> | null
    /**
     * Filter, which AdvocateProfile to fetch.
     */
    where?: AdvocateProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdvocateProfiles to fetch.
     */
    orderBy?: AdvocateProfileOrderByWithRelationInput | AdvocateProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AdvocateProfiles.
     */
    cursor?: AdvocateProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdvocateProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdvocateProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AdvocateProfiles.
     */
    distinct?: AdvocateProfileScalarFieldEnum | AdvocateProfileScalarFieldEnum[]
  }

  /**
   * AdvocateProfile findMany
   */
  export type AdvocateProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdvocateProfile
     */
    select?: AdvocateProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdvocateProfile
     */
    omit?: AdvocateProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvocateProfileInclude<ExtArgs> | null
    /**
     * Filter, which AdvocateProfiles to fetch.
     */
    where?: AdvocateProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AdvocateProfiles to fetch.
     */
    orderBy?: AdvocateProfileOrderByWithRelationInput | AdvocateProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AdvocateProfiles.
     */
    cursor?: AdvocateProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AdvocateProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AdvocateProfiles.
     */
    skip?: number
    distinct?: AdvocateProfileScalarFieldEnum | AdvocateProfileScalarFieldEnum[]
  }

  /**
   * AdvocateProfile create
   */
  export type AdvocateProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdvocateProfile
     */
    select?: AdvocateProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdvocateProfile
     */
    omit?: AdvocateProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvocateProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a AdvocateProfile.
     */
    data: XOR<AdvocateProfileCreateInput, AdvocateProfileUncheckedCreateInput>
  }

  /**
   * AdvocateProfile createMany
   */
  export type AdvocateProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AdvocateProfiles.
     */
    data: AdvocateProfileCreateManyInput | AdvocateProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AdvocateProfile createManyAndReturn
   */
  export type AdvocateProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdvocateProfile
     */
    select?: AdvocateProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdvocateProfile
     */
    omit?: AdvocateProfileOmit<ExtArgs> | null
    /**
     * The data used to create many AdvocateProfiles.
     */
    data: AdvocateProfileCreateManyInput | AdvocateProfileCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvocateProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AdvocateProfile update
   */
  export type AdvocateProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdvocateProfile
     */
    select?: AdvocateProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdvocateProfile
     */
    omit?: AdvocateProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvocateProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a AdvocateProfile.
     */
    data: XOR<AdvocateProfileUpdateInput, AdvocateProfileUncheckedUpdateInput>
    /**
     * Choose, which AdvocateProfile to update.
     */
    where: AdvocateProfileWhereUniqueInput
  }

  /**
   * AdvocateProfile updateMany
   */
  export type AdvocateProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AdvocateProfiles.
     */
    data: XOR<AdvocateProfileUpdateManyMutationInput, AdvocateProfileUncheckedUpdateManyInput>
    /**
     * Filter which AdvocateProfiles to update
     */
    where?: AdvocateProfileWhereInput
    /**
     * Limit how many AdvocateProfiles to update.
     */
    limit?: number
  }

  /**
   * AdvocateProfile updateManyAndReturn
   */
  export type AdvocateProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdvocateProfile
     */
    select?: AdvocateProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AdvocateProfile
     */
    omit?: AdvocateProfileOmit<ExtArgs> | null
    /**
     * The data used to update AdvocateProfiles.
     */
    data: XOR<AdvocateProfileUpdateManyMutationInput, AdvocateProfileUncheckedUpdateManyInput>
    /**
     * Filter which AdvocateProfiles to update
     */
    where?: AdvocateProfileWhereInput
    /**
     * Limit how many AdvocateProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvocateProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AdvocateProfile upsert
   */
  export type AdvocateProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdvocateProfile
     */
    select?: AdvocateProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdvocateProfile
     */
    omit?: AdvocateProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvocateProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the AdvocateProfile to update in case it exists.
     */
    where: AdvocateProfileWhereUniqueInput
    /**
     * In case the AdvocateProfile found by the `where` argument doesn't exist, create a new AdvocateProfile with this data.
     */
    create: XOR<AdvocateProfileCreateInput, AdvocateProfileUncheckedCreateInput>
    /**
     * In case the AdvocateProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdvocateProfileUpdateInput, AdvocateProfileUncheckedUpdateInput>
  }

  /**
   * AdvocateProfile delete
   */
  export type AdvocateProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdvocateProfile
     */
    select?: AdvocateProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdvocateProfile
     */
    omit?: AdvocateProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvocateProfileInclude<ExtArgs> | null
    /**
     * Filter which AdvocateProfile to delete.
     */
    where: AdvocateProfileWhereUniqueInput
  }

  /**
   * AdvocateProfile deleteMany
   */
  export type AdvocateProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AdvocateProfiles to delete
     */
    where?: AdvocateProfileWhereInput
    /**
     * Limit how many AdvocateProfiles to delete.
     */
    limit?: number
  }

  /**
   * AdvocateProfile without action
   */
  export type AdvocateProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdvocateProfile
     */
    select?: AdvocateProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AdvocateProfile
     */
    omit?: AdvocateProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdvocateProfileInclude<ExtArgs> | null
  }


  /**
   * Model Report
   */

  export type AggregateReport = {
    _count: ReportCountAggregateOutputType | null
    _min: ReportMinAggregateOutputType | null
    _max: ReportMaxAggregateOutputType | null
  }

  export type ReportMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    title: string | null
    category: string | null
    description: string | null
    pdf_url: string | null
    created_at: Date | null
    cloudinary_public_id: string | null
    court: string | null
    date: Date | null
    updated_at: Date | null
  }

  export type ReportMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    title: string | null
    category: string | null
    description: string | null
    pdf_url: string | null
    created_at: Date | null
    cloudinary_public_id: string | null
    court: string | null
    date: Date | null
    updated_at: Date | null
  }

  export type ReportCountAggregateOutputType = {
    id: number
    user_id: number
    title: number
    category: number
    description: number
    pdf_url: number
    created_at: number
    cloudinary_public_id: number
    court: number
    date: number
    tags: number
    updated_at: number
    _all: number
  }


  export type ReportMinAggregateInputType = {
    id?: true
    user_id?: true
    title?: true
    category?: true
    description?: true
    pdf_url?: true
    created_at?: true
    cloudinary_public_id?: true
    court?: true
    date?: true
    updated_at?: true
  }

  export type ReportMaxAggregateInputType = {
    id?: true
    user_id?: true
    title?: true
    category?: true
    description?: true
    pdf_url?: true
    created_at?: true
    cloudinary_public_id?: true
    court?: true
    date?: true
    updated_at?: true
  }

  export type ReportCountAggregateInputType = {
    id?: true
    user_id?: true
    title?: true
    category?: true
    description?: true
    pdf_url?: true
    created_at?: true
    cloudinary_public_id?: true
    court?: true
    date?: true
    tags?: true
    updated_at?: true
    _all?: true
  }

  export type ReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Report to aggregate.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reports
    **/
    _count?: true | ReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReportMaxAggregateInputType
  }

  export type GetReportAggregateType<T extends ReportAggregateArgs> = {
        [P in keyof T & keyof AggregateReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReport[P]>
      : GetScalarType<T[P], AggregateReport[P]>
  }




  export type ReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReportWhereInput
    orderBy?: ReportOrderByWithAggregationInput | ReportOrderByWithAggregationInput[]
    by: ReportScalarFieldEnum[] | ReportScalarFieldEnum
    having?: ReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReportCountAggregateInputType | true
    _min?: ReportMinAggregateInputType
    _max?: ReportMaxAggregateInputType
  }

  export type ReportGroupByOutputType = {
    id: string
    user_id: string
    title: string
    category: string
    description: string | null
    pdf_url: string
    created_at: Date
    cloudinary_public_id: string | null
    court: string | null
    date: Date | null
    tags: string[]
    updated_at: Date
    _count: ReportCountAggregateOutputType | null
    _min: ReportMinAggregateOutputType | null
    _max: ReportMaxAggregateOutputType | null
  }

  type GetReportGroupByPayload<T extends ReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReportGroupByOutputType[P]>
            : GetScalarType<T[P], ReportGroupByOutputType[P]>
        }
      >
    >


  export type ReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    title?: boolean
    category?: boolean
    description?: boolean
    pdf_url?: boolean
    created_at?: boolean
    cloudinary_public_id?: boolean
    court?: boolean
    date?: boolean
    tags?: boolean
    updated_at?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["report"]>

  export type ReportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    title?: boolean
    category?: boolean
    description?: boolean
    pdf_url?: boolean
    created_at?: boolean
    cloudinary_public_id?: boolean
    court?: boolean
    date?: boolean
    tags?: boolean
    updated_at?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["report"]>

  export type ReportSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    title?: boolean
    category?: boolean
    description?: boolean
    pdf_url?: boolean
    created_at?: boolean
    cloudinary_public_id?: boolean
    court?: boolean
    date?: boolean
    tags?: boolean
    updated_at?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["report"]>

  export type ReportSelectScalar = {
    id?: boolean
    user_id?: boolean
    title?: boolean
    category?: boolean
    description?: boolean
    pdf_url?: boolean
    created_at?: boolean
    cloudinary_public_id?: boolean
    court?: boolean
    date?: boolean
    tags?: boolean
    updated_at?: boolean
  }

  export type ReportOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "title" | "category" | "description" | "pdf_url" | "created_at" | "cloudinary_public_id" | "court" | "date" | "tags" | "updated_at", ExtArgs["result"]["report"]>
  export type ReportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type ReportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type ReportIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }

  export type $ReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Report"
    objects: {
      profile: Prisma.$ProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      title: string
      category: string
      description: string | null
      pdf_url: string
      created_at: Date
      cloudinary_public_id: string | null
      court: string | null
      date: Date | null
      tags: string[]
      updated_at: Date
    }, ExtArgs["result"]["report"]>
    composites: {}
  }

  type ReportGetPayload<S extends boolean | null | undefined | ReportDefaultArgs> = $Result.GetResult<Prisma.$ReportPayload, S>

  type ReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReportFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReportCountAggregateInputType | true
    }

  export interface ReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Report'], meta: { name: 'Report' } }
    /**
     * Find zero or one Report that matches the filter.
     * @param {ReportFindUniqueArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReportFindUniqueArgs>(args: SelectSubset<T, ReportFindUniqueArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Report that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReportFindUniqueOrThrowArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReportFindUniqueOrThrowArgs>(args: SelectSubset<T, ReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Report that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindFirstArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReportFindFirstArgs>(args?: SelectSubset<T, ReportFindFirstArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Report that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindFirstOrThrowArgs} args - Arguments to find a Report
     * @example
     * // Get one Report
     * const report = await prisma.report.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReportFindFirstOrThrowArgs>(args?: SelectSubset<T, ReportFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reports
     * const reports = await prisma.report.findMany()
     * 
     * // Get first 10 Reports
     * const reports = await prisma.report.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reportWithIdOnly = await prisma.report.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReportFindManyArgs>(args?: SelectSubset<T, ReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Report.
     * @param {ReportCreateArgs} args - Arguments to create a Report.
     * @example
     * // Create one Report
     * const Report = await prisma.report.create({
     *   data: {
     *     // ... data to create a Report
     *   }
     * })
     * 
     */
    create<T extends ReportCreateArgs>(args: SelectSubset<T, ReportCreateArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reports.
     * @param {ReportCreateManyArgs} args - Arguments to create many Reports.
     * @example
     * // Create many Reports
     * const report = await prisma.report.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReportCreateManyArgs>(args?: SelectSubset<T, ReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reports and returns the data saved in the database.
     * @param {ReportCreateManyAndReturnArgs} args - Arguments to create many Reports.
     * @example
     * // Create many Reports
     * const report = await prisma.report.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reports and only return the `id`
     * const reportWithIdOnly = await prisma.report.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReportCreateManyAndReturnArgs>(args?: SelectSubset<T, ReportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Report.
     * @param {ReportDeleteArgs} args - Arguments to delete one Report.
     * @example
     * // Delete one Report
     * const Report = await prisma.report.delete({
     *   where: {
     *     // ... filter to delete one Report
     *   }
     * })
     * 
     */
    delete<T extends ReportDeleteArgs>(args: SelectSubset<T, ReportDeleteArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Report.
     * @param {ReportUpdateArgs} args - Arguments to update one Report.
     * @example
     * // Update one Report
     * const report = await prisma.report.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReportUpdateArgs>(args: SelectSubset<T, ReportUpdateArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reports.
     * @param {ReportDeleteManyArgs} args - Arguments to filter Reports to delete.
     * @example
     * // Delete a few Reports
     * const { count } = await prisma.report.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReportDeleteManyArgs>(args?: SelectSubset<T, ReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reports
     * const report = await prisma.report.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReportUpdateManyArgs>(args: SelectSubset<T, ReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reports and returns the data updated in the database.
     * @param {ReportUpdateManyAndReturnArgs} args - Arguments to update many Reports.
     * @example
     * // Update many Reports
     * const report = await prisma.report.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reports and only return the `id`
     * const reportWithIdOnly = await prisma.report.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReportUpdateManyAndReturnArgs>(args: SelectSubset<T, ReportUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Report.
     * @param {ReportUpsertArgs} args - Arguments to update or create a Report.
     * @example
     * // Update or create a Report
     * const report = await prisma.report.upsert({
     *   create: {
     *     // ... data to create a Report
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Report we want to update
     *   }
     * })
     */
    upsert<T extends ReportUpsertArgs>(args: SelectSubset<T, ReportUpsertArgs<ExtArgs>>): Prisma__ReportClient<$Result.GetResult<Prisma.$ReportPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportCountArgs} args - Arguments to filter Reports to count.
     * @example
     * // Count the number of Reports
     * const count = await prisma.report.count({
     *   where: {
     *     // ... the filter for the Reports we want to count
     *   }
     * })
    **/
    count<T extends ReportCountArgs>(
      args?: Subset<T, ReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Report.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReportAggregateArgs>(args: Subset<T, ReportAggregateArgs>): Prisma.PrismaPromise<GetReportAggregateType<T>>

    /**
     * Group by Report.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReportGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReportGroupByArgs['orderBy'] }
        : { orderBy?: ReportGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Report model
   */
  readonly fields: ReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Report.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profile<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Report model
   */
  interface ReportFieldRefs {
    readonly id: FieldRef<"Report", 'String'>
    readonly user_id: FieldRef<"Report", 'String'>
    readonly title: FieldRef<"Report", 'String'>
    readonly category: FieldRef<"Report", 'String'>
    readonly description: FieldRef<"Report", 'String'>
    readonly pdf_url: FieldRef<"Report", 'String'>
    readonly created_at: FieldRef<"Report", 'DateTime'>
    readonly cloudinary_public_id: FieldRef<"Report", 'String'>
    readonly court: FieldRef<"Report", 'String'>
    readonly date: FieldRef<"Report", 'DateTime'>
    readonly tags: FieldRef<"Report", 'String[]'>
    readonly updated_at: FieldRef<"Report", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Report findUnique
   */
  export type ReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report findUniqueOrThrow
   */
  export type ReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report findFirst
   */
  export type ReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reports.
     */
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report findFirstOrThrow
   */
  export type ReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Report to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reports.
     */
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report findMany
   */
  export type ReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter, which Reports to fetch.
     */
    where?: ReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reports to fetch.
     */
    orderBy?: ReportOrderByWithRelationInput | ReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reports.
     */
    cursor?: ReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reports.
     */
    skip?: number
    distinct?: ReportScalarFieldEnum | ReportScalarFieldEnum[]
  }

  /**
   * Report create
   */
  export type ReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * The data needed to create a Report.
     */
    data: XOR<ReportCreateInput, ReportUncheckedCreateInput>
  }

  /**
   * Report createMany
   */
  export type ReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reports.
     */
    data: ReportCreateManyInput | ReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Report createManyAndReturn
   */
  export type ReportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * The data used to create many Reports.
     */
    data: ReportCreateManyInput | ReportCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Report update
   */
  export type ReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * The data needed to update a Report.
     */
    data: XOR<ReportUpdateInput, ReportUncheckedUpdateInput>
    /**
     * Choose, which Report to update.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report updateMany
   */
  export type ReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reports.
     */
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyInput>
    /**
     * Filter which Reports to update
     */
    where?: ReportWhereInput
    /**
     * Limit how many Reports to update.
     */
    limit?: number
  }

  /**
   * Report updateManyAndReturn
   */
  export type ReportUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * The data used to update Reports.
     */
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyInput>
    /**
     * Filter which Reports to update
     */
    where?: ReportWhereInput
    /**
     * Limit how many Reports to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Report upsert
   */
  export type ReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * The filter to search for the Report to update in case it exists.
     */
    where: ReportWhereUniqueInput
    /**
     * In case the Report found by the `where` argument doesn't exist, create a new Report with this data.
     */
    create: XOR<ReportCreateInput, ReportUncheckedCreateInput>
    /**
     * In case the Report was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReportUpdateInput, ReportUncheckedUpdateInput>
  }

  /**
   * Report delete
   */
  export type ReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
    /**
     * Filter which Report to delete.
     */
    where: ReportWhereUniqueInput
  }

  /**
   * Report deleteMany
   */
  export type ReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reports to delete
     */
    where?: ReportWhereInput
    /**
     * Limit how many Reports to delete.
     */
    limit?: number
  }

  /**
   * Report without action
   */
  export type ReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Report
     */
    select?: ReportSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Report
     */
    omit?: ReportOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReportInclude<ExtArgs> | null
  }


  /**
   * Model VkycDocument
   */

  export type AggregateVkycDocument = {
    _count: VkycDocumentCountAggregateOutputType | null
    _min: VkycDocumentMinAggregateOutputType | null
    _max: VkycDocumentMaxAggregateOutputType | null
  }

  export type VkycDocumentMinAggregateOutputType = {
    id: string | null
    user_id: string | null
    document_type: string | null
    document_url: string | null
    kyc_type: $Enums.KycType | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type VkycDocumentMaxAggregateOutputType = {
    id: string | null
    user_id: string | null
    document_type: string | null
    document_url: string | null
    kyc_type: $Enums.KycType | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type VkycDocumentCountAggregateOutputType = {
    id: number
    user_id: number
    document_type: number
    document_url: number
    kyc_type: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type VkycDocumentMinAggregateInputType = {
    id?: true
    user_id?: true
    document_type?: true
    document_url?: true
    kyc_type?: true
    created_at?: true
    updated_at?: true
  }

  export type VkycDocumentMaxAggregateInputType = {
    id?: true
    user_id?: true
    document_type?: true
    document_url?: true
    kyc_type?: true
    created_at?: true
    updated_at?: true
  }

  export type VkycDocumentCountAggregateInputType = {
    id?: true
    user_id?: true
    document_type?: true
    document_url?: true
    kyc_type?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type VkycDocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VkycDocument to aggregate.
     */
    where?: VkycDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VkycDocuments to fetch.
     */
    orderBy?: VkycDocumentOrderByWithRelationInput | VkycDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VkycDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VkycDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VkycDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VkycDocuments
    **/
    _count?: true | VkycDocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VkycDocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VkycDocumentMaxAggregateInputType
  }

  export type GetVkycDocumentAggregateType<T extends VkycDocumentAggregateArgs> = {
        [P in keyof T & keyof AggregateVkycDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVkycDocument[P]>
      : GetScalarType<T[P], AggregateVkycDocument[P]>
  }




  export type VkycDocumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VkycDocumentWhereInput
    orderBy?: VkycDocumentOrderByWithAggregationInput | VkycDocumentOrderByWithAggregationInput[]
    by: VkycDocumentScalarFieldEnum[] | VkycDocumentScalarFieldEnum
    having?: VkycDocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VkycDocumentCountAggregateInputType | true
    _min?: VkycDocumentMinAggregateInputType
    _max?: VkycDocumentMaxAggregateInputType
  }

  export type VkycDocumentGroupByOutputType = {
    id: string
    user_id: string
    document_type: string
    document_url: string
    kyc_type: $Enums.KycType
    created_at: Date
    updated_at: Date
    _count: VkycDocumentCountAggregateOutputType | null
    _min: VkycDocumentMinAggregateOutputType | null
    _max: VkycDocumentMaxAggregateOutputType | null
  }

  type GetVkycDocumentGroupByPayload<T extends VkycDocumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VkycDocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VkycDocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VkycDocumentGroupByOutputType[P]>
            : GetScalarType<T[P], VkycDocumentGroupByOutputType[P]>
        }
      >
    >


  export type VkycDocumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    document_type?: boolean
    document_url?: boolean
    kyc_type?: boolean
    created_at?: boolean
    updated_at?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vkycDocument"]>

  export type VkycDocumentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    document_type?: boolean
    document_url?: boolean
    kyc_type?: boolean
    created_at?: boolean
    updated_at?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vkycDocument"]>

  export type VkycDocumentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    document_type?: boolean
    document_url?: boolean
    kyc_type?: boolean
    created_at?: boolean
    updated_at?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vkycDocument"]>

  export type VkycDocumentSelectScalar = {
    id?: boolean
    user_id?: boolean
    document_type?: boolean
    document_url?: boolean
    kyc_type?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type VkycDocumentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "document_type" | "document_url" | "kyc_type" | "created_at" | "updated_at", ExtArgs["result"]["vkycDocument"]>
  export type VkycDocumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type VkycDocumentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type VkycDocumentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }

  export type $VkycDocumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VkycDocument"
    objects: {
      profile: Prisma.$ProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      user_id: string
      document_type: string
      document_url: string
      kyc_type: $Enums.KycType
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["vkycDocument"]>
    composites: {}
  }

  type VkycDocumentGetPayload<S extends boolean | null | undefined | VkycDocumentDefaultArgs> = $Result.GetResult<Prisma.$VkycDocumentPayload, S>

  type VkycDocumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VkycDocumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VkycDocumentCountAggregateInputType | true
    }

  export interface VkycDocumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VkycDocument'], meta: { name: 'VkycDocument' } }
    /**
     * Find zero or one VkycDocument that matches the filter.
     * @param {VkycDocumentFindUniqueArgs} args - Arguments to find a VkycDocument
     * @example
     * // Get one VkycDocument
     * const vkycDocument = await prisma.vkycDocument.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VkycDocumentFindUniqueArgs>(args: SelectSubset<T, VkycDocumentFindUniqueArgs<ExtArgs>>): Prisma__VkycDocumentClient<$Result.GetResult<Prisma.$VkycDocumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VkycDocument that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VkycDocumentFindUniqueOrThrowArgs} args - Arguments to find a VkycDocument
     * @example
     * // Get one VkycDocument
     * const vkycDocument = await prisma.vkycDocument.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VkycDocumentFindUniqueOrThrowArgs>(args: SelectSubset<T, VkycDocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VkycDocumentClient<$Result.GetResult<Prisma.$VkycDocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VkycDocument that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VkycDocumentFindFirstArgs} args - Arguments to find a VkycDocument
     * @example
     * // Get one VkycDocument
     * const vkycDocument = await prisma.vkycDocument.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VkycDocumentFindFirstArgs>(args?: SelectSubset<T, VkycDocumentFindFirstArgs<ExtArgs>>): Prisma__VkycDocumentClient<$Result.GetResult<Prisma.$VkycDocumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VkycDocument that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VkycDocumentFindFirstOrThrowArgs} args - Arguments to find a VkycDocument
     * @example
     * // Get one VkycDocument
     * const vkycDocument = await prisma.vkycDocument.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VkycDocumentFindFirstOrThrowArgs>(args?: SelectSubset<T, VkycDocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__VkycDocumentClient<$Result.GetResult<Prisma.$VkycDocumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VkycDocuments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VkycDocumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VkycDocuments
     * const vkycDocuments = await prisma.vkycDocument.findMany()
     * 
     * // Get first 10 VkycDocuments
     * const vkycDocuments = await prisma.vkycDocument.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vkycDocumentWithIdOnly = await prisma.vkycDocument.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VkycDocumentFindManyArgs>(args?: SelectSubset<T, VkycDocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VkycDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VkycDocument.
     * @param {VkycDocumentCreateArgs} args - Arguments to create a VkycDocument.
     * @example
     * // Create one VkycDocument
     * const VkycDocument = await prisma.vkycDocument.create({
     *   data: {
     *     // ... data to create a VkycDocument
     *   }
     * })
     * 
     */
    create<T extends VkycDocumentCreateArgs>(args: SelectSubset<T, VkycDocumentCreateArgs<ExtArgs>>): Prisma__VkycDocumentClient<$Result.GetResult<Prisma.$VkycDocumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VkycDocuments.
     * @param {VkycDocumentCreateManyArgs} args - Arguments to create many VkycDocuments.
     * @example
     * // Create many VkycDocuments
     * const vkycDocument = await prisma.vkycDocument.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VkycDocumentCreateManyArgs>(args?: SelectSubset<T, VkycDocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VkycDocuments and returns the data saved in the database.
     * @param {VkycDocumentCreateManyAndReturnArgs} args - Arguments to create many VkycDocuments.
     * @example
     * // Create many VkycDocuments
     * const vkycDocument = await prisma.vkycDocument.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VkycDocuments and only return the `id`
     * const vkycDocumentWithIdOnly = await prisma.vkycDocument.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VkycDocumentCreateManyAndReturnArgs>(args?: SelectSubset<T, VkycDocumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VkycDocumentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VkycDocument.
     * @param {VkycDocumentDeleteArgs} args - Arguments to delete one VkycDocument.
     * @example
     * // Delete one VkycDocument
     * const VkycDocument = await prisma.vkycDocument.delete({
     *   where: {
     *     // ... filter to delete one VkycDocument
     *   }
     * })
     * 
     */
    delete<T extends VkycDocumentDeleteArgs>(args: SelectSubset<T, VkycDocumentDeleteArgs<ExtArgs>>): Prisma__VkycDocumentClient<$Result.GetResult<Prisma.$VkycDocumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VkycDocument.
     * @param {VkycDocumentUpdateArgs} args - Arguments to update one VkycDocument.
     * @example
     * // Update one VkycDocument
     * const vkycDocument = await prisma.vkycDocument.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VkycDocumentUpdateArgs>(args: SelectSubset<T, VkycDocumentUpdateArgs<ExtArgs>>): Prisma__VkycDocumentClient<$Result.GetResult<Prisma.$VkycDocumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VkycDocuments.
     * @param {VkycDocumentDeleteManyArgs} args - Arguments to filter VkycDocuments to delete.
     * @example
     * // Delete a few VkycDocuments
     * const { count } = await prisma.vkycDocument.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VkycDocumentDeleteManyArgs>(args?: SelectSubset<T, VkycDocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VkycDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VkycDocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VkycDocuments
     * const vkycDocument = await prisma.vkycDocument.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VkycDocumentUpdateManyArgs>(args: SelectSubset<T, VkycDocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VkycDocuments and returns the data updated in the database.
     * @param {VkycDocumentUpdateManyAndReturnArgs} args - Arguments to update many VkycDocuments.
     * @example
     * // Update many VkycDocuments
     * const vkycDocument = await prisma.vkycDocument.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VkycDocuments and only return the `id`
     * const vkycDocumentWithIdOnly = await prisma.vkycDocument.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VkycDocumentUpdateManyAndReturnArgs>(args: SelectSubset<T, VkycDocumentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VkycDocumentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VkycDocument.
     * @param {VkycDocumentUpsertArgs} args - Arguments to update or create a VkycDocument.
     * @example
     * // Update or create a VkycDocument
     * const vkycDocument = await prisma.vkycDocument.upsert({
     *   create: {
     *     // ... data to create a VkycDocument
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VkycDocument we want to update
     *   }
     * })
     */
    upsert<T extends VkycDocumentUpsertArgs>(args: SelectSubset<T, VkycDocumentUpsertArgs<ExtArgs>>): Prisma__VkycDocumentClient<$Result.GetResult<Prisma.$VkycDocumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VkycDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VkycDocumentCountArgs} args - Arguments to filter VkycDocuments to count.
     * @example
     * // Count the number of VkycDocuments
     * const count = await prisma.vkycDocument.count({
     *   where: {
     *     // ... the filter for the VkycDocuments we want to count
     *   }
     * })
    **/
    count<T extends VkycDocumentCountArgs>(
      args?: Subset<T, VkycDocumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VkycDocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VkycDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VkycDocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VkycDocumentAggregateArgs>(args: Subset<T, VkycDocumentAggregateArgs>): Prisma.PrismaPromise<GetVkycDocumentAggregateType<T>>

    /**
     * Group by VkycDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VkycDocumentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VkycDocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VkycDocumentGroupByArgs['orderBy'] }
        : { orderBy?: VkycDocumentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VkycDocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVkycDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VkycDocument model
   */
  readonly fields: VkycDocumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VkycDocument.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VkycDocumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profile<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VkycDocument model
   */
  interface VkycDocumentFieldRefs {
    readonly id: FieldRef<"VkycDocument", 'String'>
    readonly user_id: FieldRef<"VkycDocument", 'String'>
    readonly document_type: FieldRef<"VkycDocument", 'String'>
    readonly document_url: FieldRef<"VkycDocument", 'String'>
    readonly kyc_type: FieldRef<"VkycDocument", 'KycType'>
    readonly created_at: FieldRef<"VkycDocument", 'DateTime'>
    readonly updated_at: FieldRef<"VkycDocument", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VkycDocument findUnique
   */
  export type VkycDocumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VkycDocument
     */
    select?: VkycDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VkycDocument
     */
    omit?: VkycDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VkycDocumentInclude<ExtArgs> | null
    /**
     * Filter, which VkycDocument to fetch.
     */
    where: VkycDocumentWhereUniqueInput
  }

  /**
   * VkycDocument findUniqueOrThrow
   */
  export type VkycDocumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VkycDocument
     */
    select?: VkycDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VkycDocument
     */
    omit?: VkycDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VkycDocumentInclude<ExtArgs> | null
    /**
     * Filter, which VkycDocument to fetch.
     */
    where: VkycDocumentWhereUniqueInput
  }

  /**
   * VkycDocument findFirst
   */
  export type VkycDocumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VkycDocument
     */
    select?: VkycDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VkycDocument
     */
    omit?: VkycDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VkycDocumentInclude<ExtArgs> | null
    /**
     * Filter, which VkycDocument to fetch.
     */
    where?: VkycDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VkycDocuments to fetch.
     */
    orderBy?: VkycDocumentOrderByWithRelationInput | VkycDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VkycDocuments.
     */
    cursor?: VkycDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VkycDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VkycDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VkycDocuments.
     */
    distinct?: VkycDocumentScalarFieldEnum | VkycDocumentScalarFieldEnum[]
  }

  /**
   * VkycDocument findFirstOrThrow
   */
  export type VkycDocumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VkycDocument
     */
    select?: VkycDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VkycDocument
     */
    omit?: VkycDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VkycDocumentInclude<ExtArgs> | null
    /**
     * Filter, which VkycDocument to fetch.
     */
    where?: VkycDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VkycDocuments to fetch.
     */
    orderBy?: VkycDocumentOrderByWithRelationInput | VkycDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VkycDocuments.
     */
    cursor?: VkycDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VkycDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VkycDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VkycDocuments.
     */
    distinct?: VkycDocumentScalarFieldEnum | VkycDocumentScalarFieldEnum[]
  }

  /**
   * VkycDocument findMany
   */
  export type VkycDocumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VkycDocument
     */
    select?: VkycDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VkycDocument
     */
    omit?: VkycDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VkycDocumentInclude<ExtArgs> | null
    /**
     * Filter, which VkycDocuments to fetch.
     */
    where?: VkycDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VkycDocuments to fetch.
     */
    orderBy?: VkycDocumentOrderByWithRelationInput | VkycDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VkycDocuments.
     */
    cursor?: VkycDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VkycDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VkycDocuments.
     */
    skip?: number
    distinct?: VkycDocumentScalarFieldEnum | VkycDocumentScalarFieldEnum[]
  }

  /**
   * VkycDocument create
   */
  export type VkycDocumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VkycDocument
     */
    select?: VkycDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VkycDocument
     */
    omit?: VkycDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VkycDocumentInclude<ExtArgs> | null
    /**
     * The data needed to create a VkycDocument.
     */
    data: XOR<VkycDocumentCreateInput, VkycDocumentUncheckedCreateInput>
  }

  /**
   * VkycDocument createMany
   */
  export type VkycDocumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VkycDocuments.
     */
    data: VkycDocumentCreateManyInput | VkycDocumentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VkycDocument createManyAndReturn
   */
  export type VkycDocumentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VkycDocument
     */
    select?: VkycDocumentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VkycDocument
     */
    omit?: VkycDocumentOmit<ExtArgs> | null
    /**
     * The data used to create many VkycDocuments.
     */
    data: VkycDocumentCreateManyInput | VkycDocumentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VkycDocumentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VkycDocument update
   */
  export type VkycDocumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VkycDocument
     */
    select?: VkycDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VkycDocument
     */
    omit?: VkycDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VkycDocumentInclude<ExtArgs> | null
    /**
     * The data needed to update a VkycDocument.
     */
    data: XOR<VkycDocumentUpdateInput, VkycDocumentUncheckedUpdateInput>
    /**
     * Choose, which VkycDocument to update.
     */
    where: VkycDocumentWhereUniqueInput
  }

  /**
   * VkycDocument updateMany
   */
  export type VkycDocumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VkycDocuments.
     */
    data: XOR<VkycDocumentUpdateManyMutationInput, VkycDocumentUncheckedUpdateManyInput>
    /**
     * Filter which VkycDocuments to update
     */
    where?: VkycDocumentWhereInput
    /**
     * Limit how many VkycDocuments to update.
     */
    limit?: number
  }

  /**
   * VkycDocument updateManyAndReturn
   */
  export type VkycDocumentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VkycDocument
     */
    select?: VkycDocumentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VkycDocument
     */
    omit?: VkycDocumentOmit<ExtArgs> | null
    /**
     * The data used to update VkycDocuments.
     */
    data: XOR<VkycDocumentUpdateManyMutationInput, VkycDocumentUncheckedUpdateManyInput>
    /**
     * Filter which VkycDocuments to update
     */
    where?: VkycDocumentWhereInput
    /**
     * Limit how many VkycDocuments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VkycDocumentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * VkycDocument upsert
   */
  export type VkycDocumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VkycDocument
     */
    select?: VkycDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VkycDocument
     */
    omit?: VkycDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VkycDocumentInclude<ExtArgs> | null
    /**
     * The filter to search for the VkycDocument to update in case it exists.
     */
    where: VkycDocumentWhereUniqueInput
    /**
     * In case the VkycDocument found by the `where` argument doesn't exist, create a new VkycDocument with this data.
     */
    create: XOR<VkycDocumentCreateInput, VkycDocumentUncheckedCreateInput>
    /**
     * In case the VkycDocument was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VkycDocumentUpdateInput, VkycDocumentUncheckedUpdateInput>
  }

  /**
   * VkycDocument delete
   */
  export type VkycDocumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VkycDocument
     */
    select?: VkycDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VkycDocument
     */
    omit?: VkycDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VkycDocumentInclude<ExtArgs> | null
    /**
     * Filter which VkycDocument to delete.
     */
    where: VkycDocumentWhereUniqueInput
  }

  /**
   * VkycDocument deleteMany
   */
  export type VkycDocumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VkycDocuments to delete
     */
    where?: VkycDocumentWhereInput
    /**
     * Limit how many VkycDocuments to delete.
     */
    limit?: number
  }

  /**
   * VkycDocument without action
   */
  export type VkycDocumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VkycDocument
     */
    select?: VkycDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VkycDocument
     */
    omit?: VkycDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VkycDocumentInclude<ExtArgs> | null
  }


  /**
   * Model ConsultationRequest
   */

  export type AggregateConsultationRequest = {
    _count: ConsultationRequestCountAggregateOutputType | null
    _avg: ConsultationRequestAvgAggregateOutputType | null
    _sum: ConsultationRequestSumAggregateOutputType | null
    _min: ConsultationRequestMinAggregateOutputType | null
    _max: ConsultationRequestMaxAggregateOutputType | null
  }

  export type ConsultationRequestAvgAggregateOutputType = {
    amount: number | null
  }

  export type ConsultationRequestSumAggregateOutputType = {
    amount: number | null
  }

  export type ConsultationRequestMinAggregateOutputType = {
    id: string | null
    client_id: string | null
    advocate_id: string | null
    title: string | null
    description: string | null
    consultation_type: $Enums.ConsultationType | null
    status: $Enums.RequestStatus | null
    amount: number | null
    scheduled_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ConsultationRequestMaxAggregateOutputType = {
    id: string | null
    client_id: string | null
    advocate_id: string | null
    title: string | null
    description: string | null
    consultation_type: $Enums.ConsultationType | null
    status: $Enums.RequestStatus | null
    amount: number | null
    scheduled_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ConsultationRequestCountAggregateOutputType = {
    id: number
    client_id: number
    advocate_id: number
    title: number
    description: number
    consultation_type: number
    status: number
    amount: number
    scheduled_at: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ConsultationRequestAvgAggregateInputType = {
    amount?: true
  }

  export type ConsultationRequestSumAggregateInputType = {
    amount?: true
  }

  export type ConsultationRequestMinAggregateInputType = {
    id?: true
    client_id?: true
    advocate_id?: true
    title?: true
    description?: true
    consultation_type?: true
    status?: true
    amount?: true
    scheduled_at?: true
    created_at?: true
    updated_at?: true
  }

  export type ConsultationRequestMaxAggregateInputType = {
    id?: true
    client_id?: true
    advocate_id?: true
    title?: true
    description?: true
    consultation_type?: true
    status?: true
    amount?: true
    scheduled_at?: true
    created_at?: true
    updated_at?: true
  }

  export type ConsultationRequestCountAggregateInputType = {
    id?: true
    client_id?: true
    advocate_id?: true
    title?: true
    description?: true
    consultation_type?: true
    status?: true
    amount?: true
    scheduled_at?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ConsultationRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConsultationRequest to aggregate.
     */
    where?: ConsultationRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConsultationRequests to fetch.
     */
    orderBy?: ConsultationRequestOrderByWithRelationInput | ConsultationRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ConsultationRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConsultationRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConsultationRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ConsultationRequests
    **/
    _count?: true | ConsultationRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ConsultationRequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ConsultationRequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ConsultationRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ConsultationRequestMaxAggregateInputType
  }

  export type GetConsultationRequestAggregateType<T extends ConsultationRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateConsultationRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateConsultationRequest[P]>
      : GetScalarType<T[P], AggregateConsultationRequest[P]>
  }




  export type ConsultationRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ConsultationRequestWhereInput
    orderBy?: ConsultationRequestOrderByWithAggregationInput | ConsultationRequestOrderByWithAggregationInput[]
    by: ConsultationRequestScalarFieldEnum[] | ConsultationRequestScalarFieldEnum
    having?: ConsultationRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ConsultationRequestCountAggregateInputType | true
    _avg?: ConsultationRequestAvgAggregateInputType
    _sum?: ConsultationRequestSumAggregateInputType
    _min?: ConsultationRequestMinAggregateInputType
    _max?: ConsultationRequestMaxAggregateInputType
  }

  export type ConsultationRequestGroupByOutputType = {
    id: string
    client_id: string
    advocate_id: string
    title: string
    description: string
    consultation_type: $Enums.ConsultationType
    status: $Enums.RequestStatus
    amount: number
    scheduled_at: Date | null
    created_at: Date
    updated_at: Date
    _count: ConsultationRequestCountAggregateOutputType | null
    _avg: ConsultationRequestAvgAggregateOutputType | null
    _sum: ConsultationRequestSumAggregateOutputType | null
    _min: ConsultationRequestMinAggregateOutputType | null
    _max: ConsultationRequestMaxAggregateOutputType | null
  }

  type GetConsultationRequestGroupByPayload<T extends ConsultationRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ConsultationRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ConsultationRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ConsultationRequestGroupByOutputType[P]>
            : GetScalarType<T[P], ConsultationRequestGroupByOutputType[P]>
        }
      >
    >


  export type ConsultationRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    client_id?: boolean
    advocate_id?: boolean
    title?: boolean
    description?: boolean
    consultation_type?: boolean
    status?: boolean
    amount?: boolean
    scheduled_at?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["consultationRequest"]>

  export type ConsultationRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    client_id?: boolean
    advocate_id?: boolean
    title?: boolean
    description?: boolean
    consultation_type?: boolean
    status?: boolean
    amount?: boolean
    scheduled_at?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["consultationRequest"]>

  export type ConsultationRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    client_id?: boolean
    advocate_id?: boolean
    title?: boolean
    description?: boolean
    consultation_type?: boolean
    status?: boolean
    amount?: boolean
    scheduled_at?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["consultationRequest"]>

  export type ConsultationRequestSelectScalar = {
    id?: boolean
    client_id?: boolean
    advocate_id?: boolean
    title?: boolean
    description?: boolean
    consultation_type?: boolean
    status?: boolean
    amount?: boolean
    scheduled_at?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ConsultationRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "client_id" | "advocate_id" | "title" | "description" | "consultation_type" | "status" | "amount" | "scheduled_at" | "created_at" | "updated_at", ExtArgs["result"]["consultationRequest"]>

  export type $ConsultationRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ConsultationRequest"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      client_id: string
      advocate_id: string
      title: string
      description: string
      consultation_type: $Enums.ConsultationType
      status: $Enums.RequestStatus
      amount: number
      scheduled_at: Date | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["consultationRequest"]>
    composites: {}
  }

  type ConsultationRequestGetPayload<S extends boolean | null | undefined | ConsultationRequestDefaultArgs> = $Result.GetResult<Prisma.$ConsultationRequestPayload, S>

  type ConsultationRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ConsultationRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ConsultationRequestCountAggregateInputType | true
    }

  export interface ConsultationRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ConsultationRequest'], meta: { name: 'ConsultationRequest' } }
    /**
     * Find zero or one ConsultationRequest that matches the filter.
     * @param {ConsultationRequestFindUniqueArgs} args - Arguments to find a ConsultationRequest
     * @example
     * // Get one ConsultationRequest
     * const consultationRequest = await prisma.consultationRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ConsultationRequestFindUniqueArgs>(args: SelectSubset<T, ConsultationRequestFindUniqueArgs<ExtArgs>>): Prisma__ConsultationRequestClient<$Result.GetResult<Prisma.$ConsultationRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ConsultationRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ConsultationRequestFindUniqueOrThrowArgs} args - Arguments to find a ConsultationRequest
     * @example
     * // Get one ConsultationRequest
     * const consultationRequest = await prisma.consultationRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ConsultationRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, ConsultationRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ConsultationRequestClient<$Result.GetResult<Prisma.$ConsultationRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ConsultationRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationRequestFindFirstArgs} args - Arguments to find a ConsultationRequest
     * @example
     * // Get one ConsultationRequest
     * const consultationRequest = await prisma.consultationRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ConsultationRequestFindFirstArgs>(args?: SelectSubset<T, ConsultationRequestFindFirstArgs<ExtArgs>>): Prisma__ConsultationRequestClient<$Result.GetResult<Prisma.$ConsultationRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ConsultationRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationRequestFindFirstOrThrowArgs} args - Arguments to find a ConsultationRequest
     * @example
     * // Get one ConsultationRequest
     * const consultationRequest = await prisma.consultationRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ConsultationRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, ConsultationRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__ConsultationRequestClient<$Result.GetResult<Prisma.$ConsultationRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ConsultationRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ConsultationRequests
     * const consultationRequests = await prisma.consultationRequest.findMany()
     * 
     * // Get first 10 ConsultationRequests
     * const consultationRequests = await prisma.consultationRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const consultationRequestWithIdOnly = await prisma.consultationRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ConsultationRequestFindManyArgs>(args?: SelectSubset<T, ConsultationRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultationRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ConsultationRequest.
     * @param {ConsultationRequestCreateArgs} args - Arguments to create a ConsultationRequest.
     * @example
     * // Create one ConsultationRequest
     * const ConsultationRequest = await prisma.consultationRequest.create({
     *   data: {
     *     // ... data to create a ConsultationRequest
     *   }
     * })
     * 
     */
    create<T extends ConsultationRequestCreateArgs>(args: SelectSubset<T, ConsultationRequestCreateArgs<ExtArgs>>): Prisma__ConsultationRequestClient<$Result.GetResult<Prisma.$ConsultationRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ConsultationRequests.
     * @param {ConsultationRequestCreateManyArgs} args - Arguments to create many ConsultationRequests.
     * @example
     * // Create many ConsultationRequests
     * const consultationRequest = await prisma.consultationRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ConsultationRequestCreateManyArgs>(args?: SelectSubset<T, ConsultationRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ConsultationRequests and returns the data saved in the database.
     * @param {ConsultationRequestCreateManyAndReturnArgs} args - Arguments to create many ConsultationRequests.
     * @example
     * // Create many ConsultationRequests
     * const consultationRequest = await prisma.consultationRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ConsultationRequests and only return the `id`
     * const consultationRequestWithIdOnly = await prisma.consultationRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ConsultationRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, ConsultationRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultationRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ConsultationRequest.
     * @param {ConsultationRequestDeleteArgs} args - Arguments to delete one ConsultationRequest.
     * @example
     * // Delete one ConsultationRequest
     * const ConsultationRequest = await prisma.consultationRequest.delete({
     *   where: {
     *     // ... filter to delete one ConsultationRequest
     *   }
     * })
     * 
     */
    delete<T extends ConsultationRequestDeleteArgs>(args: SelectSubset<T, ConsultationRequestDeleteArgs<ExtArgs>>): Prisma__ConsultationRequestClient<$Result.GetResult<Prisma.$ConsultationRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ConsultationRequest.
     * @param {ConsultationRequestUpdateArgs} args - Arguments to update one ConsultationRequest.
     * @example
     * // Update one ConsultationRequest
     * const consultationRequest = await prisma.consultationRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ConsultationRequestUpdateArgs>(args: SelectSubset<T, ConsultationRequestUpdateArgs<ExtArgs>>): Prisma__ConsultationRequestClient<$Result.GetResult<Prisma.$ConsultationRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ConsultationRequests.
     * @param {ConsultationRequestDeleteManyArgs} args - Arguments to filter ConsultationRequests to delete.
     * @example
     * // Delete a few ConsultationRequests
     * const { count } = await prisma.consultationRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ConsultationRequestDeleteManyArgs>(args?: SelectSubset<T, ConsultationRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConsultationRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ConsultationRequests
     * const consultationRequest = await prisma.consultationRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ConsultationRequestUpdateManyArgs>(args: SelectSubset<T, ConsultationRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ConsultationRequests and returns the data updated in the database.
     * @param {ConsultationRequestUpdateManyAndReturnArgs} args - Arguments to update many ConsultationRequests.
     * @example
     * // Update many ConsultationRequests
     * const consultationRequest = await prisma.consultationRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ConsultationRequests and only return the `id`
     * const consultationRequestWithIdOnly = await prisma.consultationRequest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ConsultationRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, ConsultationRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ConsultationRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ConsultationRequest.
     * @param {ConsultationRequestUpsertArgs} args - Arguments to update or create a ConsultationRequest.
     * @example
     * // Update or create a ConsultationRequest
     * const consultationRequest = await prisma.consultationRequest.upsert({
     *   create: {
     *     // ... data to create a ConsultationRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ConsultationRequest we want to update
     *   }
     * })
     */
    upsert<T extends ConsultationRequestUpsertArgs>(args: SelectSubset<T, ConsultationRequestUpsertArgs<ExtArgs>>): Prisma__ConsultationRequestClient<$Result.GetResult<Prisma.$ConsultationRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ConsultationRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationRequestCountArgs} args - Arguments to filter ConsultationRequests to count.
     * @example
     * // Count the number of ConsultationRequests
     * const count = await prisma.consultationRequest.count({
     *   where: {
     *     // ... the filter for the ConsultationRequests we want to count
     *   }
     * })
    **/
    count<T extends ConsultationRequestCountArgs>(
      args?: Subset<T, ConsultationRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ConsultationRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ConsultationRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ConsultationRequestAggregateArgs>(args: Subset<T, ConsultationRequestAggregateArgs>): Prisma.PrismaPromise<GetConsultationRequestAggregateType<T>>

    /**
     * Group by ConsultationRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ConsultationRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ConsultationRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ConsultationRequestGroupByArgs['orderBy'] }
        : { orderBy?: ConsultationRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ConsultationRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetConsultationRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ConsultationRequest model
   */
  readonly fields: ConsultationRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ConsultationRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ConsultationRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ConsultationRequest model
   */
  interface ConsultationRequestFieldRefs {
    readonly id: FieldRef<"ConsultationRequest", 'String'>
    readonly client_id: FieldRef<"ConsultationRequest", 'String'>
    readonly advocate_id: FieldRef<"ConsultationRequest", 'String'>
    readonly title: FieldRef<"ConsultationRequest", 'String'>
    readonly description: FieldRef<"ConsultationRequest", 'String'>
    readonly consultation_type: FieldRef<"ConsultationRequest", 'ConsultationType'>
    readonly status: FieldRef<"ConsultationRequest", 'RequestStatus'>
    readonly amount: FieldRef<"ConsultationRequest", 'Float'>
    readonly scheduled_at: FieldRef<"ConsultationRequest", 'DateTime'>
    readonly created_at: FieldRef<"ConsultationRequest", 'DateTime'>
    readonly updated_at: FieldRef<"ConsultationRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ConsultationRequest findUnique
   */
  export type ConsultationRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationRequest
     */
    select?: ConsultationRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationRequest
     */
    omit?: ConsultationRequestOmit<ExtArgs> | null
    /**
     * Filter, which ConsultationRequest to fetch.
     */
    where: ConsultationRequestWhereUniqueInput
  }

  /**
   * ConsultationRequest findUniqueOrThrow
   */
  export type ConsultationRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationRequest
     */
    select?: ConsultationRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationRequest
     */
    omit?: ConsultationRequestOmit<ExtArgs> | null
    /**
     * Filter, which ConsultationRequest to fetch.
     */
    where: ConsultationRequestWhereUniqueInput
  }

  /**
   * ConsultationRequest findFirst
   */
  export type ConsultationRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationRequest
     */
    select?: ConsultationRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationRequest
     */
    omit?: ConsultationRequestOmit<ExtArgs> | null
    /**
     * Filter, which ConsultationRequest to fetch.
     */
    where?: ConsultationRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConsultationRequests to fetch.
     */
    orderBy?: ConsultationRequestOrderByWithRelationInput | ConsultationRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConsultationRequests.
     */
    cursor?: ConsultationRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConsultationRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConsultationRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConsultationRequests.
     */
    distinct?: ConsultationRequestScalarFieldEnum | ConsultationRequestScalarFieldEnum[]
  }

  /**
   * ConsultationRequest findFirstOrThrow
   */
  export type ConsultationRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationRequest
     */
    select?: ConsultationRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationRequest
     */
    omit?: ConsultationRequestOmit<ExtArgs> | null
    /**
     * Filter, which ConsultationRequest to fetch.
     */
    where?: ConsultationRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConsultationRequests to fetch.
     */
    orderBy?: ConsultationRequestOrderByWithRelationInput | ConsultationRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ConsultationRequests.
     */
    cursor?: ConsultationRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConsultationRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConsultationRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ConsultationRequests.
     */
    distinct?: ConsultationRequestScalarFieldEnum | ConsultationRequestScalarFieldEnum[]
  }

  /**
   * ConsultationRequest findMany
   */
  export type ConsultationRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationRequest
     */
    select?: ConsultationRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationRequest
     */
    omit?: ConsultationRequestOmit<ExtArgs> | null
    /**
     * Filter, which ConsultationRequests to fetch.
     */
    where?: ConsultationRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ConsultationRequests to fetch.
     */
    orderBy?: ConsultationRequestOrderByWithRelationInput | ConsultationRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ConsultationRequests.
     */
    cursor?: ConsultationRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ConsultationRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ConsultationRequests.
     */
    skip?: number
    distinct?: ConsultationRequestScalarFieldEnum | ConsultationRequestScalarFieldEnum[]
  }

  /**
   * ConsultationRequest create
   */
  export type ConsultationRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationRequest
     */
    select?: ConsultationRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationRequest
     */
    omit?: ConsultationRequestOmit<ExtArgs> | null
    /**
     * The data needed to create a ConsultationRequest.
     */
    data: XOR<ConsultationRequestCreateInput, ConsultationRequestUncheckedCreateInput>
  }

  /**
   * ConsultationRequest createMany
   */
  export type ConsultationRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ConsultationRequests.
     */
    data: ConsultationRequestCreateManyInput | ConsultationRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ConsultationRequest createManyAndReturn
   */
  export type ConsultationRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationRequest
     */
    select?: ConsultationRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationRequest
     */
    omit?: ConsultationRequestOmit<ExtArgs> | null
    /**
     * The data used to create many ConsultationRequests.
     */
    data: ConsultationRequestCreateManyInput | ConsultationRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ConsultationRequest update
   */
  export type ConsultationRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationRequest
     */
    select?: ConsultationRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationRequest
     */
    omit?: ConsultationRequestOmit<ExtArgs> | null
    /**
     * The data needed to update a ConsultationRequest.
     */
    data: XOR<ConsultationRequestUpdateInput, ConsultationRequestUncheckedUpdateInput>
    /**
     * Choose, which ConsultationRequest to update.
     */
    where: ConsultationRequestWhereUniqueInput
  }

  /**
   * ConsultationRequest updateMany
   */
  export type ConsultationRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ConsultationRequests.
     */
    data: XOR<ConsultationRequestUpdateManyMutationInput, ConsultationRequestUncheckedUpdateManyInput>
    /**
     * Filter which ConsultationRequests to update
     */
    where?: ConsultationRequestWhereInput
    /**
     * Limit how many ConsultationRequests to update.
     */
    limit?: number
  }

  /**
   * ConsultationRequest updateManyAndReturn
   */
  export type ConsultationRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationRequest
     */
    select?: ConsultationRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationRequest
     */
    omit?: ConsultationRequestOmit<ExtArgs> | null
    /**
     * The data used to update ConsultationRequests.
     */
    data: XOR<ConsultationRequestUpdateManyMutationInput, ConsultationRequestUncheckedUpdateManyInput>
    /**
     * Filter which ConsultationRequests to update
     */
    where?: ConsultationRequestWhereInput
    /**
     * Limit how many ConsultationRequests to update.
     */
    limit?: number
  }

  /**
   * ConsultationRequest upsert
   */
  export type ConsultationRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationRequest
     */
    select?: ConsultationRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationRequest
     */
    omit?: ConsultationRequestOmit<ExtArgs> | null
    /**
     * The filter to search for the ConsultationRequest to update in case it exists.
     */
    where: ConsultationRequestWhereUniqueInput
    /**
     * In case the ConsultationRequest found by the `where` argument doesn't exist, create a new ConsultationRequest with this data.
     */
    create: XOR<ConsultationRequestCreateInput, ConsultationRequestUncheckedCreateInput>
    /**
     * In case the ConsultationRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ConsultationRequestUpdateInput, ConsultationRequestUncheckedUpdateInput>
  }

  /**
   * ConsultationRequest delete
   */
  export type ConsultationRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationRequest
     */
    select?: ConsultationRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationRequest
     */
    omit?: ConsultationRequestOmit<ExtArgs> | null
    /**
     * Filter which ConsultationRequest to delete.
     */
    where: ConsultationRequestWhereUniqueInput
  }

  /**
   * ConsultationRequest deleteMany
   */
  export type ConsultationRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ConsultationRequests to delete
     */
    where?: ConsultationRequestWhereInput
    /**
     * Limit how many ConsultationRequests to delete.
     */
    limit?: number
  }

  /**
   * ConsultationRequest without action
   */
  export type ConsultationRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ConsultationRequest
     */
    select?: ConsultationRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ConsultationRequest
     */
    omit?: ConsultationRequestOmit<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    amount: number | null
  }

  export type PaymentSumAggregateOutputType = {
    amount: number | null
  }

  export type PaymentMinAggregateOutputType = {
    id: string | null
    request_id: string | null
    client_id: string | null
    advocate_id: string | null
    amount: number | null
    stripe_payment_id: string | null
    stripe_session_id: string | null
    status: $Enums.PaymentStatus | null
    payment_method: string | null
    processed_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: string | null
    request_id: string | null
    client_id: string | null
    advocate_id: string | null
    amount: number | null
    stripe_payment_id: string | null
    stripe_session_id: string | null
    status: $Enums.PaymentStatus | null
    payment_method: string | null
    processed_at: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    request_id: number
    client_id: number
    advocate_id: number
    amount: number
    stripe_payment_id: number
    stripe_session_id: number
    status: number
    payment_method: number
    processed_at: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    amount?: true
  }

  export type PaymentSumAggregateInputType = {
    amount?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    request_id?: true
    client_id?: true
    advocate_id?: true
    amount?: true
    stripe_payment_id?: true
    stripe_session_id?: true
    status?: true
    payment_method?: true
    processed_at?: true
    created_at?: true
    updated_at?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    request_id?: true
    client_id?: true
    advocate_id?: true
    amount?: true
    stripe_payment_id?: true
    stripe_session_id?: true
    status?: true
    payment_method?: true
    processed_at?: true
    created_at?: true
    updated_at?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    request_id?: true
    client_id?: true
    advocate_id?: true
    amount?: true
    stripe_payment_id?: true
    stripe_session_id?: true
    status?: true
    payment_method?: true
    processed_at?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: string
    request_id: string
    client_id: string
    advocate_id: string
    amount: number
    stripe_payment_id: string | null
    stripe_session_id: string | null
    status: $Enums.PaymentStatus
    payment_method: string | null
    processed_at: Date | null
    created_at: Date
    updated_at: Date
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    request_id?: boolean
    client_id?: boolean
    advocate_id?: boolean
    amount?: boolean
    stripe_payment_id?: boolean
    stripe_session_id?: boolean
    status?: boolean
    payment_method?: boolean
    processed_at?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    request_id?: boolean
    client_id?: boolean
    advocate_id?: boolean
    amount?: boolean
    stripe_payment_id?: boolean
    stripe_session_id?: boolean
    status?: boolean
    payment_method?: boolean
    processed_at?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    request_id?: boolean
    client_id?: boolean
    advocate_id?: boolean
    amount?: boolean
    stripe_payment_id?: boolean
    stripe_session_id?: boolean
    status?: boolean
    payment_method?: boolean
    processed_at?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean
    request_id?: boolean
    client_id?: boolean
    advocate_id?: boolean
    amount?: boolean
    stripe_payment_id?: boolean
    stripe_session_id?: boolean
    status?: boolean
    payment_method?: boolean
    processed_at?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "request_id" | "client_id" | "advocate_id" | "amount" | "stripe_payment_id" | "stripe_session_id" | "status" | "payment_method" | "processed_at" | "created_at" | "updated_at", ExtArgs["result"]["payment"]>

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      request_id: string
      client_id: string
      advocate_id: string
      amount: number
      stripe_payment_id: string | null
      stripe_session_id: string | null
      status: $Enums.PaymentStatus
      payment_method: string | null
      processed_at: Date | null
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'String'>
    readonly request_id: FieldRef<"Payment", 'String'>
    readonly client_id: FieldRef<"Payment", 'String'>
    readonly advocate_id: FieldRef<"Payment", 'String'>
    readonly amount: FieldRef<"Payment", 'Float'>
    readonly stripe_payment_id: FieldRef<"Payment", 'String'>
    readonly stripe_session_id: FieldRef<"Payment", 'String'>
    readonly status: FieldRef<"Payment", 'PaymentStatus'>
    readonly payment_method: FieldRef<"Payment", 'String'>
    readonly processed_at: FieldRef<"Payment", 'DateTime'>
    readonly created_at: FieldRef<"Payment", 'DateTime'>
    readonly updated_at: FieldRef<"Payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment updateManyAndReturn
   */
  export type PaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
  }


  /**
   * Model AccessGrant
   */

  export type AggregateAccessGrant = {
    _count: AccessGrantCountAggregateOutputType | null
    _min: AccessGrantMinAggregateOutputType | null
    _max: AccessGrantMaxAggregateOutputType | null
  }

  export type AccessGrantMinAggregateOutputType = {
    id: string | null
    request_id: string | null
    user_id: string | null
    granted_at: Date | null
    expires_at: Date | null
    is_active: boolean | null
    created_at: Date | null
  }

  export type AccessGrantMaxAggregateOutputType = {
    id: string | null
    request_id: string | null
    user_id: string | null
    granted_at: Date | null
    expires_at: Date | null
    is_active: boolean | null
    created_at: Date | null
  }

  export type AccessGrantCountAggregateOutputType = {
    id: number
    request_id: number
    user_id: number
    granted_at: number
    expires_at: number
    is_active: number
    created_at: number
    _all: number
  }


  export type AccessGrantMinAggregateInputType = {
    id?: true
    request_id?: true
    user_id?: true
    granted_at?: true
    expires_at?: true
    is_active?: true
    created_at?: true
  }

  export type AccessGrantMaxAggregateInputType = {
    id?: true
    request_id?: true
    user_id?: true
    granted_at?: true
    expires_at?: true
    is_active?: true
    created_at?: true
  }

  export type AccessGrantCountAggregateInputType = {
    id?: true
    request_id?: true
    user_id?: true
    granted_at?: true
    expires_at?: true
    is_active?: true
    created_at?: true
    _all?: true
  }

  export type AccessGrantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AccessGrant to aggregate.
     */
    where?: AccessGrantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccessGrants to fetch.
     */
    orderBy?: AccessGrantOrderByWithRelationInput | AccessGrantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccessGrantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccessGrants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccessGrants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AccessGrants
    **/
    _count?: true | AccessGrantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccessGrantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccessGrantMaxAggregateInputType
  }

  export type GetAccessGrantAggregateType<T extends AccessGrantAggregateArgs> = {
        [P in keyof T & keyof AggregateAccessGrant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccessGrant[P]>
      : GetScalarType<T[P], AggregateAccessGrant[P]>
  }




  export type AccessGrantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccessGrantWhereInput
    orderBy?: AccessGrantOrderByWithAggregationInput | AccessGrantOrderByWithAggregationInput[]
    by: AccessGrantScalarFieldEnum[] | AccessGrantScalarFieldEnum
    having?: AccessGrantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccessGrantCountAggregateInputType | true
    _min?: AccessGrantMinAggregateInputType
    _max?: AccessGrantMaxAggregateInputType
  }

  export type AccessGrantGroupByOutputType = {
    id: string
    request_id: string
    user_id: string
    granted_at: Date
    expires_at: Date
    is_active: boolean
    created_at: Date
    _count: AccessGrantCountAggregateOutputType | null
    _min: AccessGrantMinAggregateOutputType | null
    _max: AccessGrantMaxAggregateOutputType | null
  }

  type GetAccessGrantGroupByPayload<T extends AccessGrantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccessGrantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccessGrantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccessGrantGroupByOutputType[P]>
            : GetScalarType<T[P], AccessGrantGroupByOutputType[P]>
        }
      >
    >


  export type AccessGrantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    request_id?: boolean
    user_id?: boolean
    granted_at?: boolean
    expires_at?: boolean
    is_active?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["accessGrant"]>

  export type AccessGrantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    request_id?: boolean
    user_id?: boolean
    granted_at?: boolean
    expires_at?: boolean
    is_active?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["accessGrant"]>

  export type AccessGrantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    request_id?: boolean
    user_id?: boolean
    granted_at?: boolean
    expires_at?: boolean
    is_active?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["accessGrant"]>

  export type AccessGrantSelectScalar = {
    id?: boolean
    request_id?: boolean
    user_id?: boolean
    granted_at?: boolean
    expires_at?: boolean
    is_active?: boolean
    created_at?: boolean
  }

  export type AccessGrantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "request_id" | "user_id" | "granted_at" | "expires_at" | "is_active" | "created_at", ExtArgs["result"]["accessGrant"]>

  export type $AccessGrantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AccessGrant"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      request_id: string
      user_id: string
      granted_at: Date
      expires_at: Date
      is_active: boolean
      created_at: Date
    }, ExtArgs["result"]["accessGrant"]>
    composites: {}
  }

  type AccessGrantGetPayload<S extends boolean | null | undefined | AccessGrantDefaultArgs> = $Result.GetResult<Prisma.$AccessGrantPayload, S>

  type AccessGrantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccessGrantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccessGrantCountAggregateInputType | true
    }

  export interface AccessGrantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AccessGrant'], meta: { name: 'AccessGrant' } }
    /**
     * Find zero or one AccessGrant that matches the filter.
     * @param {AccessGrantFindUniqueArgs} args - Arguments to find a AccessGrant
     * @example
     * // Get one AccessGrant
     * const accessGrant = await prisma.accessGrant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccessGrantFindUniqueArgs>(args: SelectSubset<T, AccessGrantFindUniqueArgs<ExtArgs>>): Prisma__AccessGrantClient<$Result.GetResult<Prisma.$AccessGrantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AccessGrant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccessGrantFindUniqueOrThrowArgs} args - Arguments to find a AccessGrant
     * @example
     * // Get one AccessGrant
     * const accessGrant = await prisma.accessGrant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccessGrantFindUniqueOrThrowArgs>(args: SelectSubset<T, AccessGrantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccessGrantClient<$Result.GetResult<Prisma.$AccessGrantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AccessGrant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessGrantFindFirstArgs} args - Arguments to find a AccessGrant
     * @example
     * // Get one AccessGrant
     * const accessGrant = await prisma.accessGrant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccessGrantFindFirstArgs>(args?: SelectSubset<T, AccessGrantFindFirstArgs<ExtArgs>>): Prisma__AccessGrantClient<$Result.GetResult<Prisma.$AccessGrantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AccessGrant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessGrantFindFirstOrThrowArgs} args - Arguments to find a AccessGrant
     * @example
     * // Get one AccessGrant
     * const accessGrant = await prisma.accessGrant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccessGrantFindFirstOrThrowArgs>(args?: SelectSubset<T, AccessGrantFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccessGrantClient<$Result.GetResult<Prisma.$AccessGrantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AccessGrants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessGrantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AccessGrants
     * const accessGrants = await prisma.accessGrant.findMany()
     * 
     * // Get first 10 AccessGrants
     * const accessGrants = await prisma.accessGrant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accessGrantWithIdOnly = await prisma.accessGrant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccessGrantFindManyArgs>(args?: SelectSubset<T, AccessGrantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccessGrantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AccessGrant.
     * @param {AccessGrantCreateArgs} args - Arguments to create a AccessGrant.
     * @example
     * // Create one AccessGrant
     * const AccessGrant = await prisma.accessGrant.create({
     *   data: {
     *     // ... data to create a AccessGrant
     *   }
     * })
     * 
     */
    create<T extends AccessGrantCreateArgs>(args: SelectSubset<T, AccessGrantCreateArgs<ExtArgs>>): Prisma__AccessGrantClient<$Result.GetResult<Prisma.$AccessGrantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AccessGrants.
     * @param {AccessGrantCreateManyArgs} args - Arguments to create many AccessGrants.
     * @example
     * // Create many AccessGrants
     * const accessGrant = await prisma.accessGrant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccessGrantCreateManyArgs>(args?: SelectSubset<T, AccessGrantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AccessGrants and returns the data saved in the database.
     * @param {AccessGrantCreateManyAndReturnArgs} args - Arguments to create many AccessGrants.
     * @example
     * // Create many AccessGrants
     * const accessGrant = await prisma.accessGrant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AccessGrants and only return the `id`
     * const accessGrantWithIdOnly = await prisma.accessGrant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccessGrantCreateManyAndReturnArgs>(args?: SelectSubset<T, AccessGrantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccessGrantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AccessGrant.
     * @param {AccessGrantDeleteArgs} args - Arguments to delete one AccessGrant.
     * @example
     * // Delete one AccessGrant
     * const AccessGrant = await prisma.accessGrant.delete({
     *   where: {
     *     // ... filter to delete one AccessGrant
     *   }
     * })
     * 
     */
    delete<T extends AccessGrantDeleteArgs>(args: SelectSubset<T, AccessGrantDeleteArgs<ExtArgs>>): Prisma__AccessGrantClient<$Result.GetResult<Prisma.$AccessGrantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AccessGrant.
     * @param {AccessGrantUpdateArgs} args - Arguments to update one AccessGrant.
     * @example
     * // Update one AccessGrant
     * const accessGrant = await prisma.accessGrant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccessGrantUpdateArgs>(args: SelectSubset<T, AccessGrantUpdateArgs<ExtArgs>>): Prisma__AccessGrantClient<$Result.GetResult<Prisma.$AccessGrantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AccessGrants.
     * @param {AccessGrantDeleteManyArgs} args - Arguments to filter AccessGrants to delete.
     * @example
     * // Delete a few AccessGrants
     * const { count } = await prisma.accessGrant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccessGrantDeleteManyArgs>(args?: SelectSubset<T, AccessGrantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AccessGrants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessGrantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AccessGrants
     * const accessGrant = await prisma.accessGrant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccessGrantUpdateManyArgs>(args: SelectSubset<T, AccessGrantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AccessGrants and returns the data updated in the database.
     * @param {AccessGrantUpdateManyAndReturnArgs} args - Arguments to update many AccessGrants.
     * @example
     * // Update many AccessGrants
     * const accessGrant = await prisma.accessGrant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AccessGrants and only return the `id`
     * const accessGrantWithIdOnly = await prisma.accessGrant.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccessGrantUpdateManyAndReturnArgs>(args: SelectSubset<T, AccessGrantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccessGrantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AccessGrant.
     * @param {AccessGrantUpsertArgs} args - Arguments to update or create a AccessGrant.
     * @example
     * // Update or create a AccessGrant
     * const accessGrant = await prisma.accessGrant.upsert({
     *   create: {
     *     // ... data to create a AccessGrant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AccessGrant we want to update
     *   }
     * })
     */
    upsert<T extends AccessGrantUpsertArgs>(args: SelectSubset<T, AccessGrantUpsertArgs<ExtArgs>>): Prisma__AccessGrantClient<$Result.GetResult<Prisma.$AccessGrantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AccessGrants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessGrantCountArgs} args - Arguments to filter AccessGrants to count.
     * @example
     * // Count the number of AccessGrants
     * const count = await prisma.accessGrant.count({
     *   where: {
     *     // ... the filter for the AccessGrants we want to count
     *   }
     * })
    **/
    count<T extends AccessGrantCountArgs>(
      args?: Subset<T, AccessGrantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccessGrantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AccessGrant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessGrantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccessGrantAggregateArgs>(args: Subset<T, AccessGrantAggregateArgs>): Prisma.PrismaPromise<GetAccessGrantAggregateType<T>>

    /**
     * Group by AccessGrant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccessGrantGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccessGrantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccessGrantGroupByArgs['orderBy'] }
        : { orderBy?: AccessGrantGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccessGrantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccessGrantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AccessGrant model
   */
  readonly fields: AccessGrantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AccessGrant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccessGrantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AccessGrant model
   */
  interface AccessGrantFieldRefs {
    readonly id: FieldRef<"AccessGrant", 'String'>
    readonly request_id: FieldRef<"AccessGrant", 'String'>
    readonly user_id: FieldRef<"AccessGrant", 'String'>
    readonly granted_at: FieldRef<"AccessGrant", 'DateTime'>
    readonly expires_at: FieldRef<"AccessGrant", 'DateTime'>
    readonly is_active: FieldRef<"AccessGrant", 'Boolean'>
    readonly created_at: FieldRef<"AccessGrant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AccessGrant findUnique
   */
  export type AccessGrantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessGrant
     */
    select?: AccessGrantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessGrant
     */
    omit?: AccessGrantOmit<ExtArgs> | null
    /**
     * Filter, which AccessGrant to fetch.
     */
    where: AccessGrantWhereUniqueInput
  }

  /**
   * AccessGrant findUniqueOrThrow
   */
  export type AccessGrantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessGrant
     */
    select?: AccessGrantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessGrant
     */
    omit?: AccessGrantOmit<ExtArgs> | null
    /**
     * Filter, which AccessGrant to fetch.
     */
    where: AccessGrantWhereUniqueInput
  }

  /**
   * AccessGrant findFirst
   */
  export type AccessGrantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessGrant
     */
    select?: AccessGrantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessGrant
     */
    omit?: AccessGrantOmit<ExtArgs> | null
    /**
     * Filter, which AccessGrant to fetch.
     */
    where?: AccessGrantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccessGrants to fetch.
     */
    orderBy?: AccessGrantOrderByWithRelationInput | AccessGrantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AccessGrants.
     */
    cursor?: AccessGrantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccessGrants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccessGrants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccessGrants.
     */
    distinct?: AccessGrantScalarFieldEnum | AccessGrantScalarFieldEnum[]
  }

  /**
   * AccessGrant findFirstOrThrow
   */
  export type AccessGrantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessGrant
     */
    select?: AccessGrantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessGrant
     */
    omit?: AccessGrantOmit<ExtArgs> | null
    /**
     * Filter, which AccessGrant to fetch.
     */
    where?: AccessGrantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccessGrants to fetch.
     */
    orderBy?: AccessGrantOrderByWithRelationInput | AccessGrantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AccessGrants.
     */
    cursor?: AccessGrantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccessGrants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccessGrants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccessGrants.
     */
    distinct?: AccessGrantScalarFieldEnum | AccessGrantScalarFieldEnum[]
  }

  /**
   * AccessGrant findMany
   */
  export type AccessGrantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessGrant
     */
    select?: AccessGrantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessGrant
     */
    omit?: AccessGrantOmit<ExtArgs> | null
    /**
     * Filter, which AccessGrants to fetch.
     */
    where?: AccessGrantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccessGrants to fetch.
     */
    orderBy?: AccessGrantOrderByWithRelationInput | AccessGrantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AccessGrants.
     */
    cursor?: AccessGrantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccessGrants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccessGrants.
     */
    skip?: number
    distinct?: AccessGrantScalarFieldEnum | AccessGrantScalarFieldEnum[]
  }

  /**
   * AccessGrant create
   */
  export type AccessGrantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessGrant
     */
    select?: AccessGrantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessGrant
     */
    omit?: AccessGrantOmit<ExtArgs> | null
    /**
     * The data needed to create a AccessGrant.
     */
    data: XOR<AccessGrantCreateInput, AccessGrantUncheckedCreateInput>
  }

  /**
   * AccessGrant createMany
   */
  export type AccessGrantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AccessGrants.
     */
    data: AccessGrantCreateManyInput | AccessGrantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AccessGrant createManyAndReturn
   */
  export type AccessGrantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessGrant
     */
    select?: AccessGrantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AccessGrant
     */
    omit?: AccessGrantOmit<ExtArgs> | null
    /**
     * The data used to create many AccessGrants.
     */
    data: AccessGrantCreateManyInput | AccessGrantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AccessGrant update
   */
  export type AccessGrantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessGrant
     */
    select?: AccessGrantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessGrant
     */
    omit?: AccessGrantOmit<ExtArgs> | null
    /**
     * The data needed to update a AccessGrant.
     */
    data: XOR<AccessGrantUpdateInput, AccessGrantUncheckedUpdateInput>
    /**
     * Choose, which AccessGrant to update.
     */
    where: AccessGrantWhereUniqueInput
  }

  /**
   * AccessGrant updateMany
   */
  export type AccessGrantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AccessGrants.
     */
    data: XOR<AccessGrantUpdateManyMutationInput, AccessGrantUncheckedUpdateManyInput>
    /**
     * Filter which AccessGrants to update
     */
    where?: AccessGrantWhereInput
    /**
     * Limit how many AccessGrants to update.
     */
    limit?: number
  }

  /**
   * AccessGrant updateManyAndReturn
   */
  export type AccessGrantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessGrant
     */
    select?: AccessGrantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AccessGrant
     */
    omit?: AccessGrantOmit<ExtArgs> | null
    /**
     * The data used to update AccessGrants.
     */
    data: XOR<AccessGrantUpdateManyMutationInput, AccessGrantUncheckedUpdateManyInput>
    /**
     * Filter which AccessGrants to update
     */
    where?: AccessGrantWhereInput
    /**
     * Limit how many AccessGrants to update.
     */
    limit?: number
  }

  /**
   * AccessGrant upsert
   */
  export type AccessGrantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessGrant
     */
    select?: AccessGrantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessGrant
     */
    omit?: AccessGrantOmit<ExtArgs> | null
    /**
     * The filter to search for the AccessGrant to update in case it exists.
     */
    where: AccessGrantWhereUniqueInput
    /**
     * In case the AccessGrant found by the `where` argument doesn't exist, create a new AccessGrant with this data.
     */
    create: XOR<AccessGrantCreateInput, AccessGrantUncheckedCreateInput>
    /**
     * In case the AccessGrant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccessGrantUpdateInput, AccessGrantUncheckedUpdateInput>
  }

  /**
   * AccessGrant delete
   */
  export type AccessGrantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessGrant
     */
    select?: AccessGrantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessGrant
     */
    omit?: AccessGrantOmit<ExtArgs> | null
    /**
     * Filter which AccessGrant to delete.
     */
    where: AccessGrantWhereUniqueInput
  }

  /**
   * AccessGrant deleteMany
   */
  export type AccessGrantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AccessGrants to delete
     */
    where?: AccessGrantWhereInput
    /**
     * Limit how many AccessGrants to delete.
     */
    limit?: number
  }

  /**
   * AccessGrant without action
   */
  export type AccessGrantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AccessGrant
     */
    select?: AccessGrantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AccessGrant
     */
    omit?: AccessGrantOmit<ExtArgs> | null
  }


  /**
   * Model ChatMessage
   */

  export type AggregateChatMessage = {
    _count: ChatMessageCountAggregateOutputType | null
    _min: ChatMessageMinAggregateOutputType | null
    _max: ChatMessageMaxAggregateOutputType | null
  }

  export type ChatMessageMinAggregateOutputType = {
    id: string | null
    request_id: string | null
    sender_id: string | null
    receiver_id: string | null
    message: string | null
    message_type: $Enums.MessageType | null
    is_read: boolean | null
    created_at: Date | null
  }

  export type ChatMessageMaxAggregateOutputType = {
    id: string | null
    request_id: string | null
    sender_id: string | null
    receiver_id: string | null
    message: string | null
    message_type: $Enums.MessageType | null
    is_read: boolean | null
    created_at: Date | null
  }

  export type ChatMessageCountAggregateOutputType = {
    id: number
    request_id: number
    sender_id: number
    receiver_id: number
    message: number
    message_type: number
    is_read: number
    created_at: number
    _all: number
  }


  export type ChatMessageMinAggregateInputType = {
    id?: true
    request_id?: true
    sender_id?: true
    receiver_id?: true
    message?: true
    message_type?: true
    is_read?: true
    created_at?: true
  }

  export type ChatMessageMaxAggregateInputType = {
    id?: true
    request_id?: true
    sender_id?: true
    receiver_id?: true
    message?: true
    message_type?: true
    is_read?: true
    created_at?: true
  }

  export type ChatMessageCountAggregateInputType = {
    id?: true
    request_id?: true
    sender_id?: true
    receiver_id?: true
    message?: true
    message_type?: true
    is_read?: true
    created_at?: true
    _all?: true
  }

  export type ChatMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMessage to aggregate.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatMessages
    **/
    _count?: true | ChatMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatMessageMaxAggregateInputType
  }

  export type GetChatMessageAggregateType<T extends ChatMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateChatMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatMessage[P]>
      : GetScalarType<T[P], AggregateChatMessage[P]>
  }




  export type ChatMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMessageWhereInput
    orderBy?: ChatMessageOrderByWithAggregationInput | ChatMessageOrderByWithAggregationInput[]
    by: ChatMessageScalarFieldEnum[] | ChatMessageScalarFieldEnum
    having?: ChatMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatMessageCountAggregateInputType | true
    _min?: ChatMessageMinAggregateInputType
    _max?: ChatMessageMaxAggregateInputType
  }

  export type ChatMessageGroupByOutputType = {
    id: string
    request_id: string
    sender_id: string
    receiver_id: string
    message: string
    message_type: $Enums.MessageType
    is_read: boolean
    created_at: Date
    _count: ChatMessageCountAggregateOutputType | null
    _min: ChatMessageMinAggregateOutputType | null
    _max: ChatMessageMaxAggregateOutputType | null
  }

  type GetChatMessageGroupByPayload<T extends ChatMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatMessageGroupByOutputType[P]>
            : GetScalarType<T[P], ChatMessageGroupByOutputType[P]>
        }
      >
    >


  export type ChatMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    request_id?: boolean
    sender_id?: boolean
    receiver_id?: boolean
    message?: boolean
    message_type?: boolean
    is_read?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    request_id?: boolean
    sender_id?: boolean
    receiver_id?: boolean
    message?: boolean
    message_type?: boolean
    is_read?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    request_id?: boolean
    sender_id?: boolean
    receiver_id?: boolean
    message?: boolean
    message_type?: boolean
    is_read?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["chatMessage"]>

  export type ChatMessageSelectScalar = {
    id?: boolean
    request_id?: boolean
    sender_id?: boolean
    receiver_id?: boolean
    message?: boolean
    message_type?: boolean
    is_read?: boolean
    created_at?: boolean
  }

  export type ChatMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "request_id" | "sender_id" | "receiver_id" | "message" | "message_type" | "is_read" | "created_at", ExtArgs["result"]["chatMessage"]>

  export type $ChatMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatMessage"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      request_id: string
      sender_id: string
      receiver_id: string
      message: string
      message_type: $Enums.MessageType
      is_read: boolean
      created_at: Date
    }, ExtArgs["result"]["chatMessage"]>
    composites: {}
  }

  type ChatMessageGetPayload<S extends boolean | null | undefined | ChatMessageDefaultArgs> = $Result.GetResult<Prisma.$ChatMessagePayload, S>

  type ChatMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ChatMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ChatMessageCountAggregateInputType | true
    }

  export interface ChatMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatMessage'], meta: { name: 'ChatMessage' } }
    /**
     * Find zero or one ChatMessage that matches the filter.
     * @param {ChatMessageFindUniqueArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatMessageFindUniqueArgs>(args: SelectSubset<T, ChatMessageFindUniqueArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ChatMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ChatMessageFindUniqueOrThrowArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindFirstArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatMessageFindFirstArgs>(args?: SelectSubset<T, ChatMessageFindFirstArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ChatMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindFirstOrThrowArgs} args - Arguments to find a ChatMessage
     * @example
     * // Get one ChatMessage
     * const chatMessage = await prisma.chatMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ChatMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatMessages
     * const chatMessages = await prisma.chatMessage.findMany()
     * 
     * // Get first 10 ChatMessages
     * const chatMessages = await prisma.chatMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatMessageFindManyArgs>(args?: SelectSubset<T, ChatMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ChatMessage.
     * @param {ChatMessageCreateArgs} args - Arguments to create a ChatMessage.
     * @example
     * // Create one ChatMessage
     * const ChatMessage = await prisma.chatMessage.create({
     *   data: {
     *     // ... data to create a ChatMessage
     *   }
     * })
     * 
     */
    create<T extends ChatMessageCreateArgs>(args: SelectSubset<T, ChatMessageCreateArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ChatMessages.
     * @param {ChatMessageCreateManyArgs} args - Arguments to create many ChatMessages.
     * @example
     * // Create many ChatMessages
     * const chatMessage = await prisma.chatMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatMessageCreateManyArgs>(args?: SelectSubset<T, ChatMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChatMessages and returns the data saved in the database.
     * @param {ChatMessageCreateManyAndReturnArgs} args - Arguments to create many ChatMessages.
     * @example
     * // Create many ChatMessages
     * const chatMessage = await prisma.chatMessage.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChatMessages and only return the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatMessageCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatMessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ChatMessage.
     * @param {ChatMessageDeleteArgs} args - Arguments to delete one ChatMessage.
     * @example
     * // Delete one ChatMessage
     * const ChatMessage = await prisma.chatMessage.delete({
     *   where: {
     *     // ... filter to delete one ChatMessage
     *   }
     * })
     * 
     */
    delete<T extends ChatMessageDeleteArgs>(args: SelectSubset<T, ChatMessageDeleteArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ChatMessage.
     * @param {ChatMessageUpdateArgs} args - Arguments to update one ChatMessage.
     * @example
     * // Update one ChatMessage
     * const chatMessage = await prisma.chatMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatMessageUpdateArgs>(args: SelectSubset<T, ChatMessageUpdateArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ChatMessages.
     * @param {ChatMessageDeleteManyArgs} args - Arguments to filter ChatMessages to delete.
     * @example
     * // Delete a few ChatMessages
     * const { count } = await prisma.chatMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatMessageDeleteManyArgs>(args?: SelectSubset<T, ChatMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatMessages
     * const chatMessage = await prisma.chatMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatMessageUpdateManyArgs>(args: SelectSubset<T, ChatMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatMessages and returns the data updated in the database.
     * @param {ChatMessageUpdateManyAndReturnArgs} args - Arguments to update many ChatMessages.
     * @example
     * // Update many ChatMessages
     * const chatMessage = await prisma.chatMessage.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ChatMessages and only return the `id`
     * const chatMessageWithIdOnly = await prisma.chatMessage.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ChatMessageUpdateManyAndReturnArgs>(args: SelectSubset<T, ChatMessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ChatMessage.
     * @param {ChatMessageUpsertArgs} args - Arguments to update or create a ChatMessage.
     * @example
     * // Update or create a ChatMessage
     * const chatMessage = await prisma.chatMessage.upsert({
     *   create: {
     *     // ... data to create a ChatMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatMessage we want to update
     *   }
     * })
     */
    upsert<T extends ChatMessageUpsertArgs>(args: SelectSubset<T, ChatMessageUpsertArgs<ExtArgs>>): Prisma__ChatMessageClient<$Result.GetResult<Prisma.$ChatMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ChatMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageCountArgs} args - Arguments to filter ChatMessages to count.
     * @example
     * // Count the number of ChatMessages
     * const count = await prisma.chatMessage.count({
     *   where: {
     *     // ... the filter for the ChatMessages we want to count
     *   }
     * })
    **/
    count<T extends ChatMessageCountArgs>(
      args?: Subset<T, ChatMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChatMessageAggregateArgs>(args: Subset<T, ChatMessageAggregateArgs>): Prisma.PrismaPromise<GetChatMessageAggregateType<T>>

    /**
     * Group by ChatMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChatMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatMessageGroupByArgs['orderBy'] }
        : { orderBy?: ChatMessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChatMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatMessage model
   */
  readonly fields: ChatMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ChatMessage model
   */
  interface ChatMessageFieldRefs {
    readonly id: FieldRef<"ChatMessage", 'String'>
    readonly request_id: FieldRef<"ChatMessage", 'String'>
    readonly sender_id: FieldRef<"ChatMessage", 'String'>
    readonly receiver_id: FieldRef<"ChatMessage", 'String'>
    readonly message: FieldRef<"ChatMessage", 'String'>
    readonly message_type: FieldRef<"ChatMessage", 'MessageType'>
    readonly is_read: FieldRef<"ChatMessage", 'Boolean'>
    readonly created_at: FieldRef<"ChatMessage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ChatMessage findUnique
   */
  export type ChatMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage findUniqueOrThrow
   */
  export type ChatMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage findFirst
   */
  export type ChatMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMessages.
     */
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage findFirstOrThrow
   */
  export type ChatMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Filter, which ChatMessage to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMessages.
     */
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage findMany
   */
  export type ChatMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Filter, which ChatMessages to fetch.
     */
    where?: ChatMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMessages to fetch.
     */
    orderBy?: ChatMessageOrderByWithRelationInput | ChatMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatMessages.
     */
    cursor?: ChatMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMessages.
     */
    skip?: number
    distinct?: ChatMessageScalarFieldEnum | ChatMessageScalarFieldEnum[]
  }

  /**
   * ChatMessage create
   */
  export type ChatMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * The data needed to create a ChatMessage.
     */
    data: XOR<ChatMessageCreateInput, ChatMessageUncheckedCreateInput>
  }

  /**
   * ChatMessage createMany
   */
  export type ChatMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatMessages.
     */
    data: ChatMessageCreateManyInput | ChatMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatMessage createManyAndReturn
   */
  export type ChatMessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * The data used to create many ChatMessages.
     */
    data: ChatMessageCreateManyInput | ChatMessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatMessage update
   */
  export type ChatMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * The data needed to update a ChatMessage.
     */
    data: XOR<ChatMessageUpdateInput, ChatMessageUncheckedUpdateInput>
    /**
     * Choose, which ChatMessage to update.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage updateMany
   */
  export type ChatMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatMessages.
     */
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyInput>
    /**
     * Filter which ChatMessages to update
     */
    where?: ChatMessageWhereInput
    /**
     * Limit how many ChatMessages to update.
     */
    limit?: number
  }

  /**
   * ChatMessage updateManyAndReturn
   */
  export type ChatMessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * The data used to update ChatMessages.
     */
    data: XOR<ChatMessageUpdateManyMutationInput, ChatMessageUncheckedUpdateManyInput>
    /**
     * Filter which ChatMessages to update
     */
    where?: ChatMessageWhereInput
    /**
     * Limit how many ChatMessages to update.
     */
    limit?: number
  }

  /**
   * ChatMessage upsert
   */
  export type ChatMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * The filter to search for the ChatMessage to update in case it exists.
     */
    where: ChatMessageWhereUniqueInput
    /**
     * In case the ChatMessage found by the `where` argument doesn't exist, create a new ChatMessage with this data.
     */
    create: XOR<ChatMessageCreateInput, ChatMessageUncheckedCreateInput>
    /**
     * In case the ChatMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatMessageUpdateInput, ChatMessageUncheckedUpdateInput>
  }

  /**
   * ChatMessage delete
   */
  export type ChatMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
    /**
     * Filter which ChatMessage to delete.
     */
    where: ChatMessageWhereUniqueInput
  }

  /**
   * ChatMessage deleteMany
   */
  export type ChatMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMessages to delete
     */
    where?: ChatMessageWhereInput
    /**
     * Limit how many ChatMessages to delete.
     */
    limit?: number
  }

  /**
   * ChatMessage without action
   */
  export type ChatMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMessage
     */
    select?: ChatMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ChatMessage
     */
    omit?: ChatMessageOmit<ExtArgs> | null
  }


  /**
   * Model VideoCall
   */

  export type AggregateVideoCall = {
    _count: VideoCallCountAggregateOutputType | null
    _avg: VideoCallAvgAggregateOutputType | null
    _sum: VideoCallSumAggregateOutputType | null
    _min: VideoCallMinAggregateOutputType | null
    _max: VideoCallMaxAggregateOutputType | null
  }

  export type VideoCallAvgAggregateOutputType = {
    duration: number | null
  }

  export type VideoCallSumAggregateOutputType = {
    duration: number | null
  }

  export type VideoCallMinAggregateOutputType = {
    id: string | null
    request_id: string | null
    client_id: string | null
    advocate_id: string | null
    call_id: string | null
    status: $Enums.CallStatus | null
    started_at: Date | null
    ended_at: Date | null
    duration: number | null
    recording_url: string | null
    created_at: Date | null
  }

  export type VideoCallMaxAggregateOutputType = {
    id: string | null
    request_id: string | null
    client_id: string | null
    advocate_id: string | null
    call_id: string | null
    status: $Enums.CallStatus | null
    started_at: Date | null
    ended_at: Date | null
    duration: number | null
    recording_url: string | null
    created_at: Date | null
  }

  export type VideoCallCountAggregateOutputType = {
    id: number
    request_id: number
    client_id: number
    advocate_id: number
    call_id: number
    status: number
    started_at: number
    ended_at: number
    duration: number
    recording_url: number
    created_at: number
    _all: number
  }


  export type VideoCallAvgAggregateInputType = {
    duration?: true
  }

  export type VideoCallSumAggregateInputType = {
    duration?: true
  }

  export type VideoCallMinAggregateInputType = {
    id?: true
    request_id?: true
    client_id?: true
    advocate_id?: true
    call_id?: true
    status?: true
    started_at?: true
    ended_at?: true
    duration?: true
    recording_url?: true
    created_at?: true
  }

  export type VideoCallMaxAggregateInputType = {
    id?: true
    request_id?: true
    client_id?: true
    advocate_id?: true
    call_id?: true
    status?: true
    started_at?: true
    ended_at?: true
    duration?: true
    recording_url?: true
    created_at?: true
  }

  export type VideoCallCountAggregateInputType = {
    id?: true
    request_id?: true
    client_id?: true
    advocate_id?: true
    call_id?: true
    status?: true
    started_at?: true
    ended_at?: true
    duration?: true
    recording_url?: true
    created_at?: true
    _all?: true
  }

  export type VideoCallAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VideoCall to aggregate.
     */
    where?: VideoCallWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoCalls to fetch.
     */
    orderBy?: VideoCallOrderByWithRelationInput | VideoCallOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VideoCallWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoCalls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoCalls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VideoCalls
    **/
    _count?: true | VideoCallCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VideoCallAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VideoCallSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VideoCallMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VideoCallMaxAggregateInputType
  }

  export type GetVideoCallAggregateType<T extends VideoCallAggregateArgs> = {
        [P in keyof T & keyof AggregateVideoCall]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVideoCall[P]>
      : GetScalarType<T[P], AggregateVideoCall[P]>
  }




  export type VideoCallGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VideoCallWhereInput
    orderBy?: VideoCallOrderByWithAggregationInput | VideoCallOrderByWithAggregationInput[]
    by: VideoCallScalarFieldEnum[] | VideoCallScalarFieldEnum
    having?: VideoCallScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VideoCallCountAggregateInputType | true
    _avg?: VideoCallAvgAggregateInputType
    _sum?: VideoCallSumAggregateInputType
    _min?: VideoCallMinAggregateInputType
    _max?: VideoCallMaxAggregateInputType
  }

  export type VideoCallGroupByOutputType = {
    id: string
    request_id: string
    client_id: string
    advocate_id: string
    call_id: string
    status: $Enums.CallStatus
    started_at: Date | null
    ended_at: Date | null
    duration: number | null
    recording_url: string | null
    created_at: Date
    _count: VideoCallCountAggregateOutputType | null
    _avg: VideoCallAvgAggregateOutputType | null
    _sum: VideoCallSumAggregateOutputType | null
    _min: VideoCallMinAggregateOutputType | null
    _max: VideoCallMaxAggregateOutputType | null
  }

  type GetVideoCallGroupByPayload<T extends VideoCallGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VideoCallGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VideoCallGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VideoCallGroupByOutputType[P]>
            : GetScalarType<T[P], VideoCallGroupByOutputType[P]>
        }
      >
    >


  export type VideoCallSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    request_id?: boolean
    client_id?: boolean
    advocate_id?: boolean
    call_id?: boolean
    status?: boolean
    started_at?: boolean
    ended_at?: boolean
    duration?: boolean
    recording_url?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["videoCall"]>

  export type VideoCallSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    request_id?: boolean
    client_id?: boolean
    advocate_id?: boolean
    call_id?: boolean
    status?: boolean
    started_at?: boolean
    ended_at?: boolean
    duration?: boolean
    recording_url?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["videoCall"]>

  export type VideoCallSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    request_id?: boolean
    client_id?: boolean
    advocate_id?: boolean
    call_id?: boolean
    status?: boolean
    started_at?: boolean
    ended_at?: boolean
    duration?: boolean
    recording_url?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["videoCall"]>

  export type VideoCallSelectScalar = {
    id?: boolean
    request_id?: boolean
    client_id?: boolean
    advocate_id?: boolean
    call_id?: boolean
    status?: boolean
    started_at?: boolean
    ended_at?: boolean
    duration?: boolean
    recording_url?: boolean
    created_at?: boolean
  }

  export type VideoCallOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "request_id" | "client_id" | "advocate_id" | "call_id" | "status" | "started_at" | "ended_at" | "duration" | "recording_url" | "created_at", ExtArgs["result"]["videoCall"]>

  export type $VideoCallPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VideoCall"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      request_id: string
      client_id: string
      advocate_id: string
      call_id: string
      status: $Enums.CallStatus
      started_at: Date | null
      ended_at: Date | null
      duration: number | null
      recording_url: string | null
      created_at: Date
    }, ExtArgs["result"]["videoCall"]>
    composites: {}
  }

  type VideoCallGetPayload<S extends boolean | null | undefined | VideoCallDefaultArgs> = $Result.GetResult<Prisma.$VideoCallPayload, S>

  type VideoCallCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VideoCallFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VideoCallCountAggregateInputType | true
    }

  export interface VideoCallDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VideoCall'], meta: { name: 'VideoCall' } }
    /**
     * Find zero or one VideoCall that matches the filter.
     * @param {VideoCallFindUniqueArgs} args - Arguments to find a VideoCall
     * @example
     * // Get one VideoCall
     * const videoCall = await prisma.videoCall.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VideoCallFindUniqueArgs>(args: SelectSubset<T, VideoCallFindUniqueArgs<ExtArgs>>): Prisma__VideoCallClient<$Result.GetResult<Prisma.$VideoCallPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VideoCall that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VideoCallFindUniqueOrThrowArgs} args - Arguments to find a VideoCall
     * @example
     * // Get one VideoCall
     * const videoCall = await prisma.videoCall.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VideoCallFindUniqueOrThrowArgs>(args: SelectSubset<T, VideoCallFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VideoCallClient<$Result.GetResult<Prisma.$VideoCallPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VideoCall that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoCallFindFirstArgs} args - Arguments to find a VideoCall
     * @example
     * // Get one VideoCall
     * const videoCall = await prisma.videoCall.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VideoCallFindFirstArgs>(args?: SelectSubset<T, VideoCallFindFirstArgs<ExtArgs>>): Prisma__VideoCallClient<$Result.GetResult<Prisma.$VideoCallPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VideoCall that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoCallFindFirstOrThrowArgs} args - Arguments to find a VideoCall
     * @example
     * // Get one VideoCall
     * const videoCall = await prisma.videoCall.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VideoCallFindFirstOrThrowArgs>(args?: SelectSubset<T, VideoCallFindFirstOrThrowArgs<ExtArgs>>): Prisma__VideoCallClient<$Result.GetResult<Prisma.$VideoCallPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VideoCalls that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoCallFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VideoCalls
     * const videoCalls = await prisma.videoCall.findMany()
     * 
     * // Get first 10 VideoCalls
     * const videoCalls = await prisma.videoCall.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const videoCallWithIdOnly = await prisma.videoCall.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VideoCallFindManyArgs>(args?: SelectSubset<T, VideoCallFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoCallPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VideoCall.
     * @param {VideoCallCreateArgs} args - Arguments to create a VideoCall.
     * @example
     * // Create one VideoCall
     * const VideoCall = await prisma.videoCall.create({
     *   data: {
     *     // ... data to create a VideoCall
     *   }
     * })
     * 
     */
    create<T extends VideoCallCreateArgs>(args: SelectSubset<T, VideoCallCreateArgs<ExtArgs>>): Prisma__VideoCallClient<$Result.GetResult<Prisma.$VideoCallPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VideoCalls.
     * @param {VideoCallCreateManyArgs} args - Arguments to create many VideoCalls.
     * @example
     * // Create many VideoCalls
     * const videoCall = await prisma.videoCall.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VideoCallCreateManyArgs>(args?: SelectSubset<T, VideoCallCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VideoCalls and returns the data saved in the database.
     * @param {VideoCallCreateManyAndReturnArgs} args - Arguments to create many VideoCalls.
     * @example
     * // Create many VideoCalls
     * const videoCall = await prisma.videoCall.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VideoCalls and only return the `id`
     * const videoCallWithIdOnly = await prisma.videoCall.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VideoCallCreateManyAndReturnArgs>(args?: SelectSubset<T, VideoCallCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoCallPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VideoCall.
     * @param {VideoCallDeleteArgs} args - Arguments to delete one VideoCall.
     * @example
     * // Delete one VideoCall
     * const VideoCall = await prisma.videoCall.delete({
     *   where: {
     *     // ... filter to delete one VideoCall
     *   }
     * })
     * 
     */
    delete<T extends VideoCallDeleteArgs>(args: SelectSubset<T, VideoCallDeleteArgs<ExtArgs>>): Prisma__VideoCallClient<$Result.GetResult<Prisma.$VideoCallPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VideoCall.
     * @param {VideoCallUpdateArgs} args - Arguments to update one VideoCall.
     * @example
     * // Update one VideoCall
     * const videoCall = await prisma.videoCall.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VideoCallUpdateArgs>(args: SelectSubset<T, VideoCallUpdateArgs<ExtArgs>>): Prisma__VideoCallClient<$Result.GetResult<Prisma.$VideoCallPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VideoCalls.
     * @param {VideoCallDeleteManyArgs} args - Arguments to filter VideoCalls to delete.
     * @example
     * // Delete a few VideoCalls
     * const { count } = await prisma.videoCall.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VideoCallDeleteManyArgs>(args?: SelectSubset<T, VideoCallDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VideoCalls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoCallUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VideoCalls
     * const videoCall = await prisma.videoCall.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VideoCallUpdateManyArgs>(args: SelectSubset<T, VideoCallUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VideoCalls and returns the data updated in the database.
     * @param {VideoCallUpdateManyAndReturnArgs} args - Arguments to update many VideoCalls.
     * @example
     * // Update many VideoCalls
     * const videoCall = await prisma.videoCall.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VideoCalls and only return the `id`
     * const videoCallWithIdOnly = await prisma.videoCall.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VideoCallUpdateManyAndReturnArgs>(args: SelectSubset<T, VideoCallUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VideoCallPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VideoCall.
     * @param {VideoCallUpsertArgs} args - Arguments to update or create a VideoCall.
     * @example
     * // Update or create a VideoCall
     * const videoCall = await prisma.videoCall.upsert({
     *   create: {
     *     // ... data to create a VideoCall
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VideoCall we want to update
     *   }
     * })
     */
    upsert<T extends VideoCallUpsertArgs>(args: SelectSubset<T, VideoCallUpsertArgs<ExtArgs>>): Prisma__VideoCallClient<$Result.GetResult<Prisma.$VideoCallPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VideoCalls.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoCallCountArgs} args - Arguments to filter VideoCalls to count.
     * @example
     * // Count the number of VideoCalls
     * const count = await prisma.videoCall.count({
     *   where: {
     *     // ... the filter for the VideoCalls we want to count
     *   }
     * })
    **/
    count<T extends VideoCallCountArgs>(
      args?: Subset<T, VideoCallCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VideoCallCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VideoCall.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoCallAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VideoCallAggregateArgs>(args: Subset<T, VideoCallAggregateArgs>): Prisma.PrismaPromise<GetVideoCallAggregateType<T>>

    /**
     * Group by VideoCall.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VideoCallGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VideoCallGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VideoCallGroupByArgs['orderBy'] }
        : { orderBy?: VideoCallGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VideoCallGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVideoCallGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VideoCall model
   */
  readonly fields: VideoCallFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VideoCall.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VideoCallClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VideoCall model
   */
  interface VideoCallFieldRefs {
    readonly id: FieldRef<"VideoCall", 'String'>
    readonly request_id: FieldRef<"VideoCall", 'String'>
    readonly client_id: FieldRef<"VideoCall", 'String'>
    readonly advocate_id: FieldRef<"VideoCall", 'String'>
    readonly call_id: FieldRef<"VideoCall", 'String'>
    readonly status: FieldRef<"VideoCall", 'CallStatus'>
    readonly started_at: FieldRef<"VideoCall", 'DateTime'>
    readonly ended_at: FieldRef<"VideoCall", 'DateTime'>
    readonly duration: FieldRef<"VideoCall", 'Int'>
    readonly recording_url: FieldRef<"VideoCall", 'String'>
    readonly created_at: FieldRef<"VideoCall", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VideoCall findUnique
   */
  export type VideoCallFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoCall
     */
    select?: VideoCallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoCall
     */
    omit?: VideoCallOmit<ExtArgs> | null
    /**
     * Filter, which VideoCall to fetch.
     */
    where: VideoCallWhereUniqueInput
  }

  /**
   * VideoCall findUniqueOrThrow
   */
  export type VideoCallFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoCall
     */
    select?: VideoCallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoCall
     */
    omit?: VideoCallOmit<ExtArgs> | null
    /**
     * Filter, which VideoCall to fetch.
     */
    where: VideoCallWhereUniqueInput
  }

  /**
   * VideoCall findFirst
   */
  export type VideoCallFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoCall
     */
    select?: VideoCallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoCall
     */
    omit?: VideoCallOmit<ExtArgs> | null
    /**
     * Filter, which VideoCall to fetch.
     */
    where?: VideoCallWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoCalls to fetch.
     */
    orderBy?: VideoCallOrderByWithRelationInput | VideoCallOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VideoCalls.
     */
    cursor?: VideoCallWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoCalls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoCalls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VideoCalls.
     */
    distinct?: VideoCallScalarFieldEnum | VideoCallScalarFieldEnum[]
  }

  /**
   * VideoCall findFirstOrThrow
   */
  export type VideoCallFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoCall
     */
    select?: VideoCallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoCall
     */
    omit?: VideoCallOmit<ExtArgs> | null
    /**
     * Filter, which VideoCall to fetch.
     */
    where?: VideoCallWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoCalls to fetch.
     */
    orderBy?: VideoCallOrderByWithRelationInput | VideoCallOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VideoCalls.
     */
    cursor?: VideoCallWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoCalls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoCalls.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VideoCalls.
     */
    distinct?: VideoCallScalarFieldEnum | VideoCallScalarFieldEnum[]
  }

  /**
   * VideoCall findMany
   */
  export type VideoCallFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoCall
     */
    select?: VideoCallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoCall
     */
    omit?: VideoCallOmit<ExtArgs> | null
    /**
     * Filter, which VideoCalls to fetch.
     */
    where?: VideoCallWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VideoCalls to fetch.
     */
    orderBy?: VideoCallOrderByWithRelationInput | VideoCallOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VideoCalls.
     */
    cursor?: VideoCallWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VideoCalls from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VideoCalls.
     */
    skip?: number
    distinct?: VideoCallScalarFieldEnum | VideoCallScalarFieldEnum[]
  }

  /**
   * VideoCall create
   */
  export type VideoCallCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoCall
     */
    select?: VideoCallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoCall
     */
    omit?: VideoCallOmit<ExtArgs> | null
    /**
     * The data needed to create a VideoCall.
     */
    data: XOR<VideoCallCreateInput, VideoCallUncheckedCreateInput>
  }

  /**
   * VideoCall createMany
   */
  export type VideoCallCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VideoCalls.
     */
    data: VideoCallCreateManyInput | VideoCallCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VideoCall createManyAndReturn
   */
  export type VideoCallCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoCall
     */
    select?: VideoCallSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VideoCall
     */
    omit?: VideoCallOmit<ExtArgs> | null
    /**
     * The data used to create many VideoCalls.
     */
    data: VideoCallCreateManyInput | VideoCallCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VideoCall update
   */
  export type VideoCallUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoCall
     */
    select?: VideoCallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoCall
     */
    omit?: VideoCallOmit<ExtArgs> | null
    /**
     * The data needed to update a VideoCall.
     */
    data: XOR<VideoCallUpdateInput, VideoCallUncheckedUpdateInput>
    /**
     * Choose, which VideoCall to update.
     */
    where: VideoCallWhereUniqueInput
  }

  /**
   * VideoCall updateMany
   */
  export type VideoCallUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VideoCalls.
     */
    data: XOR<VideoCallUpdateManyMutationInput, VideoCallUncheckedUpdateManyInput>
    /**
     * Filter which VideoCalls to update
     */
    where?: VideoCallWhereInput
    /**
     * Limit how many VideoCalls to update.
     */
    limit?: number
  }

  /**
   * VideoCall updateManyAndReturn
   */
  export type VideoCallUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoCall
     */
    select?: VideoCallSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VideoCall
     */
    omit?: VideoCallOmit<ExtArgs> | null
    /**
     * The data used to update VideoCalls.
     */
    data: XOR<VideoCallUpdateManyMutationInput, VideoCallUncheckedUpdateManyInput>
    /**
     * Filter which VideoCalls to update
     */
    where?: VideoCallWhereInput
    /**
     * Limit how many VideoCalls to update.
     */
    limit?: number
  }

  /**
   * VideoCall upsert
   */
  export type VideoCallUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoCall
     */
    select?: VideoCallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoCall
     */
    omit?: VideoCallOmit<ExtArgs> | null
    /**
     * The filter to search for the VideoCall to update in case it exists.
     */
    where: VideoCallWhereUniqueInput
    /**
     * In case the VideoCall found by the `where` argument doesn't exist, create a new VideoCall with this data.
     */
    create: XOR<VideoCallCreateInput, VideoCallUncheckedCreateInput>
    /**
     * In case the VideoCall was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VideoCallUpdateInput, VideoCallUncheckedUpdateInput>
  }

  /**
   * VideoCall delete
   */
  export type VideoCallDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoCall
     */
    select?: VideoCallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoCall
     */
    omit?: VideoCallOmit<ExtArgs> | null
    /**
     * Filter which VideoCall to delete.
     */
    where: VideoCallWhereUniqueInput
  }

  /**
   * VideoCall deleteMany
   */
  export type VideoCallDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VideoCalls to delete
     */
    where?: VideoCallWhereInput
    /**
     * Limit how many VideoCalls to delete.
     */
    limit?: number
  }

  /**
   * VideoCall without action
   */
  export type VideoCallDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VideoCall
     */
    select?: VideoCallSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VideoCall
     */
    omit?: VideoCallOmit<ExtArgs> | null
  }


  /**
   * Model MonthlyEarnings
   */

  export type AggregateMonthlyEarnings = {
    _count: MonthlyEarningsCountAggregateOutputType | null
    _avg: MonthlyEarningsAvgAggregateOutputType | null
    _sum: MonthlyEarningsSumAggregateOutputType | null
    _min: MonthlyEarningsMinAggregateOutputType | null
    _max: MonthlyEarningsMaxAggregateOutputType | null
  }

  export type MonthlyEarningsAvgAggregateOutputType = {
    year: number | null
    month: number | null
    total_amount: number | null
    consultation_count: number | null
  }

  export type MonthlyEarningsSumAggregateOutputType = {
    year: number | null
    month: number | null
    total_amount: number | null
    consultation_count: number | null
  }

  export type MonthlyEarningsMinAggregateOutputType = {
    id: string | null
    advocate_id: string | null
    year: number | null
    month: number | null
    total_amount: number | null
    consultation_count: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type MonthlyEarningsMaxAggregateOutputType = {
    id: string | null
    advocate_id: string | null
    year: number | null
    month: number | null
    total_amount: number | null
    consultation_count: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type MonthlyEarningsCountAggregateOutputType = {
    id: number
    advocate_id: number
    year: number
    month: number
    total_amount: number
    consultation_count: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type MonthlyEarningsAvgAggregateInputType = {
    year?: true
    month?: true
    total_amount?: true
    consultation_count?: true
  }

  export type MonthlyEarningsSumAggregateInputType = {
    year?: true
    month?: true
    total_amount?: true
    consultation_count?: true
  }

  export type MonthlyEarningsMinAggregateInputType = {
    id?: true
    advocate_id?: true
    year?: true
    month?: true
    total_amount?: true
    consultation_count?: true
    created_at?: true
    updated_at?: true
  }

  export type MonthlyEarningsMaxAggregateInputType = {
    id?: true
    advocate_id?: true
    year?: true
    month?: true
    total_amount?: true
    consultation_count?: true
    created_at?: true
    updated_at?: true
  }

  export type MonthlyEarningsCountAggregateInputType = {
    id?: true
    advocate_id?: true
    year?: true
    month?: true
    total_amount?: true
    consultation_count?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type MonthlyEarningsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MonthlyEarnings to aggregate.
     */
    where?: MonthlyEarningsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonthlyEarnings to fetch.
     */
    orderBy?: MonthlyEarningsOrderByWithRelationInput | MonthlyEarningsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MonthlyEarningsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonthlyEarnings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonthlyEarnings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MonthlyEarnings
    **/
    _count?: true | MonthlyEarningsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MonthlyEarningsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MonthlyEarningsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MonthlyEarningsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MonthlyEarningsMaxAggregateInputType
  }

  export type GetMonthlyEarningsAggregateType<T extends MonthlyEarningsAggregateArgs> = {
        [P in keyof T & keyof AggregateMonthlyEarnings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMonthlyEarnings[P]>
      : GetScalarType<T[P], AggregateMonthlyEarnings[P]>
  }




  export type MonthlyEarningsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MonthlyEarningsWhereInput
    orderBy?: MonthlyEarningsOrderByWithAggregationInput | MonthlyEarningsOrderByWithAggregationInput[]
    by: MonthlyEarningsScalarFieldEnum[] | MonthlyEarningsScalarFieldEnum
    having?: MonthlyEarningsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MonthlyEarningsCountAggregateInputType | true
    _avg?: MonthlyEarningsAvgAggregateInputType
    _sum?: MonthlyEarningsSumAggregateInputType
    _min?: MonthlyEarningsMinAggregateInputType
    _max?: MonthlyEarningsMaxAggregateInputType
  }

  export type MonthlyEarningsGroupByOutputType = {
    id: string
    advocate_id: string
    year: number
    month: number
    total_amount: number
    consultation_count: number
    created_at: Date
    updated_at: Date
    _count: MonthlyEarningsCountAggregateOutputType | null
    _avg: MonthlyEarningsAvgAggregateOutputType | null
    _sum: MonthlyEarningsSumAggregateOutputType | null
    _min: MonthlyEarningsMinAggregateOutputType | null
    _max: MonthlyEarningsMaxAggregateOutputType | null
  }

  type GetMonthlyEarningsGroupByPayload<T extends MonthlyEarningsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MonthlyEarningsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MonthlyEarningsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MonthlyEarningsGroupByOutputType[P]>
            : GetScalarType<T[P], MonthlyEarningsGroupByOutputType[P]>
        }
      >
    >


  export type MonthlyEarningsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    advocate_id?: boolean
    year?: boolean
    month?: boolean
    total_amount?: boolean
    consultation_count?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["monthlyEarnings"]>

  export type MonthlyEarningsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    advocate_id?: boolean
    year?: boolean
    month?: boolean
    total_amount?: boolean
    consultation_count?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["monthlyEarnings"]>

  export type MonthlyEarningsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    advocate_id?: boolean
    year?: boolean
    month?: boolean
    total_amount?: boolean
    consultation_count?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["monthlyEarnings"]>

  export type MonthlyEarningsSelectScalar = {
    id?: boolean
    advocate_id?: boolean
    year?: boolean
    month?: boolean
    total_amount?: boolean
    consultation_count?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type MonthlyEarningsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "advocate_id" | "year" | "month" | "total_amount" | "consultation_count" | "created_at" | "updated_at", ExtArgs["result"]["monthlyEarnings"]>

  export type $MonthlyEarningsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MonthlyEarnings"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      advocate_id: string
      year: number
      month: number
      total_amount: number
      consultation_count: number
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["monthlyEarnings"]>
    composites: {}
  }

  type MonthlyEarningsGetPayload<S extends boolean | null | undefined | MonthlyEarningsDefaultArgs> = $Result.GetResult<Prisma.$MonthlyEarningsPayload, S>

  type MonthlyEarningsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MonthlyEarningsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MonthlyEarningsCountAggregateInputType | true
    }

  export interface MonthlyEarningsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MonthlyEarnings'], meta: { name: 'MonthlyEarnings' } }
    /**
     * Find zero or one MonthlyEarnings that matches the filter.
     * @param {MonthlyEarningsFindUniqueArgs} args - Arguments to find a MonthlyEarnings
     * @example
     * // Get one MonthlyEarnings
     * const monthlyEarnings = await prisma.monthlyEarnings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MonthlyEarningsFindUniqueArgs>(args: SelectSubset<T, MonthlyEarningsFindUniqueArgs<ExtArgs>>): Prisma__MonthlyEarningsClient<$Result.GetResult<Prisma.$MonthlyEarningsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MonthlyEarnings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MonthlyEarningsFindUniqueOrThrowArgs} args - Arguments to find a MonthlyEarnings
     * @example
     * // Get one MonthlyEarnings
     * const monthlyEarnings = await prisma.monthlyEarnings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MonthlyEarningsFindUniqueOrThrowArgs>(args: SelectSubset<T, MonthlyEarningsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MonthlyEarningsClient<$Result.GetResult<Prisma.$MonthlyEarningsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MonthlyEarnings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyEarningsFindFirstArgs} args - Arguments to find a MonthlyEarnings
     * @example
     * // Get one MonthlyEarnings
     * const monthlyEarnings = await prisma.monthlyEarnings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MonthlyEarningsFindFirstArgs>(args?: SelectSubset<T, MonthlyEarningsFindFirstArgs<ExtArgs>>): Prisma__MonthlyEarningsClient<$Result.GetResult<Prisma.$MonthlyEarningsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MonthlyEarnings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyEarningsFindFirstOrThrowArgs} args - Arguments to find a MonthlyEarnings
     * @example
     * // Get one MonthlyEarnings
     * const monthlyEarnings = await prisma.monthlyEarnings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MonthlyEarningsFindFirstOrThrowArgs>(args?: SelectSubset<T, MonthlyEarningsFindFirstOrThrowArgs<ExtArgs>>): Prisma__MonthlyEarningsClient<$Result.GetResult<Prisma.$MonthlyEarningsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MonthlyEarnings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyEarningsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MonthlyEarnings
     * const monthlyEarnings = await prisma.monthlyEarnings.findMany()
     * 
     * // Get first 10 MonthlyEarnings
     * const monthlyEarnings = await prisma.monthlyEarnings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const monthlyEarningsWithIdOnly = await prisma.monthlyEarnings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MonthlyEarningsFindManyArgs>(args?: SelectSubset<T, MonthlyEarningsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonthlyEarningsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MonthlyEarnings.
     * @param {MonthlyEarningsCreateArgs} args - Arguments to create a MonthlyEarnings.
     * @example
     * // Create one MonthlyEarnings
     * const MonthlyEarnings = await prisma.monthlyEarnings.create({
     *   data: {
     *     // ... data to create a MonthlyEarnings
     *   }
     * })
     * 
     */
    create<T extends MonthlyEarningsCreateArgs>(args: SelectSubset<T, MonthlyEarningsCreateArgs<ExtArgs>>): Prisma__MonthlyEarningsClient<$Result.GetResult<Prisma.$MonthlyEarningsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MonthlyEarnings.
     * @param {MonthlyEarningsCreateManyArgs} args - Arguments to create many MonthlyEarnings.
     * @example
     * // Create many MonthlyEarnings
     * const monthlyEarnings = await prisma.monthlyEarnings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MonthlyEarningsCreateManyArgs>(args?: SelectSubset<T, MonthlyEarningsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MonthlyEarnings and returns the data saved in the database.
     * @param {MonthlyEarningsCreateManyAndReturnArgs} args - Arguments to create many MonthlyEarnings.
     * @example
     * // Create many MonthlyEarnings
     * const monthlyEarnings = await prisma.monthlyEarnings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MonthlyEarnings and only return the `id`
     * const monthlyEarningsWithIdOnly = await prisma.monthlyEarnings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MonthlyEarningsCreateManyAndReturnArgs>(args?: SelectSubset<T, MonthlyEarningsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonthlyEarningsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MonthlyEarnings.
     * @param {MonthlyEarningsDeleteArgs} args - Arguments to delete one MonthlyEarnings.
     * @example
     * // Delete one MonthlyEarnings
     * const MonthlyEarnings = await prisma.monthlyEarnings.delete({
     *   where: {
     *     // ... filter to delete one MonthlyEarnings
     *   }
     * })
     * 
     */
    delete<T extends MonthlyEarningsDeleteArgs>(args: SelectSubset<T, MonthlyEarningsDeleteArgs<ExtArgs>>): Prisma__MonthlyEarningsClient<$Result.GetResult<Prisma.$MonthlyEarningsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MonthlyEarnings.
     * @param {MonthlyEarningsUpdateArgs} args - Arguments to update one MonthlyEarnings.
     * @example
     * // Update one MonthlyEarnings
     * const monthlyEarnings = await prisma.monthlyEarnings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MonthlyEarningsUpdateArgs>(args: SelectSubset<T, MonthlyEarningsUpdateArgs<ExtArgs>>): Prisma__MonthlyEarningsClient<$Result.GetResult<Prisma.$MonthlyEarningsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MonthlyEarnings.
     * @param {MonthlyEarningsDeleteManyArgs} args - Arguments to filter MonthlyEarnings to delete.
     * @example
     * // Delete a few MonthlyEarnings
     * const { count } = await prisma.monthlyEarnings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MonthlyEarningsDeleteManyArgs>(args?: SelectSubset<T, MonthlyEarningsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MonthlyEarnings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyEarningsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MonthlyEarnings
     * const monthlyEarnings = await prisma.monthlyEarnings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MonthlyEarningsUpdateManyArgs>(args: SelectSubset<T, MonthlyEarningsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MonthlyEarnings and returns the data updated in the database.
     * @param {MonthlyEarningsUpdateManyAndReturnArgs} args - Arguments to update many MonthlyEarnings.
     * @example
     * // Update many MonthlyEarnings
     * const monthlyEarnings = await prisma.monthlyEarnings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MonthlyEarnings and only return the `id`
     * const monthlyEarningsWithIdOnly = await prisma.monthlyEarnings.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MonthlyEarningsUpdateManyAndReturnArgs>(args: SelectSubset<T, MonthlyEarningsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonthlyEarningsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MonthlyEarnings.
     * @param {MonthlyEarningsUpsertArgs} args - Arguments to update or create a MonthlyEarnings.
     * @example
     * // Update or create a MonthlyEarnings
     * const monthlyEarnings = await prisma.monthlyEarnings.upsert({
     *   create: {
     *     // ... data to create a MonthlyEarnings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MonthlyEarnings we want to update
     *   }
     * })
     */
    upsert<T extends MonthlyEarningsUpsertArgs>(args: SelectSubset<T, MonthlyEarningsUpsertArgs<ExtArgs>>): Prisma__MonthlyEarningsClient<$Result.GetResult<Prisma.$MonthlyEarningsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MonthlyEarnings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyEarningsCountArgs} args - Arguments to filter MonthlyEarnings to count.
     * @example
     * // Count the number of MonthlyEarnings
     * const count = await prisma.monthlyEarnings.count({
     *   where: {
     *     // ... the filter for the MonthlyEarnings we want to count
     *   }
     * })
    **/
    count<T extends MonthlyEarningsCountArgs>(
      args?: Subset<T, MonthlyEarningsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MonthlyEarningsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MonthlyEarnings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyEarningsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MonthlyEarningsAggregateArgs>(args: Subset<T, MonthlyEarningsAggregateArgs>): Prisma.PrismaPromise<GetMonthlyEarningsAggregateType<T>>

    /**
     * Group by MonthlyEarnings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonthlyEarningsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MonthlyEarningsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MonthlyEarningsGroupByArgs['orderBy'] }
        : { orderBy?: MonthlyEarningsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MonthlyEarningsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMonthlyEarningsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MonthlyEarnings model
   */
  readonly fields: MonthlyEarningsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MonthlyEarnings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MonthlyEarningsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MonthlyEarnings model
   */
  interface MonthlyEarningsFieldRefs {
    readonly id: FieldRef<"MonthlyEarnings", 'String'>
    readonly advocate_id: FieldRef<"MonthlyEarnings", 'String'>
    readonly year: FieldRef<"MonthlyEarnings", 'Int'>
    readonly month: FieldRef<"MonthlyEarnings", 'Int'>
    readonly total_amount: FieldRef<"MonthlyEarnings", 'Float'>
    readonly consultation_count: FieldRef<"MonthlyEarnings", 'Int'>
    readonly created_at: FieldRef<"MonthlyEarnings", 'DateTime'>
    readonly updated_at: FieldRef<"MonthlyEarnings", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MonthlyEarnings findUnique
   */
  export type MonthlyEarningsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyEarnings
     */
    select?: MonthlyEarningsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyEarnings
     */
    omit?: MonthlyEarningsOmit<ExtArgs> | null
    /**
     * Filter, which MonthlyEarnings to fetch.
     */
    where: MonthlyEarningsWhereUniqueInput
  }

  /**
   * MonthlyEarnings findUniqueOrThrow
   */
  export type MonthlyEarningsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyEarnings
     */
    select?: MonthlyEarningsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyEarnings
     */
    omit?: MonthlyEarningsOmit<ExtArgs> | null
    /**
     * Filter, which MonthlyEarnings to fetch.
     */
    where: MonthlyEarningsWhereUniqueInput
  }

  /**
   * MonthlyEarnings findFirst
   */
  export type MonthlyEarningsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyEarnings
     */
    select?: MonthlyEarningsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyEarnings
     */
    omit?: MonthlyEarningsOmit<ExtArgs> | null
    /**
     * Filter, which MonthlyEarnings to fetch.
     */
    where?: MonthlyEarningsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonthlyEarnings to fetch.
     */
    orderBy?: MonthlyEarningsOrderByWithRelationInput | MonthlyEarningsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MonthlyEarnings.
     */
    cursor?: MonthlyEarningsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonthlyEarnings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonthlyEarnings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MonthlyEarnings.
     */
    distinct?: MonthlyEarningsScalarFieldEnum | MonthlyEarningsScalarFieldEnum[]
  }

  /**
   * MonthlyEarnings findFirstOrThrow
   */
  export type MonthlyEarningsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyEarnings
     */
    select?: MonthlyEarningsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyEarnings
     */
    omit?: MonthlyEarningsOmit<ExtArgs> | null
    /**
     * Filter, which MonthlyEarnings to fetch.
     */
    where?: MonthlyEarningsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonthlyEarnings to fetch.
     */
    orderBy?: MonthlyEarningsOrderByWithRelationInput | MonthlyEarningsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MonthlyEarnings.
     */
    cursor?: MonthlyEarningsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonthlyEarnings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonthlyEarnings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MonthlyEarnings.
     */
    distinct?: MonthlyEarningsScalarFieldEnum | MonthlyEarningsScalarFieldEnum[]
  }

  /**
   * MonthlyEarnings findMany
   */
  export type MonthlyEarningsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyEarnings
     */
    select?: MonthlyEarningsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyEarnings
     */
    omit?: MonthlyEarningsOmit<ExtArgs> | null
    /**
     * Filter, which MonthlyEarnings to fetch.
     */
    where?: MonthlyEarningsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonthlyEarnings to fetch.
     */
    orderBy?: MonthlyEarningsOrderByWithRelationInput | MonthlyEarningsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MonthlyEarnings.
     */
    cursor?: MonthlyEarningsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonthlyEarnings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonthlyEarnings.
     */
    skip?: number
    distinct?: MonthlyEarningsScalarFieldEnum | MonthlyEarningsScalarFieldEnum[]
  }

  /**
   * MonthlyEarnings create
   */
  export type MonthlyEarningsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyEarnings
     */
    select?: MonthlyEarningsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyEarnings
     */
    omit?: MonthlyEarningsOmit<ExtArgs> | null
    /**
     * The data needed to create a MonthlyEarnings.
     */
    data: XOR<MonthlyEarningsCreateInput, MonthlyEarningsUncheckedCreateInput>
  }

  /**
   * MonthlyEarnings createMany
   */
  export type MonthlyEarningsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MonthlyEarnings.
     */
    data: MonthlyEarningsCreateManyInput | MonthlyEarningsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MonthlyEarnings createManyAndReturn
   */
  export type MonthlyEarningsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyEarnings
     */
    select?: MonthlyEarningsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyEarnings
     */
    omit?: MonthlyEarningsOmit<ExtArgs> | null
    /**
     * The data used to create many MonthlyEarnings.
     */
    data: MonthlyEarningsCreateManyInput | MonthlyEarningsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MonthlyEarnings update
   */
  export type MonthlyEarningsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyEarnings
     */
    select?: MonthlyEarningsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyEarnings
     */
    omit?: MonthlyEarningsOmit<ExtArgs> | null
    /**
     * The data needed to update a MonthlyEarnings.
     */
    data: XOR<MonthlyEarningsUpdateInput, MonthlyEarningsUncheckedUpdateInput>
    /**
     * Choose, which MonthlyEarnings to update.
     */
    where: MonthlyEarningsWhereUniqueInput
  }

  /**
   * MonthlyEarnings updateMany
   */
  export type MonthlyEarningsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MonthlyEarnings.
     */
    data: XOR<MonthlyEarningsUpdateManyMutationInput, MonthlyEarningsUncheckedUpdateManyInput>
    /**
     * Filter which MonthlyEarnings to update
     */
    where?: MonthlyEarningsWhereInput
    /**
     * Limit how many MonthlyEarnings to update.
     */
    limit?: number
  }

  /**
   * MonthlyEarnings updateManyAndReturn
   */
  export type MonthlyEarningsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyEarnings
     */
    select?: MonthlyEarningsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyEarnings
     */
    omit?: MonthlyEarningsOmit<ExtArgs> | null
    /**
     * The data used to update MonthlyEarnings.
     */
    data: XOR<MonthlyEarningsUpdateManyMutationInput, MonthlyEarningsUncheckedUpdateManyInput>
    /**
     * Filter which MonthlyEarnings to update
     */
    where?: MonthlyEarningsWhereInput
    /**
     * Limit how many MonthlyEarnings to update.
     */
    limit?: number
  }

  /**
   * MonthlyEarnings upsert
   */
  export type MonthlyEarningsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyEarnings
     */
    select?: MonthlyEarningsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyEarnings
     */
    omit?: MonthlyEarningsOmit<ExtArgs> | null
    /**
     * The filter to search for the MonthlyEarnings to update in case it exists.
     */
    where: MonthlyEarningsWhereUniqueInput
    /**
     * In case the MonthlyEarnings found by the `where` argument doesn't exist, create a new MonthlyEarnings with this data.
     */
    create: XOR<MonthlyEarningsCreateInput, MonthlyEarningsUncheckedCreateInput>
    /**
     * In case the MonthlyEarnings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MonthlyEarningsUpdateInput, MonthlyEarningsUncheckedUpdateInput>
  }

  /**
   * MonthlyEarnings delete
   */
  export type MonthlyEarningsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyEarnings
     */
    select?: MonthlyEarningsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyEarnings
     */
    omit?: MonthlyEarningsOmit<ExtArgs> | null
    /**
     * Filter which MonthlyEarnings to delete.
     */
    where: MonthlyEarningsWhereUniqueInput
  }

  /**
   * MonthlyEarnings deleteMany
   */
  export type MonthlyEarningsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MonthlyEarnings to delete
     */
    where?: MonthlyEarningsWhereInput
    /**
     * Limit how many MonthlyEarnings to delete.
     */
    limit?: number
  }

  /**
   * MonthlyEarnings without action
   */
  export type MonthlyEarningsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonthlyEarnings
     */
    select?: MonthlyEarningsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonthlyEarnings
     */
    omit?: MonthlyEarningsOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ProfileScalarFieldEnum: {
    id: 'id',
    address: 'address',
    created_at: 'created_at',
    email: 'email',
    password: 'password',
    first_name: 'first_name',
    last_name: 'last_name',
    phone: 'phone',
    role: 'role',
    kyc_type: 'kyc_type',
    updated_at: 'updated_at',
    vkyc_completed: 'vkyc_completed',
    vkyc_completed_at: 'vkyc_completed_at',
    can_upload_reports: 'can_upload_reports'
  };

  export type ProfileScalarFieldEnum = (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum]


  export const AdvocateProfileScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    specialization: 'specialization',
    experience: 'experience',
    bio: 'bio',
    education: 'education',
    certifications: 'certifications',
    hourly_rate: 'hourly_rate',
    location: 'location',
    languages: 'languages',
    image_url: 'image_url',
    is_verified: 'is_verified',
    is_available: 'is_available',
    total_consultations: 'total_consultations',
    total_earnings: 'total_earnings',
    rating: 'rating',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type AdvocateProfileScalarFieldEnum = (typeof AdvocateProfileScalarFieldEnum)[keyof typeof AdvocateProfileScalarFieldEnum]


  export const ReportScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    title: 'title',
    category: 'category',
    description: 'description',
    pdf_url: 'pdf_url',
    created_at: 'created_at',
    cloudinary_public_id: 'cloudinary_public_id',
    court: 'court',
    date: 'date',
    tags: 'tags',
    updated_at: 'updated_at'
  };

  export type ReportScalarFieldEnum = (typeof ReportScalarFieldEnum)[keyof typeof ReportScalarFieldEnum]


  export const VkycDocumentScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    document_type: 'document_type',
    document_url: 'document_url',
    kyc_type: 'kyc_type',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type VkycDocumentScalarFieldEnum = (typeof VkycDocumentScalarFieldEnum)[keyof typeof VkycDocumentScalarFieldEnum]


  export const ConsultationRequestScalarFieldEnum: {
    id: 'id',
    client_id: 'client_id',
    advocate_id: 'advocate_id',
    title: 'title',
    description: 'description',
    consultation_type: 'consultation_type',
    status: 'status',
    amount: 'amount',
    scheduled_at: 'scheduled_at',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ConsultationRequestScalarFieldEnum = (typeof ConsultationRequestScalarFieldEnum)[keyof typeof ConsultationRequestScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    request_id: 'request_id',
    client_id: 'client_id',
    advocate_id: 'advocate_id',
    amount: 'amount',
    stripe_payment_id: 'stripe_payment_id',
    stripe_session_id: 'stripe_session_id',
    status: 'status',
    payment_method: 'payment_method',
    processed_at: 'processed_at',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const AccessGrantScalarFieldEnum: {
    id: 'id',
    request_id: 'request_id',
    user_id: 'user_id',
    granted_at: 'granted_at',
    expires_at: 'expires_at',
    is_active: 'is_active',
    created_at: 'created_at'
  };

  export type AccessGrantScalarFieldEnum = (typeof AccessGrantScalarFieldEnum)[keyof typeof AccessGrantScalarFieldEnum]


  export const ChatMessageScalarFieldEnum: {
    id: 'id',
    request_id: 'request_id',
    sender_id: 'sender_id',
    receiver_id: 'receiver_id',
    message: 'message',
    message_type: 'message_type',
    is_read: 'is_read',
    created_at: 'created_at'
  };

  export type ChatMessageScalarFieldEnum = (typeof ChatMessageScalarFieldEnum)[keyof typeof ChatMessageScalarFieldEnum]


  export const VideoCallScalarFieldEnum: {
    id: 'id',
    request_id: 'request_id',
    client_id: 'client_id',
    advocate_id: 'advocate_id',
    call_id: 'call_id',
    status: 'status',
    started_at: 'started_at',
    ended_at: 'ended_at',
    duration: 'duration',
    recording_url: 'recording_url',
    created_at: 'created_at'
  };

  export type VideoCallScalarFieldEnum = (typeof VideoCallScalarFieldEnum)[keyof typeof VideoCallScalarFieldEnum]


  export const MonthlyEarningsScalarFieldEnum: {
    id: 'id',
    advocate_id: 'advocate_id',
    year: 'year',
    month: 'month',
    total_amount: 'total_amount',
    consultation_count: 'consultation_count',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type MonthlyEarningsScalarFieldEnum = (typeof MonthlyEarningsScalarFieldEnum)[keyof typeof MonthlyEarningsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'KycType'
   */
  export type EnumKycTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'KycType'>
    


  /**
   * Reference to a field of type 'KycType[]'
   */
  export type ListEnumKycTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'KycType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'ConsultationType'
   */
  export type EnumConsultationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ConsultationType'>
    


  /**
   * Reference to a field of type 'ConsultationType[]'
   */
  export type ListEnumConsultationTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ConsultationType[]'>
    


  /**
   * Reference to a field of type 'RequestStatus'
   */
  export type EnumRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RequestStatus'>
    


  /**
   * Reference to a field of type 'RequestStatus[]'
   */
  export type ListEnumRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RequestStatus[]'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'PaymentStatus[]'
   */
  export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>
    


  /**
   * Reference to a field of type 'MessageType'
   */
  export type EnumMessageTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MessageType'>
    


  /**
   * Reference to a field of type 'MessageType[]'
   */
  export type ListEnumMessageTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MessageType[]'>
    


  /**
   * Reference to a field of type 'CallStatus'
   */
  export type EnumCallStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CallStatus'>
    


  /**
   * Reference to a field of type 'CallStatus[]'
   */
  export type ListEnumCallStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CallStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type ProfileWhereInput = {
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    id?: StringFilter<"Profile"> | string
    address?: StringNullableFilter<"Profile"> | string | null
    created_at?: DateTimeFilter<"Profile"> | Date | string
    email?: StringNullableFilter<"Profile"> | string | null
    password?: StringNullableFilter<"Profile"> | string | null
    first_name?: StringNullableFilter<"Profile"> | string | null
    last_name?: StringNullableFilter<"Profile"> | string | null
    phone?: StringNullableFilter<"Profile"> | string | null
    role?: EnumUserRoleFilter<"Profile"> | $Enums.UserRole
    kyc_type?: EnumKycTypeFilter<"Profile"> | $Enums.KycType
    updated_at?: DateTimeFilter<"Profile"> | Date | string
    vkyc_completed?: BoolFilter<"Profile"> | boolean
    vkyc_completed_at?: DateTimeNullableFilter<"Profile"> | Date | string | null
    can_upload_reports?: BoolFilter<"Profile"> | boolean
    reports?: ReportListRelationFilter
    advocateProfile?: XOR<AdvocateProfileNullableScalarRelationFilter, AdvocateProfileWhereInput> | null
    vkycDocuments?: VkycDocumentListRelationFilter
  }

  export type ProfileOrderByWithRelationInput = {
    id?: SortOrder
    address?: SortOrderInput | SortOrder
    created_at?: SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    first_name?: SortOrderInput | SortOrder
    last_name?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    role?: SortOrder
    kyc_type?: SortOrder
    updated_at?: SortOrder
    vkyc_completed?: SortOrder
    vkyc_completed_at?: SortOrderInput | SortOrder
    can_upload_reports?: SortOrder
    reports?: ReportOrderByRelationAggregateInput
    advocateProfile?: AdvocateProfileOrderByWithRelationInput
    vkycDocuments?: VkycDocumentOrderByRelationAggregateInput
  }

  export type ProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    address?: StringNullableFilter<"Profile"> | string | null
    created_at?: DateTimeFilter<"Profile"> | Date | string
    password?: StringNullableFilter<"Profile"> | string | null
    first_name?: StringNullableFilter<"Profile"> | string | null
    last_name?: StringNullableFilter<"Profile"> | string | null
    phone?: StringNullableFilter<"Profile"> | string | null
    role?: EnumUserRoleFilter<"Profile"> | $Enums.UserRole
    kyc_type?: EnumKycTypeFilter<"Profile"> | $Enums.KycType
    updated_at?: DateTimeFilter<"Profile"> | Date | string
    vkyc_completed?: BoolFilter<"Profile"> | boolean
    vkyc_completed_at?: DateTimeNullableFilter<"Profile"> | Date | string | null
    can_upload_reports?: BoolFilter<"Profile"> | boolean
    reports?: ReportListRelationFilter
    advocateProfile?: XOR<AdvocateProfileNullableScalarRelationFilter, AdvocateProfileWhereInput> | null
    vkycDocuments?: VkycDocumentListRelationFilter
  }, "id" | "email">

  export type ProfileOrderByWithAggregationInput = {
    id?: SortOrder
    address?: SortOrderInput | SortOrder
    created_at?: SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    first_name?: SortOrderInput | SortOrder
    last_name?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    role?: SortOrder
    kyc_type?: SortOrder
    updated_at?: SortOrder
    vkyc_completed?: SortOrder
    vkyc_completed_at?: SortOrderInput | SortOrder
    can_upload_reports?: SortOrder
    _count?: ProfileCountOrderByAggregateInput
    _max?: ProfileMaxOrderByAggregateInput
    _min?: ProfileMinOrderByAggregateInput
  }

  export type ProfileScalarWhereWithAggregatesInput = {
    AND?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    OR?: ProfileScalarWhereWithAggregatesInput[]
    NOT?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Profile"> | string
    address?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Profile"> | Date | string
    email?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    password?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    first_name?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    last_name?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    role?: EnumUserRoleWithAggregatesFilter<"Profile"> | $Enums.UserRole
    kyc_type?: EnumKycTypeWithAggregatesFilter<"Profile"> | $Enums.KycType
    updated_at?: DateTimeWithAggregatesFilter<"Profile"> | Date | string
    vkyc_completed?: BoolWithAggregatesFilter<"Profile"> | boolean
    vkyc_completed_at?: DateTimeNullableWithAggregatesFilter<"Profile"> | Date | string | null
    can_upload_reports?: BoolWithAggregatesFilter<"Profile"> | boolean
  }

  export type AdvocateProfileWhereInput = {
    AND?: AdvocateProfileWhereInput | AdvocateProfileWhereInput[]
    OR?: AdvocateProfileWhereInput[]
    NOT?: AdvocateProfileWhereInput | AdvocateProfileWhereInput[]
    id?: StringFilter<"AdvocateProfile"> | string
    user_id?: StringFilter<"AdvocateProfile"> | string
    specialization?: StringNullableListFilter<"AdvocateProfile">
    experience?: IntFilter<"AdvocateProfile"> | number
    bio?: StringNullableFilter<"AdvocateProfile"> | string | null
    education?: StringNullableFilter<"AdvocateProfile"> | string | null
    certifications?: StringNullableListFilter<"AdvocateProfile">
    hourly_rate?: FloatFilter<"AdvocateProfile"> | number
    location?: StringNullableFilter<"AdvocateProfile"> | string | null
    languages?: StringNullableListFilter<"AdvocateProfile">
    image_url?: StringNullableFilter<"AdvocateProfile"> | string | null
    is_verified?: BoolFilter<"AdvocateProfile"> | boolean
    is_available?: BoolFilter<"AdvocateProfile"> | boolean
    total_consultations?: IntFilter<"AdvocateProfile"> | number
    total_earnings?: FloatFilter<"AdvocateProfile"> | number
    rating?: FloatFilter<"AdvocateProfile"> | number
    created_at?: DateTimeFilter<"AdvocateProfile"> | Date | string
    updated_at?: DateTimeFilter<"AdvocateProfile"> | Date | string
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }

  export type AdvocateProfileOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    specialization?: SortOrder
    experience?: SortOrder
    bio?: SortOrderInput | SortOrder
    education?: SortOrderInput | SortOrder
    certifications?: SortOrder
    hourly_rate?: SortOrder
    location?: SortOrderInput | SortOrder
    languages?: SortOrder
    image_url?: SortOrderInput | SortOrder
    is_verified?: SortOrder
    is_available?: SortOrder
    total_consultations?: SortOrder
    total_earnings?: SortOrder
    rating?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    profile?: ProfileOrderByWithRelationInput
  }

  export type AdvocateProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    user_id?: string
    AND?: AdvocateProfileWhereInput | AdvocateProfileWhereInput[]
    OR?: AdvocateProfileWhereInput[]
    NOT?: AdvocateProfileWhereInput | AdvocateProfileWhereInput[]
    specialization?: StringNullableListFilter<"AdvocateProfile">
    experience?: IntFilter<"AdvocateProfile"> | number
    bio?: StringNullableFilter<"AdvocateProfile"> | string | null
    education?: StringNullableFilter<"AdvocateProfile"> | string | null
    certifications?: StringNullableListFilter<"AdvocateProfile">
    hourly_rate?: FloatFilter<"AdvocateProfile"> | number
    location?: StringNullableFilter<"AdvocateProfile"> | string | null
    languages?: StringNullableListFilter<"AdvocateProfile">
    image_url?: StringNullableFilter<"AdvocateProfile"> | string | null
    is_verified?: BoolFilter<"AdvocateProfile"> | boolean
    is_available?: BoolFilter<"AdvocateProfile"> | boolean
    total_consultations?: IntFilter<"AdvocateProfile"> | number
    total_earnings?: FloatFilter<"AdvocateProfile"> | number
    rating?: FloatFilter<"AdvocateProfile"> | number
    created_at?: DateTimeFilter<"AdvocateProfile"> | Date | string
    updated_at?: DateTimeFilter<"AdvocateProfile"> | Date | string
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }, "id" | "user_id">

  export type AdvocateProfileOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    specialization?: SortOrder
    experience?: SortOrder
    bio?: SortOrderInput | SortOrder
    education?: SortOrderInput | SortOrder
    certifications?: SortOrder
    hourly_rate?: SortOrder
    location?: SortOrderInput | SortOrder
    languages?: SortOrder
    image_url?: SortOrderInput | SortOrder
    is_verified?: SortOrder
    is_available?: SortOrder
    total_consultations?: SortOrder
    total_earnings?: SortOrder
    rating?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: AdvocateProfileCountOrderByAggregateInput
    _avg?: AdvocateProfileAvgOrderByAggregateInput
    _max?: AdvocateProfileMaxOrderByAggregateInput
    _min?: AdvocateProfileMinOrderByAggregateInput
    _sum?: AdvocateProfileSumOrderByAggregateInput
  }

  export type AdvocateProfileScalarWhereWithAggregatesInput = {
    AND?: AdvocateProfileScalarWhereWithAggregatesInput | AdvocateProfileScalarWhereWithAggregatesInput[]
    OR?: AdvocateProfileScalarWhereWithAggregatesInput[]
    NOT?: AdvocateProfileScalarWhereWithAggregatesInput | AdvocateProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AdvocateProfile"> | string
    user_id?: StringWithAggregatesFilter<"AdvocateProfile"> | string
    specialization?: StringNullableListFilter<"AdvocateProfile">
    experience?: IntWithAggregatesFilter<"AdvocateProfile"> | number
    bio?: StringNullableWithAggregatesFilter<"AdvocateProfile"> | string | null
    education?: StringNullableWithAggregatesFilter<"AdvocateProfile"> | string | null
    certifications?: StringNullableListFilter<"AdvocateProfile">
    hourly_rate?: FloatWithAggregatesFilter<"AdvocateProfile"> | number
    location?: StringNullableWithAggregatesFilter<"AdvocateProfile"> | string | null
    languages?: StringNullableListFilter<"AdvocateProfile">
    image_url?: StringNullableWithAggregatesFilter<"AdvocateProfile"> | string | null
    is_verified?: BoolWithAggregatesFilter<"AdvocateProfile"> | boolean
    is_available?: BoolWithAggregatesFilter<"AdvocateProfile"> | boolean
    total_consultations?: IntWithAggregatesFilter<"AdvocateProfile"> | number
    total_earnings?: FloatWithAggregatesFilter<"AdvocateProfile"> | number
    rating?: FloatWithAggregatesFilter<"AdvocateProfile"> | number
    created_at?: DateTimeWithAggregatesFilter<"AdvocateProfile"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"AdvocateProfile"> | Date | string
  }

  export type ReportWhereInput = {
    AND?: ReportWhereInput | ReportWhereInput[]
    OR?: ReportWhereInput[]
    NOT?: ReportWhereInput | ReportWhereInput[]
    id?: StringFilter<"Report"> | string
    user_id?: StringFilter<"Report"> | string
    title?: StringFilter<"Report"> | string
    category?: StringFilter<"Report"> | string
    description?: StringNullableFilter<"Report"> | string | null
    pdf_url?: StringFilter<"Report"> | string
    created_at?: DateTimeFilter<"Report"> | Date | string
    cloudinary_public_id?: StringNullableFilter<"Report"> | string | null
    court?: StringNullableFilter<"Report"> | string | null
    date?: DateTimeNullableFilter<"Report"> | Date | string | null
    tags?: StringNullableListFilter<"Report">
    updated_at?: DateTimeFilter<"Report"> | Date | string
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }

  export type ReportOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    category?: SortOrder
    description?: SortOrderInput | SortOrder
    pdf_url?: SortOrder
    created_at?: SortOrder
    cloudinary_public_id?: SortOrderInput | SortOrder
    court?: SortOrderInput | SortOrder
    date?: SortOrderInput | SortOrder
    tags?: SortOrder
    updated_at?: SortOrder
    profile?: ProfileOrderByWithRelationInput
  }

  export type ReportWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReportWhereInput | ReportWhereInput[]
    OR?: ReportWhereInput[]
    NOT?: ReportWhereInput | ReportWhereInput[]
    user_id?: StringFilter<"Report"> | string
    title?: StringFilter<"Report"> | string
    category?: StringFilter<"Report"> | string
    description?: StringNullableFilter<"Report"> | string | null
    pdf_url?: StringFilter<"Report"> | string
    created_at?: DateTimeFilter<"Report"> | Date | string
    cloudinary_public_id?: StringNullableFilter<"Report"> | string | null
    court?: StringNullableFilter<"Report"> | string | null
    date?: DateTimeNullableFilter<"Report"> | Date | string | null
    tags?: StringNullableListFilter<"Report">
    updated_at?: DateTimeFilter<"Report"> | Date | string
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }, "id">

  export type ReportOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    category?: SortOrder
    description?: SortOrderInput | SortOrder
    pdf_url?: SortOrder
    created_at?: SortOrder
    cloudinary_public_id?: SortOrderInput | SortOrder
    court?: SortOrderInput | SortOrder
    date?: SortOrderInput | SortOrder
    tags?: SortOrder
    updated_at?: SortOrder
    _count?: ReportCountOrderByAggregateInput
    _max?: ReportMaxOrderByAggregateInput
    _min?: ReportMinOrderByAggregateInput
  }

  export type ReportScalarWhereWithAggregatesInput = {
    AND?: ReportScalarWhereWithAggregatesInput | ReportScalarWhereWithAggregatesInput[]
    OR?: ReportScalarWhereWithAggregatesInput[]
    NOT?: ReportScalarWhereWithAggregatesInput | ReportScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Report"> | string
    user_id?: StringWithAggregatesFilter<"Report"> | string
    title?: StringWithAggregatesFilter<"Report"> | string
    category?: StringWithAggregatesFilter<"Report"> | string
    description?: StringNullableWithAggregatesFilter<"Report"> | string | null
    pdf_url?: StringWithAggregatesFilter<"Report"> | string
    created_at?: DateTimeWithAggregatesFilter<"Report"> | Date | string
    cloudinary_public_id?: StringNullableWithAggregatesFilter<"Report"> | string | null
    court?: StringNullableWithAggregatesFilter<"Report"> | string | null
    date?: DateTimeNullableWithAggregatesFilter<"Report"> | Date | string | null
    tags?: StringNullableListFilter<"Report">
    updated_at?: DateTimeWithAggregatesFilter<"Report"> | Date | string
  }

  export type VkycDocumentWhereInput = {
    AND?: VkycDocumentWhereInput | VkycDocumentWhereInput[]
    OR?: VkycDocumentWhereInput[]
    NOT?: VkycDocumentWhereInput | VkycDocumentWhereInput[]
    id?: StringFilter<"VkycDocument"> | string
    user_id?: StringFilter<"VkycDocument"> | string
    document_type?: StringFilter<"VkycDocument"> | string
    document_url?: StringFilter<"VkycDocument"> | string
    kyc_type?: EnumKycTypeFilter<"VkycDocument"> | $Enums.KycType
    created_at?: DateTimeFilter<"VkycDocument"> | Date | string
    updated_at?: DateTimeFilter<"VkycDocument"> | Date | string
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }

  export type VkycDocumentOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    document_type?: SortOrder
    document_url?: SortOrder
    kyc_type?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    profile?: ProfileOrderByWithRelationInput
  }

  export type VkycDocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VkycDocumentWhereInput | VkycDocumentWhereInput[]
    OR?: VkycDocumentWhereInput[]
    NOT?: VkycDocumentWhereInput | VkycDocumentWhereInput[]
    user_id?: StringFilter<"VkycDocument"> | string
    document_type?: StringFilter<"VkycDocument"> | string
    document_url?: StringFilter<"VkycDocument"> | string
    kyc_type?: EnumKycTypeFilter<"VkycDocument"> | $Enums.KycType
    created_at?: DateTimeFilter<"VkycDocument"> | Date | string
    updated_at?: DateTimeFilter<"VkycDocument"> | Date | string
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }, "id">

  export type VkycDocumentOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    document_type?: SortOrder
    document_url?: SortOrder
    kyc_type?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: VkycDocumentCountOrderByAggregateInput
    _max?: VkycDocumentMaxOrderByAggregateInput
    _min?: VkycDocumentMinOrderByAggregateInput
  }

  export type VkycDocumentScalarWhereWithAggregatesInput = {
    AND?: VkycDocumentScalarWhereWithAggregatesInput | VkycDocumentScalarWhereWithAggregatesInput[]
    OR?: VkycDocumentScalarWhereWithAggregatesInput[]
    NOT?: VkycDocumentScalarWhereWithAggregatesInput | VkycDocumentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VkycDocument"> | string
    user_id?: StringWithAggregatesFilter<"VkycDocument"> | string
    document_type?: StringWithAggregatesFilter<"VkycDocument"> | string
    document_url?: StringWithAggregatesFilter<"VkycDocument"> | string
    kyc_type?: EnumKycTypeWithAggregatesFilter<"VkycDocument"> | $Enums.KycType
    created_at?: DateTimeWithAggregatesFilter<"VkycDocument"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"VkycDocument"> | Date | string
  }

  export type ConsultationRequestWhereInput = {
    AND?: ConsultationRequestWhereInput | ConsultationRequestWhereInput[]
    OR?: ConsultationRequestWhereInput[]
    NOT?: ConsultationRequestWhereInput | ConsultationRequestWhereInput[]
    id?: StringFilter<"ConsultationRequest"> | string
    client_id?: StringFilter<"ConsultationRequest"> | string
    advocate_id?: StringFilter<"ConsultationRequest"> | string
    title?: StringFilter<"ConsultationRequest"> | string
    description?: StringFilter<"ConsultationRequest"> | string
    consultation_type?: EnumConsultationTypeFilter<"ConsultationRequest"> | $Enums.ConsultationType
    status?: EnumRequestStatusFilter<"ConsultationRequest"> | $Enums.RequestStatus
    amount?: FloatFilter<"ConsultationRequest"> | number
    scheduled_at?: DateTimeNullableFilter<"ConsultationRequest"> | Date | string | null
    created_at?: DateTimeFilter<"ConsultationRequest"> | Date | string
    updated_at?: DateTimeFilter<"ConsultationRequest"> | Date | string
  }

  export type ConsultationRequestOrderByWithRelationInput = {
    id?: SortOrder
    client_id?: SortOrder
    advocate_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    consultation_type?: SortOrder
    status?: SortOrder
    amount?: SortOrder
    scheduled_at?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ConsultationRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ConsultationRequestWhereInput | ConsultationRequestWhereInput[]
    OR?: ConsultationRequestWhereInput[]
    NOT?: ConsultationRequestWhereInput | ConsultationRequestWhereInput[]
    client_id?: StringFilter<"ConsultationRequest"> | string
    advocate_id?: StringFilter<"ConsultationRequest"> | string
    title?: StringFilter<"ConsultationRequest"> | string
    description?: StringFilter<"ConsultationRequest"> | string
    consultation_type?: EnumConsultationTypeFilter<"ConsultationRequest"> | $Enums.ConsultationType
    status?: EnumRequestStatusFilter<"ConsultationRequest"> | $Enums.RequestStatus
    amount?: FloatFilter<"ConsultationRequest"> | number
    scheduled_at?: DateTimeNullableFilter<"ConsultationRequest"> | Date | string | null
    created_at?: DateTimeFilter<"ConsultationRequest"> | Date | string
    updated_at?: DateTimeFilter<"ConsultationRequest"> | Date | string
  }, "id">

  export type ConsultationRequestOrderByWithAggregationInput = {
    id?: SortOrder
    client_id?: SortOrder
    advocate_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    consultation_type?: SortOrder
    status?: SortOrder
    amount?: SortOrder
    scheduled_at?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: ConsultationRequestCountOrderByAggregateInput
    _avg?: ConsultationRequestAvgOrderByAggregateInput
    _max?: ConsultationRequestMaxOrderByAggregateInput
    _min?: ConsultationRequestMinOrderByAggregateInput
    _sum?: ConsultationRequestSumOrderByAggregateInput
  }

  export type ConsultationRequestScalarWhereWithAggregatesInput = {
    AND?: ConsultationRequestScalarWhereWithAggregatesInput | ConsultationRequestScalarWhereWithAggregatesInput[]
    OR?: ConsultationRequestScalarWhereWithAggregatesInput[]
    NOT?: ConsultationRequestScalarWhereWithAggregatesInput | ConsultationRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ConsultationRequest"> | string
    client_id?: StringWithAggregatesFilter<"ConsultationRequest"> | string
    advocate_id?: StringWithAggregatesFilter<"ConsultationRequest"> | string
    title?: StringWithAggregatesFilter<"ConsultationRequest"> | string
    description?: StringWithAggregatesFilter<"ConsultationRequest"> | string
    consultation_type?: EnumConsultationTypeWithAggregatesFilter<"ConsultationRequest"> | $Enums.ConsultationType
    status?: EnumRequestStatusWithAggregatesFilter<"ConsultationRequest"> | $Enums.RequestStatus
    amount?: FloatWithAggregatesFilter<"ConsultationRequest"> | number
    scheduled_at?: DateTimeNullableWithAggregatesFilter<"ConsultationRequest"> | Date | string | null
    created_at?: DateTimeWithAggregatesFilter<"ConsultationRequest"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"ConsultationRequest"> | Date | string
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: StringFilter<"Payment"> | string
    request_id?: StringFilter<"Payment"> | string
    client_id?: StringFilter<"Payment"> | string
    advocate_id?: StringFilter<"Payment"> | string
    amount?: FloatFilter<"Payment"> | number
    stripe_payment_id?: StringNullableFilter<"Payment"> | string | null
    stripe_session_id?: StringNullableFilter<"Payment"> | string | null
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    payment_method?: StringNullableFilter<"Payment"> | string | null
    processed_at?: DateTimeNullableFilter<"Payment"> | Date | string | null
    created_at?: DateTimeFilter<"Payment"> | Date | string
    updated_at?: DateTimeFilter<"Payment"> | Date | string
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    request_id?: SortOrder
    client_id?: SortOrder
    advocate_id?: SortOrder
    amount?: SortOrder
    stripe_payment_id?: SortOrderInput | SortOrder
    stripe_session_id?: SortOrderInput | SortOrder
    status?: SortOrder
    payment_method?: SortOrderInput | SortOrder
    processed_at?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    request_id?: string
    stripe_session_id?: string
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    client_id?: StringFilter<"Payment"> | string
    advocate_id?: StringFilter<"Payment"> | string
    amount?: FloatFilter<"Payment"> | number
    stripe_payment_id?: StringNullableFilter<"Payment"> | string | null
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    payment_method?: StringNullableFilter<"Payment"> | string | null
    processed_at?: DateTimeNullableFilter<"Payment"> | Date | string | null
    created_at?: DateTimeFilter<"Payment"> | Date | string
    updated_at?: DateTimeFilter<"Payment"> | Date | string
  }, "id" | "request_id" | "stripe_session_id">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    request_id?: SortOrder
    client_id?: SortOrder
    advocate_id?: SortOrder
    amount?: SortOrder
    stripe_payment_id?: SortOrderInput | SortOrder
    stripe_session_id?: SortOrderInput | SortOrder
    status?: SortOrder
    payment_method?: SortOrderInput | SortOrder
    processed_at?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Payment"> | string
    request_id?: StringWithAggregatesFilter<"Payment"> | string
    client_id?: StringWithAggregatesFilter<"Payment"> | string
    advocate_id?: StringWithAggregatesFilter<"Payment"> | string
    amount?: FloatWithAggregatesFilter<"Payment"> | number
    stripe_payment_id?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    stripe_session_id?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    status?: EnumPaymentStatusWithAggregatesFilter<"Payment"> | $Enums.PaymentStatus
    payment_method?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    processed_at?: DateTimeNullableWithAggregatesFilter<"Payment"> | Date | string | null
    created_at?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
  }

  export type AccessGrantWhereInput = {
    AND?: AccessGrantWhereInput | AccessGrantWhereInput[]
    OR?: AccessGrantWhereInput[]
    NOT?: AccessGrantWhereInput | AccessGrantWhereInput[]
    id?: StringFilter<"AccessGrant"> | string
    request_id?: StringFilter<"AccessGrant"> | string
    user_id?: StringFilter<"AccessGrant"> | string
    granted_at?: DateTimeFilter<"AccessGrant"> | Date | string
    expires_at?: DateTimeFilter<"AccessGrant"> | Date | string
    is_active?: BoolFilter<"AccessGrant"> | boolean
    created_at?: DateTimeFilter<"AccessGrant"> | Date | string
  }

  export type AccessGrantOrderByWithRelationInput = {
    id?: SortOrder
    request_id?: SortOrder
    user_id?: SortOrder
    granted_at?: SortOrder
    expires_at?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
  }

  export type AccessGrantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    request_id?: string
    AND?: AccessGrantWhereInput | AccessGrantWhereInput[]
    OR?: AccessGrantWhereInput[]
    NOT?: AccessGrantWhereInput | AccessGrantWhereInput[]
    user_id?: StringFilter<"AccessGrant"> | string
    granted_at?: DateTimeFilter<"AccessGrant"> | Date | string
    expires_at?: DateTimeFilter<"AccessGrant"> | Date | string
    is_active?: BoolFilter<"AccessGrant"> | boolean
    created_at?: DateTimeFilter<"AccessGrant"> | Date | string
  }, "id" | "request_id">

  export type AccessGrantOrderByWithAggregationInput = {
    id?: SortOrder
    request_id?: SortOrder
    user_id?: SortOrder
    granted_at?: SortOrder
    expires_at?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    _count?: AccessGrantCountOrderByAggregateInput
    _max?: AccessGrantMaxOrderByAggregateInput
    _min?: AccessGrantMinOrderByAggregateInput
  }

  export type AccessGrantScalarWhereWithAggregatesInput = {
    AND?: AccessGrantScalarWhereWithAggregatesInput | AccessGrantScalarWhereWithAggregatesInput[]
    OR?: AccessGrantScalarWhereWithAggregatesInput[]
    NOT?: AccessGrantScalarWhereWithAggregatesInput | AccessGrantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AccessGrant"> | string
    request_id?: StringWithAggregatesFilter<"AccessGrant"> | string
    user_id?: StringWithAggregatesFilter<"AccessGrant"> | string
    granted_at?: DateTimeWithAggregatesFilter<"AccessGrant"> | Date | string
    expires_at?: DateTimeWithAggregatesFilter<"AccessGrant"> | Date | string
    is_active?: BoolWithAggregatesFilter<"AccessGrant"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"AccessGrant"> | Date | string
  }

  export type ChatMessageWhereInput = {
    AND?: ChatMessageWhereInput | ChatMessageWhereInput[]
    OR?: ChatMessageWhereInput[]
    NOT?: ChatMessageWhereInput | ChatMessageWhereInput[]
    id?: StringFilter<"ChatMessage"> | string
    request_id?: StringFilter<"ChatMessage"> | string
    sender_id?: StringFilter<"ChatMessage"> | string
    receiver_id?: StringFilter<"ChatMessage"> | string
    message?: StringFilter<"ChatMessage"> | string
    message_type?: EnumMessageTypeFilter<"ChatMessage"> | $Enums.MessageType
    is_read?: BoolFilter<"ChatMessage"> | boolean
    created_at?: DateTimeFilter<"ChatMessage"> | Date | string
  }

  export type ChatMessageOrderByWithRelationInput = {
    id?: SortOrder
    request_id?: SortOrder
    sender_id?: SortOrder
    receiver_id?: SortOrder
    message?: SortOrder
    message_type?: SortOrder
    is_read?: SortOrder
    created_at?: SortOrder
  }

  export type ChatMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChatMessageWhereInput | ChatMessageWhereInput[]
    OR?: ChatMessageWhereInput[]
    NOT?: ChatMessageWhereInput | ChatMessageWhereInput[]
    request_id?: StringFilter<"ChatMessage"> | string
    sender_id?: StringFilter<"ChatMessage"> | string
    receiver_id?: StringFilter<"ChatMessage"> | string
    message?: StringFilter<"ChatMessage"> | string
    message_type?: EnumMessageTypeFilter<"ChatMessage"> | $Enums.MessageType
    is_read?: BoolFilter<"ChatMessage"> | boolean
    created_at?: DateTimeFilter<"ChatMessage"> | Date | string
  }, "id">

  export type ChatMessageOrderByWithAggregationInput = {
    id?: SortOrder
    request_id?: SortOrder
    sender_id?: SortOrder
    receiver_id?: SortOrder
    message?: SortOrder
    message_type?: SortOrder
    is_read?: SortOrder
    created_at?: SortOrder
    _count?: ChatMessageCountOrderByAggregateInput
    _max?: ChatMessageMaxOrderByAggregateInput
    _min?: ChatMessageMinOrderByAggregateInput
  }

  export type ChatMessageScalarWhereWithAggregatesInput = {
    AND?: ChatMessageScalarWhereWithAggregatesInput | ChatMessageScalarWhereWithAggregatesInput[]
    OR?: ChatMessageScalarWhereWithAggregatesInput[]
    NOT?: ChatMessageScalarWhereWithAggregatesInput | ChatMessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ChatMessage"> | string
    request_id?: StringWithAggregatesFilter<"ChatMessage"> | string
    sender_id?: StringWithAggregatesFilter<"ChatMessage"> | string
    receiver_id?: StringWithAggregatesFilter<"ChatMessage"> | string
    message?: StringWithAggregatesFilter<"ChatMessage"> | string
    message_type?: EnumMessageTypeWithAggregatesFilter<"ChatMessage"> | $Enums.MessageType
    is_read?: BoolWithAggregatesFilter<"ChatMessage"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"ChatMessage"> | Date | string
  }

  export type VideoCallWhereInput = {
    AND?: VideoCallWhereInput | VideoCallWhereInput[]
    OR?: VideoCallWhereInput[]
    NOT?: VideoCallWhereInput | VideoCallWhereInput[]
    id?: StringFilter<"VideoCall"> | string
    request_id?: StringFilter<"VideoCall"> | string
    client_id?: StringFilter<"VideoCall"> | string
    advocate_id?: StringFilter<"VideoCall"> | string
    call_id?: StringFilter<"VideoCall"> | string
    status?: EnumCallStatusFilter<"VideoCall"> | $Enums.CallStatus
    started_at?: DateTimeNullableFilter<"VideoCall"> | Date | string | null
    ended_at?: DateTimeNullableFilter<"VideoCall"> | Date | string | null
    duration?: IntNullableFilter<"VideoCall"> | number | null
    recording_url?: StringNullableFilter<"VideoCall"> | string | null
    created_at?: DateTimeFilter<"VideoCall"> | Date | string
  }

  export type VideoCallOrderByWithRelationInput = {
    id?: SortOrder
    request_id?: SortOrder
    client_id?: SortOrder
    advocate_id?: SortOrder
    call_id?: SortOrder
    status?: SortOrder
    started_at?: SortOrderInput | SortOrder
    ended_at?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    recording_url?: SortOrderInput | SortOrder
    created_at?: SortOrder
  }

  export type VideoCallWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    request_id?: string
    call_id?: string
    AND?: VideoCallWhereInput | VideoCallWhereInput[]
    OR?: VideoCallWhereInput[]
    NOT?: VideoCallWhereInput | VideoCallWhereInput[]
    client_id?: StringFilter<"VideoCall"> | string
    advocate_id?: StringFilter<"VideoCall"> | string
    status?: EnumCallStatusFilter<"VideoCall"> | $Enums.CallStatus
    started_at?: DateTimeNullableFilter<"VideoCall"> | Date | string | null
    ended_at?: DateTimeNullableFilter<"VideoCall"> | Date | string | null
    duration?: IntNullableFilter<"VideoCall"> | number | null
    recording_url?: StringNullableFilter<"VideoCall"> | string | null
    created_at?: DateTimeFilter<"VideoCall"> | Date | string
  }, "id" | "request_id" | "call_id">

  export type VideoCallOrderByWithAggregationInput = {
    id?: SortOrder
    request_id?: SortOrder
    client_id?: SortOrder
    advocate_id?: SortOrder
    call_id?: SortOrder
    status?: SortOrder
    started_at?: SortOrderInput | SortOrder
    ended_at?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    recording_url?: SortOrderInput | SortOrder
    created_at?: SortOrder
    _count?: VideoCallCountOrderByAggregateInput
    _avg?: VideoCallAvgOrderByAggregateInput
    _max?: VideoCallMaxOrderByAggregateInput
    _min?: VideoCallMinOrderByAggregateInput
    _sum?: VideoCallSumOrderByAggregateInput
  }

  export type VideoCallScalarWhereWithAggregatesInput = {
    AND?: VideoCallScalarWhereWithAggregatesInput | VideoCallScalarWhereWithAggregatesInput[]
    OR?: VideoCallScalarWhereWithAggregatesInput[]
    NOT?: VideoCallScalarWhereWithAggregatesInput | VideoCallScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VideoCall"> | string
    request_id?: StringWithAggregatesFilter<"VideoCall"> | string
    client_id?: StringWithAggregatesFilter<"VideoCall"> | string
    advocate_id?: StringWithAggregatesFilter<"VideoCall"> | string
    call_id?: StringWithAggregatesFilter<"VideoCall"> | string
    status?: EnumCallStatusWithAggregatesFilter<"VideoCall"> | $Enums.CallStatus
    started_at?: DateTimeNullableWithAggregatesFilter<"VideoCall"> | Date | string | null
    ended_at?: DateTimeNullableWithAggregatesFilter<"VideoCall"> | Date | string | null
    duration?: IntNullableWithAggregatesFilter<"VideoCall"> | number | null
    recording_url?: StringNullableWithAggregatesFilter<"VideoCall"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"VideoCall"> | Date | string
  }

  export type MonthlyEarningsWhereInput = {
    AND?: MonthlyEarningsWhereInput | MonthlyEarningsWhereInput[]
    OR?: MonthlyEarningsWhereInput[]
    NOT?: MonthlyEarningsWhereInput | MonthlyEarningsWhereInput[]
    id?: StringFilter<"MonthlyEarnings"> | string
    advocate_id?: StringFilter<"MonthlyEarnings"> | string
    year?: IntFilter<"MonthlyEarnings"> | number
    month?: IntFilter<"MonthlyEarnings"> | number
    total_amount?: FloatFilter<"MonthlyEarnings"> | number
    consultation_count?: IntFilter<"MonthlyEarnings"> | number
    created_at?: DateTimeFilter<"MonthlyEarnings"> | Date | string
    updated_at?: DateTimeFilter<"MonthlyEarnings"> | Date | string
  }

  export type MonthlyEarningsOrderByWithRelationInput = {
    id?: SortOrder
    advocate_id?: SortOrder
    year?: SortOrder
    month?: SortOrder
    total_amount?: SortOrder
    consultation_count?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type MonthlyEarningsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    advocate_id_year_month?: MonthlyEarningsAdvocate_idYearMonthCompoundUniqueInput
    AND?: MonthlyEarningsWhereInput | MonthlyEarningsWhereInput[]
    OR?: MonthlyEarningsWhereInput[]
    NOT?: MonthlyEarningsWhereInput | MonthlyEarningsWhereInput[]
    advocate_id?: StringFilter<"MonthlyEarnings"> | string
    year?: IntFilter<"MonthlyEarnings"> | number
    month?: IntFilter<"MonthlyEarnings"> | number
    total_amount?: FloatFilter<"MonthlyEarnings"> | number
    consultation_count?: IntFilter<"MonthlyEarnings"> | number
    created_at?: DateTimeFilter<"MonthlyEarnings"> | Date | string
    updated_at?: DateTimeFilter<"MonthlyEarnings"> | Date | string
  }, "id" | "advocate_id_year_month">

  export type MonthlyEarningsOrderByWithAggregationInput = {
    id?: SortOrder
    advocate_id?: SortOrder
    year?: SortOrder
    month?: SortOrder
    total_amount?: SortOrder
    consultation_count?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: MonthlyEarningsCountOrderByAggregateInput
    _avg?: MonthlyEarningsAvgOrderByAggregateInput
    _max?: MonthlyEarningsMaxOrderByAggregateInput
    _min?: MonthlyEarningsMinOrderByAggregateInput
    _sum?: MonthlyEarningsSumOrderByAggregateInput
  }

  export type MonthlyEarningsScalarWhereWithAggregatesInput = {
    AND?: MonthlyEarningsScalarWhereWithAggregatesInput | MonthlyEarningsScalarWhereWithAggregatesInput[]
    OR?: MonthlyEarningsScalarWhereWithAggregatesInput[]
    NOT?: MonthlyEarningsScalarWhereWithAggregatesInput | MonthlyEarningsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MonthlyEarnings"> | string
    advocate_id?: StringWithAggregatesFilter<"MonthlyEarnings"> | string
    year?: IntWithAggregatesFilter<"MonthlyEarnings"> | number
    month?: IntWithAggregatesFilter<"MonthlyEarnings"> | number
    total_amount?: FloatWithAggregatesFilter<"MonthlyEarnings"> | number
    consultation_count?: IntWithAggregatesFilter<"MonthlyEarnings"> | number
    created_at?: DateTimeWithAggregatesFilter<"MonthlyEarnings"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"MonthlyEarnings"> | Date | string
  }

  export type ProfileCreateInput = {
    id?: string
    address?: string | null
    created_at?: Date | string
    email?: string | null
    password?: string | null
    first_name?: string | null
    last_name?: string | null
    phone?: string | null
    role?: $Enums.UserRole
    kyc_type?: $Enums.KycType
    updated_at?: Date | string
    vkyc_completed?: boolean
    vkyc_completed_at?: Date | string | null
    can_upload_reports?: boolean
    reports?: ReportCreateNestedManyWithoutProfileInput
    advocateProfile?: AdvocateProfileCreateNestedOneWithoutProfileInput
    vkycDocuments?: VkycDocumentCreateNestedManyWithoutProfileInput
  }

  export type ProfileUncheckedCreateInput = {
    id?: string
    address?: string | null
    created_at?: Date | string
    email?: string | null
    password?: string | null
    first_name?: string | null
    last_name?: string | null
    phone?: string | null
    role?: $Enums.UserRole
    kyc_type?: $Enums.KycType
    updated_at?: Date | string
    vkyc_completed?: boolean
    vkyc_completed_at?: Date | string | null
    can_upload_reports?: boolean
    reports?: ReportUncheckedCreateNestedManyWithoutProfileInput
    advocateProfile?: AdvocateProfileUncheckedCreateNestedOneWithoutProfileInput
    vkycDocuments?: VkycDocumentUncheckedCreateNestedManyWithoutProfileInput
  }

  export type ProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    kyc_type?: EnumKycTypeFieldUpdateOperationsInput | $Enums.KycType
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    vkyc_completed?: BoolFieldUpdateOperationsInput | boolean
    vkyc_completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    can_upload_reports?: BoolFieldUpdateOperationsInput | boolean
    reports?: ReportUpdateManyWithoutProfileNestedInput
    advocateProfile?: AdvocateProfileUpdateOneWithoutProfileNestedInput
    vkycDocuments?: VkycDocumentUpdateManyWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    kyc_type?: EnumKycTypeFieldUpdateOperationsInput | $Enums.KycType
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    vkyc_completed?: BoolFieldUpdateOperationsInput | boolean
    vkyc_completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    can_upload_reports?: BoolFieldUpdateOperationsInput | boolean
    reports?: ReportUncheckedUpdateManyWithoutProfileNestedInput
    advocateProfile?: AdvocateProfileUncheckedUpdateOneWithoutProfileNestedInput
    vkycDocuments?: VkycDocumentUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type ProfileCreateManyInput = {
    id?: string
    address?: string | null
    created_at?: Date | string
    email?: string | null
    password?: string | null
    first_name?: string | null
    last_name?: string | null
    phone?: string | null
    role?: $Enums.UserRole
    kyc_type?: $Enums.KycType
    updated_at?: Date | string
    vkyc_completed?: boolean
    vkyc_completed_at?: Date | string | null
    can_upload_reports?: boolean
  }

  export type ProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    kyc_type?: EnumKycTypeFieldUpdateOperationsInput | $Enums.KycType
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    vkyc_completed?: BoolFieldUpdateOperationsInput | boolean
    vkyc_completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    can_upload_reports?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    kyc_type?: EnumKycTypeFieldUpdateOperationsInput | $Enums.KycType
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    vkyc_completed?: BoolFieldUpdateOperationsInput | boolean
    vkyc_completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    can_upload_reports?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AdvocateProfileCreateInput = {
    id?: string
    specialization?: AdvocateProfileCreatespecializationInput | string[]
    experience: number
    bio?: string | null
    education?: string | null
    certifications?: AdvocateProfileCreatecertificationsInput | string[]
    hourly_rate: number
    location?: string | null
    languages?: AdvocateProfileCreatelanguagesInput | string[]
    image_url?: string | null
    is_verified?: boolean
    is_available?: boolean
    total_consultations?: number
    total_earnings?: number
    rating?: number
    created_at?: Date | string
    updated_at?: Date | string
    profile: ProfileCreateNestedOneWithoutAdvocateProfileInput
  }

  export type AdvocateProfileUncheckedCreateInput = {
    id?: string
    user_id: string
    specialization?: AdvocateProfileCreatespecializationInput | string[]
    experience: number
    bio?: string | null
    education?: string | null
    certifications?: AdvocateProfileCreatecertificationsInput | string[]
    hourly_rate: number
    location?: string | null
    languages?: AdvocateProfileCreatelanguagesInput | string[]
    image_url?: string | null
    is_verified?: boolean
    is_available?: boolean
    total_consultations?: number
    total_earnings?: number
    rating?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AdvocateProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    specialization?: AdvocateProfileUpdatespecializationInput | string[]
    experience?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    certifications?: AdvocateProfileUpdatecertificationsInput | string[]
    hourly_rate?: FloatFieldUpdateOperationsInput | number
    location?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: AdvocateProfileUpdatelanguagesInput | string[]
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    is_available?: BoolFieldUpdateOperationsInput | boolean
    total_consultations?: IntFieldUpdateOperationsInput | number
    total_earnings?: FloatFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneRequiredWithoutAdvocateProfileNestedInput
  }

  export type AdvocateProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    specialization?: AdvocateProfileUpdatespecializationInput | string[]
    experience?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    certifications?: AdvocateProfileUpdatecertificationsInput | string[]
    hourly_rate?: FloatFieldUpdateOperationsInput | number
    location?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: AdvocateProfileUpdatelanguagesInput | string[]
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    is_available?: BoolFieldUpdateOperationsInput | boolean
    total_consultations?: IntFieldUpdateOperationsInput | number
    total_earnings?: FloatFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdvocateProfileCreateManyInput = {
    id?: string
    user_id: string
    specialization?: AdvocateProfileCreatespecializationInput | string[]
    experience: number
    bio?: string | null
    education?: string | null
    certifications?: AdvocateProfileCreatecertificationsInput | string[]
    hourly_rate: number
    location?: string | null
    languages?: AdvocateProfileCreatelanguagesInput | string[]
    image_url?: string | null
    is_verified?: boolean
    is_available?: boolean
    total_consultations?: number
    total_earnings?: number
    rating?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AdvocateProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    specialization?: AdvocateProfileUpdatespecializationInput | string[]
    experience?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    certifications?: AdvocateProfileUpdatecertificationsInput | string[]
    hourly_rate?: FloatFieldUpdateOperationsInput | number
    location?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: AdvocateProfileUpdatelanguagesInput | string[]
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    is_available?: BoolFieldUpdateOperationsInput | boolean
    total_consultations?: IntFieldUpdateOperationsInput | number
    total_earnings?: FloatFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdvocateProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    specialization?: AdvocateProfileUpdatespecializationInput | string[]
    experience?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    certifications?: AdvocateProfileUpdatecertificationsInput | string[]
    hourly_rate?: FloatFieldUpdateOperationsInput | number
    location?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: AdvocateProfileUpdatelanguagesInput | string[]
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    is_available?: BoolFieldUpdateOperationsInput | boolean
    total_consultations?: IntFieldUpdateOperationsInput | number
    total_earnings?: FloatFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportCreateInput = {
    id?: string
    title: string
    category: string
    description?: string | null
    pdf_url: string
    created_at?: Date | string
    cloudinary_public_id?: string | null
    court?: string | null
    date?: Date | string | null
    tags?: ReportCreatetagsInput | string[]
    updated_at?: Date | string
    profile: ProfileCreateNestedOneWithoutReportsInput
  }

  export type ReportUncheckedCreateInput = {
    id?: string
    user_id: string
    title: string
    category: string
    description?: string | null
    pdf_url: string
    created_at?: Date | string
    cloudinary_public_id?: string | null
    court?: string | null
    date?: Date | string | null
    tags?: ReportCreatetagsInput | string[]
    updated_at?: Date | string
  }

  export type ReportUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    pdf_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cloudinary_public_id?: NullableStringFieldUpdateOperationsInput | string | null
    court?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tags?: ReportUpdatetagsInput | string[]
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneRequiredWithoutReportsNestedInput
  }

  export type ReportUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    pdf_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cloudinary_public_id?: NullableStringFieldUpdateOperationsInput | string | null
    court?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tags?: ReportUpdatetagsInput | string[]
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportCreateManyInput = {
    id?: string
    user_id: string
    title: string
    category: string
    description?: string | null
    pdf_url: string
    created_at?: Date | string
    cloudinary_public_id?: string | null
    court?: string | null
    date?: Date | string | null
    tags?: ReportCreatetagsInput | string[]
    updated_at?: Date | string
  }

  export type ReportUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    pdf_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cloudinary_public_id?: NullableStringFieldUpdateOperationsInput | string | null
    court?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tags?: ReportUpdatetagsInput | string[]
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    pdf_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cloudinary_public_id?: NullableStringFieldUpdateOperationsInput | string | null
    court?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tags?: ReportUpdatetagsInput | string[]
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VkycDocumentCreateInput = {
    id?: string
    document_type: string
    document_url: string
    kyc_type?: $Enums.KycType
    created_at?: Date | string
    updated_at?: Date | string
    profile: ProfileCreateNestedOneWithoutVkycDocumentsInput
  }

  export type VkycDocumentUncheckedCreateInput = {
    id?: string
    user_id: string
    document_type: string
    document_url: string
    kyc_type?: $Enums.KycType
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type VkycDocumentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    document_type?: StringFieldUpdateOperationsInput | string
    document_url?: StringFieldUpdateOperationsInput | string
    kyc_type?: EnumKycTypeFieldUpdateOperationsInput | $Enums.KycType
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneRequiredWithoutVkycDocumentsNestedInput
  }

  export type VkycDocumentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    document_type?: StringFieldUpdateOperationsInput | string
    document_url?: StringFieldUpdateOperationsInput | string
    kyc_type?: EnumKycTypeFieldUpdateOperationsInput | $Enums.KycType
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VkycDocumentCreateManyInput = {
    id?: string
    user_id: string
    document_type: string
    document_url: string
    kyc_type?: $Enums.KycType
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type VkycDocumentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    document_type?: StringFieldUpdateOperationsInput | string
    document_url?: StringFieldUpdateOperationsInput | string
    kyc_type?: EnumKycTypeFieldUpdateOperationsInput | $Enums.KycType
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VkycDocumentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    document_type?: StringFieldUpdateOperationsInput | string
    document_url?: StringFieldUpdateOperationsInput | string
    kyc_type?: EnumKycTypeFieldUpdateOperationsInput | $Enums.KycType
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsultationRequestCreateInput = {
    id?: string
    client_id: string
    advocate_id: string
    title: string
    description: string
    consultation_type: $Enums.ConsultationType
    status?: $Enums.RequestStatus
    amount: number
    scheduled_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ConsultationRequestUncheckedCreateInput = {
    id?: string
    client_id: string
    advocate_id: string
    title: string
    description: string
    consultation_type: $Enums.ConsultationType
    status?: $Enums.RequestStatus
    amount: number
    scheduled_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ConsultationRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    client_id?: StringFieldUpdateOperationsInput | string
    advocate_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    consultation_type?: EnumConsultationTypeFieldUpdateOperationsInput | $Enums.ConsultationType
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    amount?: FloatFieldUpdateOperationsInput | number
    scheduled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsultationRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    client_id?: StringFieldUpdateOperationsInput | string
    advocate_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    consultation_type?: EnumConsultationTypeFieldUpdateOperationsInput | $Enums.ConsultationType
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    amount?: FloatFieldUpdateOperationsInput | number
    scheduled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsultationRequestCreateManyInput = {
    id?: string
    client_id: string
    advocate_id: string
    title: string
    description: string
    consultation_type: $Enums.ConsultationType
    status?: $Enums.RequestStatus
    amount: number
    scheduled_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ConsultationRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    client_id?: StringFieldUpdateOperationsInput | string
    advocate_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    consultation_type?: EnumConsultationTypeFieldUpdateOperationsInput | $Enums.ConsultationType
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    amount?: FloatFieldUpdateOperationsInput | number
    scheduled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ConsultationRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    client_id?: StringFieldUpdateOperationsInput | string
    advocate_id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    consultation_type?: EnumConsultationTypeFieldUpdateOperationsInput | $Enums.ConsultationType
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    amount?: FloatFieldUpdateOperationsInput | number
    scheduled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateInput = {
    id?: string
    request_id: string
    client_id: string
    advocate_id: string
    amount: number
    stripe_payment_id?: string | null
    stripe_session_id?: string | null
    status?: $Enums.PaymentStatus
    payment_method?: string | null
    processed_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PaymentUncheckedCreateInput = {
    id?: string
    request_id: string
    client_id: string
    advocate_id: string
    amount: number
    stripe_payment_id?: string | null
    stripe_session_id?: string | null
    status?: $Enums.PaymentStatus
    payment_method?: string | null
    processed_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    request_id?: StringFieldUpdateOperationsInput | string
    client_id?: StringFieldUpdateOperationsInput | string
    advocate_id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    stripe_payment_id?: NullableStringFieldUpdateOperationsInput | string | null
    stripe_session_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    processed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    request_id?: StringFieldUpdateOperationsInput | string
    client_id?: StringFieldUpdateOperationsInput | string
    advocate_id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    stripe_payment_id?: NullableStringFieldUpdateOperationsInput | string | null
    stripe_session_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    processed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManyInput = {
    id?: string
    request_id: string
    client_id: string
    advocate_id: string
    amount: number
    stripe_payment_id?: string | null
    stripe_session_id?: string | null
    status?: $Enums.PaymentStatus
    payment_method?: string | null
    processed_at?: Date | string | null
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type PaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    request_id?: StringFieldUpdateOperationsInput | string
    client_id?: StringFieldUpdateOperationsInput | string
    advocate_id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    stripe_payment_id?: NullableStringFieldUpdateOperationsInput | string | null
    stripe_session_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    processed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    request_id?: StringFieldUpdateOperationsInput | string
    client_id?: StringFieldUpdateOperationsInput | string
    advocate_id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    stripe_payment_id?: NullableStringFieldUpdateOperationsInput | string | null
    stripe_session_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null
    processed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccessGrantCreateInput = {
    id?: string
    request_id: string
    user_id: string
    granted_at?: Date | string
    expires_at: Date | string
    is_active?: boolean
    created_at?: Date | string
  }

  export type AccessGrantUncheckedCreateInput = {
    id?: string
    request_id: string
    user_id: string
    granted_at?: Date | string
    expires_at: Date | string
    is_active?: boolean
    created_at?: Date | string
  }

  export type AccessGrantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    request_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    granted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccessGrantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    request_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    granted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccessGrantCreateManyInput = {
    id?: string
    request_id: string
    user_id: string
    granted_at?: Date | string
    expires_at: Date | string
    is_active?: boolean
    created_at?: Date | string
  }

  export type AccessGrantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    request_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    granted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccessGrantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    request_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    granted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    expires_at?: DateTimeFieldUpdateOperationsInput | Date | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageCreateInput = {
    id?: string
    request_id: string
    sender_id: string
    receiver_id: string
    message: string
    message_type?: $Enums.MessageType
    is_read?: boolean
    created_at?: Date | string
  }

  export type ChatMessageUncheckedCreateInput = {
    id?: string
    request_id: string
    sender_id: string
    receiver_id: string
    message: string
    message_type?: $Enums.MessageType
    is_read?: boolean
    created_at?: Date | string
  }

  export type ChatMessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    request_id?: StringFieldUpdateOperationsInput | string
    sender_id?: StringFieldUpdateOperationsInput | string
    receiver_id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    message_type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    is_read?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    request_id?: StringFieldUpdateOperationsInput | string
    sender_id?: StringFieldUpdateOperationsInput | string
    receiver_id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    message_type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    is_read?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageCreateManyInput = {
    id?: string
    request_id: string
    sender_id: string
    receiver_id: string
    message: string
    message_type?: $Enums.MessageType
    is_read?: boolean
    created_at?: Date | string
  }

  export type ChatMessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    request_id?: StringFieldUpdateOperationsInput | string
    sender_id?: StringFieldUpdateOperationsInput | string
    receiver_id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    message_type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    is_read?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChatMessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    request_id?: StringFieldUpdateOperationsInput | string
    sender_id?: StringFieldUpdateOperationsInput | string
    receiver_id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    message_type?: EnumMessageTypeFieldUpdateOperationsInput | $Enums.MessageType
    is_read?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoCallCreateInput = {
    id?: string
    request_id: string
    client_id: string
    advocate_id: string
    call_id: string
    status?: $Enums.CallStatus
    started_at?: Date | string | null
    ended_at?: Date | string | null
    duration?: number | null
    recording_url?: string | null
    created_at?: Date | string
  }

  export type VideoCallUncheckedCreateInput = {
    id?: string
    request_id: string
    client_id: string
    advocate_id: string
    call_id: string
    status?: $Enums.CallStatus
    started_at?: Date | string | null
    ended_at?: Date | string | null
    duration?: number | null
    recording_url?: string | null
    created_at?: Date | string
  }

  export type VideoCallUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    request_id?: StringFieldUpdateOperationsInput | string
    client_id?: StringFieldUpdateOperationsInput | string
    advocate_id?: StringFieldUpdateOperationsInput | string
    call_id?: StringFieldUpdateOperationsInput | string
    status?: EnumCallStatusFieldUpdateOperationsInput | $Enums.CallStatus
    started_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ended_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    recording_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoCallUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    request_id?: StringFieldUpdateOperationsInput | string
    client_id?: StringFieldUpdateOperationsInput | string
    advocate_id?: StringFieldUpdateOperationsInput | string
    call_id?: StringFieldUpdateOperationsInput | string
    status?: EnumCallStatusFieldUpdateOperationsInput | $Enums.CallStatus
    started_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ended_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    recording_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoCallCreateManyInput = {
    id?: string
    request_id: string
    client_id: string
    advocate_id: string
    call_id: string
    status?: $Enums.CallStatus
    started_at?: Date | string | null
    ended_at?: Date | string | null
    duration?: number | null
    recording_url?: string | null
    created_at?: Date | string
  }

  export type VideoCallUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    request_id?: StringFieldUpdateOperationsInput | string
    client_id?: StringFieldUpdateOperationsInput | string
    advocate_id?: StringFieldUpdateOperationsInput | string
    call_id?: StringFieldUpdateOperationsInput | string
    status?: EnumCallStatusFieldUpdateOperationsInput | $Enums.CallStatus
    started_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ended_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    recording_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VideoCallUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    request_id?: StringFieldUpdateOperationsInput | string
    client_id?: StringFieldUpdateOperationsInput | string
    advocate_id?: StringFieldUpdateOperationsInput | string
    call_id?: StringFieldUpdateOperationsInput | string
    status?: EnumCallStatusFieldUpdateOperationsInput | $Enums.CallStatus
    started_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ended_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    recording_url?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonthlyEarningsCreateInput = {
    id?: string
    advocate_id: string
    year: number
    month: number
    total_amount?: number
    consultation_count?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type MonthlyEarningsUncheckedCreateInput = {
    id?: string
    advocate_id: string
    year: number
    month: number
    total_amount?: number
    consultation_count?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type MonthlyEarningsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    advocate_id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    total_amount?: FloatFieldUpdateOperationsInput | number
    consultation_count?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonthlyEarningsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    advocate_id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    total_amount?: FloatFieldUpdateOperationsInput | number
    consultation_count?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonthlyEarningsCreateManyInput = {
    id?: string
    advocate_id: string
    year: number
    month: number
    total_amount?: number
    consultation_count?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type MonthlyEarningsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    advocate_id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    total_amount?: FloatFieldUpdateOperationsInput | number
    consultation_count?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonthlyEarningsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    advocate_id?: StringFieldUpdateOperationsInput | string
    year?: IntFieldUpdateOperationsInput | number
    month?: IntFieldUpdateOperationsInput | number
    total_amount?: FloatFieldUpdateOperationsInput | number
    consultation_count?: IntFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type EnumKycTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.KycType | EnumKycTypeFieldRefInput<$PrismaModel>
    in?: $Enums.KycType[] | ListEnumKycTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.KycType[] | ListEnumKycTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumKycTypeFilter<$PrismaModel> | $Enums.KycType
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ReportListRelationFilter = {
    every?: ReportWhereInput
    some?: ReportWhereInput
    none?: ReportWhereInput
  }

  export type AdvocateProfileNullableScalarRelationFilter = {
    is?: AdvocateProfileWhereInput | null
    isNot?: AdvocateProfileWhereInput | null
  }

  export type VkycDocumentListRelationFilter = {
    every?: VkycDocumentWhereInput
    some?: VkycDocumentWhereInput
    none?: VkycDocumentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ReportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VkycDocumentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProfileCountOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    created_at?: SortOrder
    email?: SortOrder
    password?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    kyc_type?: SortOrder
    updated_at?: SortOrder
    vkyc_completed?: SortOrder
    vkyc_completed_at?: SortOrder
    can_upload_reports?: SortOrder
  }

  export type ProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    created_at?: SortOrder
    email?: SortOrder
    password?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    kyc_type?: SortOrder
    updated_at?: SortOrder
    vkyc_completed?: SortOrder
    vkyc_completed_at?: SortOrder
    can_upload_reports?: SortOrder
  }

  export type ProfileMinOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    created_at?: SortOrder
    email?: SortOrder
    password?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    kyc_type?: SortOrder
    updated_at?: SortOrder
    vkyc_completed?: SortOrder
    vkyc_completed_at?: SortOrder
    can_upload_reports?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type EnumKycTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.KycType | EnumKycTypeFieldRefInput<$PrismaModel>
    in?: $Enums.KycType[] | ListEnumKycTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.KycType[] | ListEnumKycTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumKycTypeWithAggregatesFilter<$PrismaModel> | $Enums.KycType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumKycTypeFilter<$PrismaModel>
    _max?: NestedEnumKycTypeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ProfileScalarRelationFilter = {
    is?: ProfileWhereInput
    isNot?: ProfileWhereInput
  }

  export type AdvocateProfileCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    specialization?: SortOrder
    experience?: SortOrder
    bio?: SortOrder
    education?: SortOrder
    certifications?: SortOrder
    hourly_rate?: SortOrder
    location?: SortOrder
    languages?: SortOrder
    image_url?: SortOrder
    is_verified?: SortOrder
    is_available?: SortOrder
    total_consultations?: SortOrder
    total_earnings?: SortOrder
    rating?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AdvocateProfileAvgOrderByAggregateInput = {
    experience?: SortOrder
    hourly_rate?: SortOrder
    total_consultations?: SortOrder
    total_earnings?: SortOrder
    rating?: SortOrder
  }

  export type AdvocateProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    experience?: SortOrder
    bio?: SortOrder
    education?: SortOrder
    hourly_rate?: SortOrder
    location?: SortOrder
    image_url?: SortOrder
    is_verified?: SortOrder
    is_available?: SortOrder
    total_consultations?: SortOrder
    total_earnings?: SortOrder
    rating?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AdvocateProfileMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    experience?: SortOrder
    bio?: SortOrder
    education?: SortOrder
    hourly_rate?: SortOrder
    location?: SortOrder
    image_url?: SortOrder
    is_verified?: SortOrder
    is_available?: SortOrder
    total_consultations?: SortOrder
    total_earnings?: SortOrder
    rating?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type AdvocateProfileSumOrderByAggregateInput = {
    experience?: SortOrder
    hourly_rate?: SortOrder
    total_consultations?: SortOrder
    total_earnings?: SortOrder
    rating?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type ReportCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    category?: SortOrder
    description?: SortOrder
    pdf_url?: SortOrder
    created_at?: SortOrder
    cloudinary_public_id?: SortOrder
    court?: SortOrder
    date?: SortOrder
    tags?: SortOrder
    updated_at?: SortOrder
  }

  export type ReportMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    category?: SortOrder
    description?: SortOrder
    pdf_url?: SortOrder
    created_at?: SortOrder
    cloudinary_public_id?: SortOrder
    court?: SortOrder
    date?: SortOrder
    updated_at?: SortOrder
  }

  export type ReportMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    title?: SortOrder
    category?: SortOrder
    description?: SortOrder
    pdf_url?: SortOrder
    created_at?: SortOrder
    cloudinary_public_id?: SortOrder
    court?: SortOrder
    date?: SortOrder
    updated_at?: SortOrder
  }

  export type VkycDocumentCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    document_type?: SortOrder
    document_url?: SortOrder
    kyc_type?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type VkycDocumentMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    document_type?: SortOrder
    document_url?: SortOrder
    kyc_type?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type VkycDocumentMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    document_type?: SortOrder
    document_url?: SortOrder
    kyc_type?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type EnumConsultationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ConsultationType | EnumConsultationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ConsultationType[] | ListEnumConsultationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConsultationType[] | ListEnumConsultationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumConsultationTypeFilter<$PrismaModel> | $Enums.ConsultationType
  }

  export type EnumRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusFilter<$PrismaModel> | $Enums.RequestStatus
  }

  export type ConsultationRequestCountOrderByAggregateInput = {
    id?: SortOrder
    client_id?: SortOrder
    advocate_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    consultation_type?: SortOrder
    status?: SortOrder
    amount?: SortOrder
    scheduled_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ConsultationRequestAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type ConsultationRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    client_id?: SortOrder
    advocate_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    consultation_type?: SortOrder
    status?: SortOrder
    amount?: SortOrder
    scheduled_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ConsultationRequestMinOrderByAggregateInput = {
    id?: SortOrder
    client_id?: SortOrder
    advocate_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    consultation_type?: SortOrder
    status?: SortOrder
    amount?: SortOrder
    scheduled_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ConsultationRequestSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumConsultationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ConsultationType | EnumConsultationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ConsultationType[] | ListEnumConsultationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConsultationType[] | ListEnumConsultationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumConsultationTypeWithAggregatesFilter<$PrismaModel> | $Enums.ConsultationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumConsultationTypeFilter<$PrismaModel>
    _max?: NestedEnumConsultationTypeFilter<$PrismaModel>
  }

  export type EnumRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.RequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumRequestStatusFilter<$PrismaModel>
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    request_id?: SortOrder
    client_id?: SortOrder
    advocate_id?: SortOrder
    amount?: SortOrder
    stripe_payment_id?: SortOrder
    stripe_session_id?: SortOrder
    status?: SortOrder
    payment_method?: SortOrder
    processed_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    request_id?: SortOrder
    client_id?: SortOrder
    advocate_id?: SortOrder
    amount?: SortOrder
    stripe_payment_id?: SortOrder
    stripe_session_id?: SortOrder
    status?: SortOrder
    payment_method?: SortOrder
    processed_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    request_id?: SortOrder
    client_id?: SortOrder
    advocate_id?: SortOrder
    amount?: SortOrder
    stripe_payment_id?: SortOrder
    stripe_session_id?: SortOrder
    status?: SortOrder
    payment_method?: SortOrder
    processed_at?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type AccessGrantCountOrderByAggregateInput = {
    id?: SortOrder
    request_id?: SortOrder
    user_id?: SortOrder
    granted_at?: SortOrder
    expires_at?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
  }

  export type AccessGrantMaxOrderByAggregateInput = {
    id?: SortOrder
    request_id?: SortOrder
    user_id?: SortOrder
    granted_at?: SortOrder
    expires_at?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
  }

  export type AccessGrantMinOrderByAggregateInput = {
    id?: SortOrder
    request_id?: SortOrder
    user_id?: SortOrder
    granted_at?: SortOrder
    expires_at?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
  }

  export type EnumMessageTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageType | EnumMessageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageTypeFilter<$PrismaModel> | $Enums.MessageType
  }

  export type ChatMessageCountOrderByAggregateInput = {
    id?: SortOrder
    request_id?: SortOrder
    sender_id?: SortOrder
    receiver_id?: SortOrder
    message?: SortOrder
    message_type?: SortOrder
    is_read?: SortOrder
    created_at?: SortOrder
  }

  export type ChatMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    request_id?: SortOrder
    sender_id?: SortOrder
    receiver_id?: SortOrder
    message?: SortOrder
    message_type?: SortOrder
    is_read?: SortOrder
    created_at?: SortOrder
  }

  export type ChatMessageMinOrderByAggregateInput = {
    id?: SortOrder
    request_id?: SortOrder
    sender_id?: SortOrder
    receiver_id?: SortOrder
    message?: SortOrder
    message_type?: SortOrder
    is_read?: SortOrder
    created_at?: SortOrder
  }

  export type EnumMessageTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageType | EnumMessageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageTypeWithAggregatesFilter<$PrismaModel> | $Enums.MessageType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMessageTypeFilter<$PrismaModel>
    _max?: NestedEnumMessageTypeFilter<$PrismaModel>
  }

  export type EnumCallStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CallStatus | EnumCallStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CallStatus[] | ListEnumCallStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CallStatus[] | ListEnumCallStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCallStatusFilter<$PrismaModel> | $Enums.CallStatus
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type VideoCallCountOrderByAggregateInput = {
    id?: SortOrder
    request_id?: SortOrder
    client_id?: SortOrder
    advocate_id?: SortOrder
    call_id?: SortOrder
    status?: SortOrder
    started_at?: SortOrder
    ended_at?: SortOrder
    duration?: SortOrder
    recording_url?: SortOrder
    created_at?: SortOrder
  }

  export type VideoCallAvgOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type VideoCallMaxOrderByAggregateInput = {
    id?: SortOrder
    request_id?: SortOrder
    client_id?: SortOrder
    advocate_id?: SortOrder
    call_id?: SortOrder
    status?: SortOrder
    started_at?: SortOrder
    ended_at?: SortOrder
    duration?: SortOrder
    recording_url?: SortOrder
    created_at?: SortOrder
  }

  export type VideoCallMinOrderByAggregateInput = {
    id?: SortOrder
    request_id?: SortOrder
    client_id?: SortOrder
    advocate_id?: SortOrder
    call_id?: SortOrder
    status?: SortOrder
    started_at?: SortOrder
    ended_at?: SortOrder
    duration?: SortOrder
    recording_url?: SortOrder
    created_at?: SortOrder
  }

  export type VideoCallSumOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type EnumCallStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CallStatus | EnumCallStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CallStatus[] | ListEnumCallStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CallStatus[] | ListEnumCallStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCallStatusWithAggregatesFilter<$PrismaModel> | $Enums.CallStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCallStatusFilter<$PrismaModel>
    _max?: NestedEnumCallStatusFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type MonthlyEarningsAdvocate_idYearMonthCompoundUniqueInput = {
    advocate_id: string
    year: number
    month: number
  }

  export type MonthlyEarningsCountOrderByAggregateInput = {
    id?: SortOrder
    advocate_id?: SortOrder
    year?: SortOrder
    month?: SortOrder
    total_amount?: SortOrder
    consultation_count?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type MonthlyEarningsAvgOrderByAggregateInput = {
    year?: SortOrder
    month?: SortOrder
    total_amount?: SortOrder
    consultation_count?: SortOrder
  }

  export type MonthlyEarningsMaxOrderByAggregateInput = {
    id?: SortOrder
    advocate_id?: SortOrder
    year?: SortOrder
    month?: SortOrder
    total_amount?: SortOrder
    consultation_count?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type MonthlyEarningsMinOrderByAggregateInput = {
    id?: SortOrder
    advocate_id?: SortOrder
    year?: SortOrder
    month?: SortOrder
    total_amount?: SortOrder
    consultation_count?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type MonthlyEarningsSumOrderByAggregateInput = {
    year?: SortOrder
    month?: SortOrder
    total_amount?: SortOrder
    consultation_count?: SortOrder
  }

  export type ReportCreateNestedManyWithoutProfileInput = {
    create?: XOR<ReportCreateWithoutProfileInput, ReportUncheckedCreateWithoutProfileInput> | ReportCreateWithoutProfileInput[] | ReportUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutProfileInput | ReportCreateOrConnectWithoutProfileInput[]
    createMany?: ReportCreateManyProfileInputEnvelope
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
  }

  export type AdvocateProfileCreateNestedOneWithoutProfileInput = {
    create?: XOR<AdvocateProfileCreateWithoutProfileInput, AdvocateProfileUncheckedCreateWithoutProfileInput>
    connectOrCreate?: AdvocateProfileCreateOrConnectWithoutProfileInput
    connect?: AdvocateProfileWhereUniqueInput
  }

  export type VkycDocumentCreateNestedManyWithoutProfileInput = {
    create?: XOR<VkycDocumentCreateWithoutProfileInput, VkycDocumentUncheckedCreateWithoutProfileInput> | VkycDocumentCreateWithoutProfileInput[] | VkycDocumentUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: VkycDocumentCreateOrConnectWithoutProfileInput | VkycDocumentCreateOrConnectWithoutProfileInput[]
    createMany?: VkycDocumentCreateManyProfileInputEnvelope
    connect?: VkycDocumentWhereUniqueInput | VkycDocumentWhereUniqueInput[]
  }

  export type ReportUncheckedCreateNestedManyWithoutProfileInput = {
    create?: XOR<ReportCreateWithoutProfileInput, ReportUncheckedCreateWithoutProfileInput> | ReportCreateWithoutProfileInput[] | ReportUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutProfileInput | ReportCreateOrConnectWithoutProfileInput[]
    createMany?: ReportCreateManyProfileInputEnvelope
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
  }

  export type AdvocateProfileUncheckedCreateNestedOneWithoutProfileInput = {
    create?: XOR<AdvocateProfileCreateWithoutProfileInput, AdvocateProfileUncheckedCreateWithoutProfileInput>
    connectOrCreate?: AdvocateProfileCreateOrConnectWithoutProfileInput
    connect?: AdvocateProfileWhereUniqueInput
  }

  export type VkycDocumentUncheckedCreateNestedManyWithoutProfileInput = {
    create?: XOR<VkycDocumentCreateWithoutProfileInput, VkycDocumentUncheckedCreateWithoutProfileInput> | VkycDocumentCreateWithoutProfileInput[] | VkycDocumentUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: VkycDocumentCreateOrConnectWithoutProfileInput | VkycDocumentCreateOrConnectWithoutProfileInput[]
    createMany?: VkycDocumentCreateManyProfileInputEnvelope
    connect?: VkycDocumentWhereUniqueInput | VkycDocumentWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type EnumKycTypeFieldUpdateOperationsInput = {
    set?: $Enums.KycType
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ReportUpdateManyWithoutProfileNestedInput = {
    create?: XOR<ReportCreateWithoutProfileInput, ReportUncheckedCreateWithoutProfileInput> | ReportCreateWithoutProfileInput[] | ReportUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutProfileInput | ReportCreateOrConnectWithoutProfileInput[]
    upsert?: ReportUpsertWithWhereUniqueWithoutProfileInput | ReportUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: ReportCreateManyProfileInputEnvelope
    set?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    disconnect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    delete?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    update?: ReportUpdateWithWhereUniqueWithoutProfileInput | ReportUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: ReportUpdateManyWithWhereWithoutProfileInput | ReportUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: ReportScalarWhereInput | ReportScalarWhereInput[]
  }

  export type AdvocateProfileUpdateOneWithoutProfileNestedInput = {
    create?: XOR<AdvocateProfileCreateWithoutProfileInput, AdvocateProfileUncheckedCreateWithoutProfileInput>
    connectOrCreate?: AdvocateProfileCreateOrConnectWithoutProfileInput
    upsert?: AdvocateProfileUpsertWithoutProfileInput
    disconnect?: AdvocateProfileWhereInput | boolean
    delete?: AdvocateProfileWhereInput | boolean
    connect?: AdvocateProfileWhereUniqueInput
    update?: XOR<XOR<AdvocateProfileUpdateToOneWithWhereWithoutProfileInput, AdvocateProfileUpdateWithoutProfileInput>, AdvocateProfileUncheckedUpdateWithoutProfileInput>
  }

  export type VkycDocumentUpdateManyWithoutProfileNestedInput = {
    create?: XOR<VkycDocumentCreateWithoutProfileInput, VkycDocumentUncheckedCreateWithoutProfileInput> | VkycDocumentCreateWithoutProfileInput[] | VkycDocumentUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: VkycDocumentCreateOrConnectWithoutProfileInput | VkycDocumentCreateOrConnectWithoutProfileInput[]
    upsert?: VkycDocumentUpsertWithWhereUniqueWithoutProfileInput | VkycDocumentUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: VkycDocumentCreateManyProfileInputEnvelope
    set?: VkycDocumentWhereUniqueInput | VkycDocumentWhereUniqueInput[]
    disconnect?: VkycDocumentWhereUniqueInput | VkycDocumentWhereUniqueInput[]
    delete?: VkycDocumentWhereUniqueInput | VkycDocumentWhereUniqueInput[]
    connect?: VkycDocumentWhereUniqueInput | VkycDocumentWhereUniqueInput[]
    update?: VkycDocumentUpdateWithWhereUniqueWithoutProfileInput | VkycDocumentUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: VkycDocumentUpdateManyWithWhereWithoutProfileInput | VkycDocumentUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: VkycDocumentScalarWhereInput | VkycDocumentScalarWhereInput[]
  }

  export type ReportUncheckedUpdateManyWithoutProfileNestedInput = {
    create?: XOR<ReportCreateWithoutProfileInput, ReportUncheckedCreateWithoutProfileInput> | ReportCreateWithoutProfileInput[] | ReportUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: ReportCreateOrConnectWithoutProfileInput | ReportCreateOrConnectWithoutProfileInput[]
    upsert?: ReportUpsertWithWhereUniqueWithoutProfileInput | ReportUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: ReportCreateManyProfileInputEnvelope
    set?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    disconnect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    delete?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    connect?: ReportWhereUniqueInput | ReportWhereUniqueInput[]
    update?: ReportUpdateWithWhereUniqueWithoutProfileInput | ReportUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: ReportUpdateManyWithWhereWithoutProfileInput | ReportUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: ReportScalarWhereInput | ReportScalarWhereInput[]
  }

  export type AdvocateProfileUncheckedUpdateOneWithoutProfileNestedInput = {
    create?: XOR<AdvocateProfileCreateWithoutProfileInput, AdvocateProfileUncheckedCreateWithoutProfileInput>
    connectOrCreate?: AdvocateProfileCreateOrConnectWithoutProfileInput
    upsert?: AdvocateProfileUpsertWithoutProfileInput
    disconnect?: AdvocateProfileWhereInput | boolean
    delete?: AdvocateProfileWhereInput | boolean
    connect?: AdvocateProfileWhereUniqueInput
    update?: XOR<XOR<AdvocateProfileUpdateToOneWithWhereWithoutProfileInput, AdvocateProfileUpdateWithoutProfileInput>, AdvocateProfileUncheckedUpdateWithoutProfileInput>
  }

  export type VkycDocumentUncheckedUpdateManyWithoutProfileNestedInput = {
    create?: XOR<VkycDocumentCreateWithoutProfileInput, VkycDocumentUncheckedCreateWithoutProfileInput> | VkycDocumentCreateWithoutProfileInput[] | VkycDocumentUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: VkycDocumentCreateOrConnectWithoutProfileInput | VkycDocumentCreateOrConnectWithoutProfileInput[]
    upsert?: VkycDocumentUpsertWithWhereUniqueWithoutProfileInput | VkycDocumentUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: VkycDocumentCreateManyProfileInputEnvelope
    set?: VkycDocumentWhereUniqueInput | VkycDocumentWhereUniqueInput[]
    disconnect?: VkycDocumentWhereUniqueInput | VkycDocumentWhereUniqueInput[]
    delete?: VkycDocumentWhereUniqueInput | VkycDocumentWhereUniqueInput[]
    connect?: VkycDocumentWhereUniqueInput | VkycDocumentWhereUniqueInput[]
    update?: VkycDocumentUpdateWithWhereUniqueWithoutProfileInput | VkycDocumentUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: VkycDocumentUpdateManyWithWhereWithoutProfileInput | VkycDocumentUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: VkycDocumentScalarWhereInput | VkycDocumentScalarWhereInput[]
  }

  export type AdvocateProfileCreatespecializationInput = {
    set: string[]
  }

  export type AdvocateProfileCreatecertificationsInput = {
    set: string[]
  }

  export type AdvocateProfileCreatelanguagesInput = {
    set: string[]
  }

  export type ProfileCreateNestedOneWithoutAdvocateProfileInput = {
    create?: XOR<ProfileCreateWithoutAdvocateProfileInput, ProfileUncheckedCreateWithoutAdvocateProfileInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutAdvocateProfileInput
    connect?: ProfileWhereUniqueInput
  }

  export type AdvocateProfileUpdatespecializationInput = {
    set?: string[]
    push?: string | string[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AdvocateProfileUpdatecertificationsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AdvocateProfileUpdatelanguagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ProfileUpdateOneRequiredWithoutAdvocateProfileNestedInput = {
    create?: XOR<ProfileCreateWithoutAdvocateProfileInput, ProfileUncheckedCreateWithoutAdvocateProfileInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutAdvocateProfileInput
    upsert?: ProfileUpsertWithoutAdvocateProfileInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutAdvocateProfileInput, ProfileUpdateWithoutAdvocateProfileInput>, ProfileUncheckedUpdateWithoutAdvocateProfileInput>
  }

  export type ReportCreatetagsInput = {
    set: string[]
  }

  export type ProfileCreateNestedOneWithoutReportsInput = {
    create?: XOR<ProfileCreateWithoutReportsInput, ProfileUncheckedCreateWithoutReportsInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutReportsInput
    connect?: ProfileWhereUniqueInput
  }

  export type ReportUpdatetagsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ProfileUpdateOneRequiredWithoutReportsNestedInput = {
    create?: XOR<ProfileCreateWithoutReportsInput, ProfileUncheckedCreateWithoutReportsInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutReportsInput
    upsert?: ProfileUpsertWithoutReportsInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutReportsInput, ProfileUpdateWithoutReportsInput>, ProfileUncheckedUpdateWithoutReportsInput>
  }

  export type ProfileCreateNestedOneWithoutVkycDocumentsInput = {
    create?: XOR<ProfileCreateWithoutVkycDocumentsInput, ProfileUncheckedCreateWithoutVkycDocumentsInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutVkycDocumentsInput
    connect?: ProfileWhereUniqueInput
  }

  export type ProfileUpdateOneRequiredWithoutVkycDocumentsNestedInput = {
    create?: XOR<ProfileCreateWithoutVkycDocumentsInput, ProfileUncheckedCreateWithoutVkycDocumentsInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutVkycDocumentsInput
    upsert?: ProfileUpsertWithoutVkycDocumentsInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutVkycDocumentsInput, ProfileUpdateWithoutVkycDocumentsInput>, ProfileUncheckedUpdateWithoutVkycDocumentsInput>
  }

  export type EnumConsultationTypeFieldUpdateOperationsInput = {
    set?: $Enums.ConsultationType
  }

  export type EnumRequestStatusFieldUpdateOperationsInput = {
    set?: $Enums.RequestStatus
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type EnumMessageTypeFieldUpdateOperationsInput = {
    set?: $Enums.MessageType
  }

  export type EnumCallStatusFieldUpdateOperationsInput = {
    set?: $Enums.CallStatus
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedEnumKycTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.KycType | EnumKycTypeFieldRefInput<$PrismaModel>
    in?: $Enums.KycType[] | ListEnumKycTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.KycType[] | ListEnumKycTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumKycTypeFilter<$PrismaModel> | $Enums.KycType
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedEnumKycTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.KycType | EnumKycTypeFieldRefInput<$PrismaModel>
    in?: $Enums.KycType[] | ListEnumKycTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.KycType[] | ListEnumKycTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumKycTypeWithAggregatesFilter<$PrismaModel> | $Enums.KycType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumKycTypeFilter<$PrismaModel>
    _max?: NestedEnumKycTypeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumConsultationTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ConsultationType | EnumConsultationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ConsultationType[] | ListEnumConsultationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConsultationType[] | ListEnumConsultationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumConsultationTypeFilter<$PrismaModel> | $Enums.ConsultationType
  }

  export type NestedEnumRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusFilter<$PrismaModel> | $Enums.RequestStatus
  }

  export type NestedEnumConsultationTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ConsultationType | EnumConsultationTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ConsultationType[] | ListEnumConsultationTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ConsultationType[] | ListEnumConsultationTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumConsultationTypeWithAggregatesFilter<$PrismaModel> | $Enums.ConsultationType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumConsultationTypeFilter<$PrismaModel>
    _max?: NestedEnumConsultationTypeFilter<$PrismaModel>
  }

  export type NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.RequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumRequestStatusFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type NestedEnumMessageTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageType | EnumMessageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageTypeFilter<$PrismaModel> | $Enums.MessageType
  }

  export type NestedEnumMessageTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MessageType | EnumMessageTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MessageType[] | ListEnumMessageTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMessageTypeWithAggregatesFilter<$PrismaModel> | $Enums.MessageType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMessageTypeFilter<$PrismaModel>
    _max?: NestedEnumMessageTypeFilter<$PrismaModel>
  }

  export type NestedEnumCallStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CallStatus | EnumCallStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CallStatus[] | ListEnumCallStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CallStatus[] | ListEnumCallStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCallStatusFilter<$PrismaModel> | $Enums.CallStatus
  }

  export type NestedEnumCallStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CallStatus | EnumCallStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CallStatus[] | ListEnumCallStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CallStatus[] | ListEnumCallStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCallStatusWithAggregatesFilter<$PrismaModel> | $Enums.CallStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCallStatusFilter<$PrismaModel>
    _max?: NestedEnumCallStatusFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type ReportCreateWithoutProfileInput = {
    id?: string
    title: string
    category: string
    description?: string | null
    pdf_url: string
    created_at?: Date | string
    cloudinary_public_id?: string | null
    court?: string | null
    date?: Date | string | null
    tags?: ReportCreatetagsInput | string[]
    updated_at?: Date | string
  }

  export type ReportUncheckedCreateWithoutProfileInput = {
    id?: string
    title: string
    category: string
    description?: string | null
    pdf_url: string
    created_at?: Date | string
    cloudinary_public_id?: string | null
    court?: string | null
    date?: Date | string | null
    tags?: ReportCreatetagsInput | string[]
    updated_at?: Date | string
  }

  export type ReportCreateOrConnectWithoutProfileInput = {
    where: ReportWhereUniqueInput
    create: XOR<ReportCreateWithoutProfileInput, ReportUncheckedCreateWithoutProfileInput>
  }

  export type ReportCreateManyProfileInputEnvelope = {
    data: ReportCreateManyProfileInput | ReportCreateManyProfileInput[]
    skipDuplicates?: boolean
  }

  export type AdvocateProfileCreateWithoutProfileInput = {
    id?: string
    specialization?: AdvocateProfileCreatespecializationInput | string[]
    experience: number
    bio?: string | null
    education?: string | null
    certifications?: AdvocateProfileCreatecertificationsInput | string[]
    hourly_rate: number
    location?: string | null
    languages?: AdvocateProfileCreatelanguagesInput | string[]
    image_url?: string | null
    is_verified?: boolean
    is_available?: boolean
    total_consultations?: number
    total_earnings?: number
    rating?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AdvocateProfileUncheckedCreateWithoutProfileInput = {
    id?: string
    specialization?: AdvocateProfileCreatespecializationInput | string[]
    experience: number
    bio?: string | null
    education?: string | null
    certifications?: AdvocateProfileCreatecertificationsInput | string[]
    hourly_rate: number
    location?: string | null
    languages?: AdvocateProfileCreatelanguagesInput | string[]
    image_url?: string | null
    is_verified?: boolean
    is_available?: boolean
    total_consultations?: number
    total_earnings?: number
    rating?: number
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type AdvocateProfileCreateOrConnectWithoutProfileInput = {
    where: AdvocateProfileWhereUniqueInput
    create: XOR<AdvocateProfileCreateWithoutProfileInput, AdvocateProfileUncheckedCreateWithoutProfileInput>
  }

  export type VkycDocumentCreateWithoutProfileInput = {
    id?: string
    document_type: string
    document_url: string
    kyc_type?: $Enums.KycType
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type VkycDocumentUncheckedCreateWithoutProfileInput = {
    id?: string
    document_type: string
    document_url: string
    kyc_type?: $Enums.KycType
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type VkycDocumentCreateOrConnectWithoutProfileInput = {
    where: VkycDocumentWhereUniqueInput
    create: XOR<VkycDocumentCreateWithoutProfileInput, VkycDocumentUncheckedCreateWithoutProfileInput>
  }

  export type VkycDocumentCreateManyProfileInputEnvelope = {
    data: VkycDocumentCreateManyProfileInput | VkycDocumentCreateManyProfileInput[]
    skipDuplicates?: boolean
  }

  export type ReportUpsertWithWhereUniqueWithoutProfileInput = {
    where: ReportWhereUniqueInput
    update: XOR<ReportUpdateWithoutProfileInput, ReportUncheckedUpdateWithoutProfileInput>
    create: XOR<ReportCreateWithoutProfileInput, ReportUncheckedCreateWithoutProfileInput>
  }

  export type ReportUpdateWithWhereUniqueWithoutProfileInput = {
    where: ReportWhereUniqueInput
    data: XOR<ReportUpdateWithoutProfileInput, ReportUncheckedUpdateWithoutProfileInput>
  }

  export type ReportUpdateManyWithWhereWithoutProfileInput = {
    where: ReportScalarWhereInput
    data: XOR<ReportUpdateManyMutationInput, ReportUncheckedUpdateManyWithoutProfileInput>
  }

  export type ReportScalarWhereInput = {
    AND?: ReportScalarWhereInput | ReportScalarWhereInput[]
    OR?: ReportScalarWhereInput[]
    NOT?: ReportScalarWhereInput | ReportScalarWhereInput[]
    id?: StringFilter<"Report"> | string
    user_id?: StringFilter<"Report"> | string
    title?: StringFilter<"Report"> | string
    category?: StringFilter<"Report"> | string
    description?: StringNullableFilter<"Report"> | string | null
    pdf_url?: StringFilter<"Report"> | string
    created_at?: DateTimeFilter<"Report"> | Date | string
    cloudinary_public_id?: StringNullableFilter<"Report"> | string | null
    court?: StringNullableFilter<"Report"> | string | null
    date?: DateTimeNullableFilter<"Report"> | Date | string | null
    tags?: StringNullableListFilter<"Report">
    updated_at?: DateTimeFilter<"Report"> | Date | string
  }

  export type AdvocateProfileUpsertWithoutProfileInput = {
    update: XOR<AdvocateProfileUpdateWithoutProfileInput, AdvocateProfileUncheckedUpdateWithoutProfileInput>
    create: XOR<AdvocateProfileCreateWithoutProfileInput, AdvocateProfileUncheckedCreateWithoutProfileInput>
    where?: AdvocateProfileWhereInput
  }

  export type AdvocateProfileUpdateToOneWithWhereWithoutProfileInput = {
    where?: AdvocateProfileWhereInput
    data: XOR<AdvocateProfileUpdateWithoutProfileInput, AdvocateProfileUncheckedUpdateWithoutProfileInput>
  }

  export type AdvocateProfileUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    specialization?: AdvocateProfileUpdatespecializationInput | string[]
    experience?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    certifications?: AdvocateProfileUpdatecertificationsInput | string[]
    hourly_rate?: FloatFieldUpdateOperationsInput | number
    location?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: AdvocateProfileUpdatelanguagesInput | string[]
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    is_available?: BoolFieldUpdateOperationsInput | boolean
    total_consultations?: IntFieldUpdateOperationsInput | number
    total_earnings?: FloatFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdvocateProfileUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    specialization?: AdvocateProfileUpdatespecializationInput | string[]
    experience?: IntFieldUpdateOperationsInput | number
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    certifications?: AdvocateProfileUpdatecertificationsInput | string[]
    hourly_rate?: FloatFieldUpdateOperationsInput | number
    location?: NullableStringFieldUpdateOperationsInput | string | null
    languages?: AdvocateProfileUpdatelanguagesInput | string[]
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: BoolFieldUpdateOperationsInput | boolean
    is_available?: BoolFieldUpdateOperationsInput | boolean
    total_consultations?: IntFieldUpdateOperationsInput | number
    total_earnings?: FloatFieldUpdateOperationsInput | number
    rating?: FloatFieldUpdateOperationsInput | number
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VkycDocumentUpsertWithWhereUniqueWithoutProfileInput = {
    where: VkycDocumentWhereUniqueInput
    update: XOR<VkycDocumentUpdateWithoutProfileInput, VkycDocumentUncheckedUpdateWithoutProfileInput>
    create: XOR<VkycDocumentCreateWithoutProfileInput, VkycDocumentUncheckedCreateWithoutProfileInput>
  }

  export type VkycDocumentUpdateWithWhereUniqueWithoutProfileInput = {
    where: VkycDocumentWhereUniqueInput
    data: XOR<VkycDocumentUpdateWithoutProfileInput, VkycDocumentUncheckedUpdateWithoutProfileInput>
  }

  export type VkycDocumentUpdateManyWithWhereWithoutProfileInput = {
    where: VkycDocumentScalarWhereInput
    data: XOR<VkycDocumentUpdateManyMutationInput, VkycDocumentUncheckedUpdateManyWithoutProfileInput>
  }

  export type VkycDocumentScalarWhereInput = {
    AND?: VkycDocumentScalarWhereInput | VkycDocumentScalarWhereInput[]
    OR?: VkycDocumentScalarWhereInput[]
    NOT?: VkycDocumentScalarWhereInput | VkycDocumentScalarWhereInput[]
    id?: StringFilter<"VkycDocument"> | string
    user_id?: StringFilter<"VkycDocument"> | string
    document_type?: StringFilter<"VkycDocument"> | string
    document_url?: StringFilter<"VkycDocument"> | string
    kyc_type?: EnumKycTypeFilter<"VkycDocument"> | $Enums.KycType
    created_at?: DateTimeFilter<"VkycDocument"> | Date | string
    updated_at?: DateTimeFilter<"VkycDocument"> | Date | string
  }

  export type ProfileCreateWithoutAdvocateProfileInput = {
    id?: string
    address?: string | null
    created_at?: Date | string
    email?: string | null
    password?: string | null
    first_name?: string | null
    last_name?: string | null
    phone?: string | null
    role?: $Enums.UserRole
    kyc_type?: $Enums.KycType
    updated_at?: Date | string
    vkyc_completed?: boolean
    vkyc_completed_at?: Date | string | null
    can_upload_reports?: boolean
    reports?: ReportCreateNestedManyWithoutProfileInput
    vkycDocuments?: VkycDocumentCreateNestedManyWithoutProfileInput
  }

  export type ProfileUncheckedCreateWithoutAdvocateProfileInput = {
    id?: string
    address?: string | null
    created_at?: Date | string
    email?: string | null
    password?: string | null
    first_name?: string | null
    last_name?: string | null
    phone?: string | null
    role?: $Enums.UserRole
    kyc_type?: $Enums.KycType
    updated_at?: Date | string
    vkyc_completed?: boolean
    vkyc_completed_at?: Date | string | null
    can_upload_reports?: boolean
    reports?: ReportUncheckedCreateNestedManyWithoutProfileInput
    vkycDocuments?: VkycDocumentUncheckedCreateNestedManyWithoutProfileInput
  }

  export type ProfileCreateOrConnectWithoutAdvocateProfileInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutAdvocateProfileInput, ProfileUncheckedCreateWithoutAdvocateProfileInput>
  }

  export type ProfileUpsertWithoutAdvocateProfileInput = {
    update: XOR<ProfileUpdateWithoutAdvocateProfileInput, ProfileUncheckedUpdateWithoutAdvocateProfileInput>
    create: XOR<ProfileCreateWithoutAdvocateProfileInput, ProfileUncheckedCreateWithoutAdvocateProfileInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutAdvocateProfileInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutAdvocateProfileInput, ProfileUncheckedUpdateWithoutAdvocateProfileInput>
  }

  export type ProfileUpdateWithoutAdvocateProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    kyc_type?: EnumKycTypeFieldUpdateOperationsInput | $Enums.KycType
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    vkyc_completed?: BoolFieldUpdateOperationsInput | boolean
    vkyc_completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    can_upload_reports?: BoolFieldUpdateOperationsInput | boolean
    reports?: ReportUpdateManyWithoutProfileNestedInput
    vkycDocuments?: VkycDocumentUpdateManyWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateWithoutAdvocateProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    kyc_type?: EnumKycTypeFieldUpdateOperationsInput | $Enums.KycType
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    vkyc_completed?: BoolFieldUpdateOperationsInput | boolean
    vkyc_completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    can_upload_reports?: BoolFieldUpdateOperationsInput | boolean
    reports?: ReportUncheckedUpdateManyWithoutProfileNestedInput
    vkycDocuments?: VkycDocumentUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type ProfileCreateWithoutReportsInput = {
    id?: string
    address?: string | null
    created_at?: Date | string
    email?: string | null
    password?: string | null
    first_name?: string | null
    last_name?: string | null
    phone?: string | null
    role?: $Enums.UserRole
    kyc_type?: $Enums.KycType
    updated_at?: Date | string
    vkyc_completed?: boolean
    vkyc_completed_at?: Date | string | null
    can_upload_reports?: boolean
    advocateProfile?: AdvocateProfileCreateNestedOneWithoutProfileInput
    vkycDocuments?: VkycDocumentCreateNestedManyWithoutProfileInput
  }

  export type ProfileUncheckedCreateWithoutReportsInput = {
    id?: string
    address?: string | null
    created_at?: Date | string
    email?: string | null
    password?: string | null
    first_name?: string | null
    last_name?: string | null
    phone?: string | null
    role?: $Enums.UserRole
    kyc_type?: $Enums.KycType
    updated_at?: Date | string
    vkyc_completed?: boolean
    vkyc_completed_at?: Date | string | null
    can_upload_reports?: boolean
    advocateProfile?: AdvocateProfileUncheckedCreateNestedOneWithoutProfileInput
    vkycDocuments?: VkycDocumentUncheckedCreateNestedManyWithoutProfileInput
  }

  export type ProfileCreateOrConnectWithoutReportsInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutReportsInput, ProfileUncheckedCreateWithoutReportsInput>
  }

  export type ProfileUpsertWithoutReportsInput = {
    update: XOR<ProfileUpdateWithoutReportsInput, ProfileUncheckedUpdateWithoutReportsInput>
    create: XOR<ProfileCreateWithoutReportsInput, ProfileUncheckedCreateWithoutReportsInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutReportsInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutReportsInput, ProfileUncheckedUpdateWithoutReportsInput>
  }

  export type ProfileUpdateWithoutReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    kyc_type?: EnumKycTypeFieldUpdateOperationsInput | $Enums.KycType
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    vkyc_completed?: BoolFieldUpdateOperationsInput | boolean
    vkyc_completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    can_upload_reports?: BoolFieldUpdateOperationsInput | boolean
    advocateProfile?: AdvocateProfileUpdateOneWithoutProfileNestedInput
    vkycDocuments?: VkycDocumentUpdateManyWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateWithoutReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    kyc_type?: EnumKycTypeFieldUpdateOperationsInput | $Enums.KycType
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    vkyc_completed?: BoolFieldUpdateOperationsInput | boolean
    vkyc_completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    can_upload_reports?: BoolFieldUpdateOperationsInput | boolean
    advocateProfile?: AdvocateProfileUncheckedUpdateOneWithoutProfileNestedInput
    vkycDocuments?: VkycDocumentUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type ProfileCreateWithoutVkycDocumentsInput = {
    id?: string
    address?: string | null
    created_at?: Date | string
    email?: string | null
    password?: string | null
    first_name?: string | null
    last_name?: string | null
    phone?: string | null
    role?: $Enums.UserRole
    kyc_type?: $Enums.KycType
    updated_at?: Date | string
    vkyc_completed?: boolean
    vkyc_completed_at?: Date | string | null
    can_upload_reports?: boolean
    reports?: ReportCreateNestedManyWithoutProfileInput
    advocateProfile?: AdvocateProfileCreateNestedOneWithoutProfileInput
  }

  export type ProfileUncheckedCreateWithoutVkycDocumentsInput = {
    id?: string
    address?: string | null
    created_at?: Date | string
    email?: string | null
    password?: string | null
    first_name?: string | null
    last_name?: string | null
    phone?: string | null
    role?: $Enums.UserRole
    kyc_type?: $Enums.KycType
    updated_at?: Date | string
    vkyc_completed?: boolean
    vkyc_completed_at?: Date | string | null
    can_upload_reports?: boolean
    reports?: ReportUncheckedCreateNestedManyWithoutProfileInput
    advocateProfile?: AdvocateProfileUncheckedCreateNestedOneWithoutProfileInput
  }

  export type ProfileCreateOrConnectWithoutVkycDocumentsInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutVkycDocumentsInput, ProfileUncheckedCreateWithoutVkycDocumentsInput>
  }

  export type ProfileUpsertWithoutVkycDocumentsInput = {
    update: XOR<ProfileUpdateWithoutVkycDocumentsInput, ProfileUncheckedUpdateWithoutVkycDocumentsInput>
    create: XOR<ProfileCreateWithoutVkycDocumentsInput, ProfileUncheckedCreateWithoutVkycDocumentsInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutVkycDocumentsInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutVkycDocumentsInput, ProfileUncheckedUpdateWithoutVkycDocumentsInput>
  }

  export type ProfileUpdateWithoutVkycDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    kyc_type?: EnumKycTypeFieldUpdateOperationsInput | $Enums.KycType
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    vkyc_completed?: BoolFieldUpdateOperationsInput | boolean
    vkyc_completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    can_upload_reports?: BoolFieldUpdateOperationsInput | boolean
    reports?: ReportUpdateManyWithoutProfileNestedInput
    advocateProfile?: AdvocateProfileUpdateOneWithoutProfileNestedInput
  }

  export type ProfileUncheckedUpdateWithoutVkycDocumentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    kyc_type?: EnumKycTypeFieldUpdateOperationsInput | $Enums.KycType
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    vkyc_completed?: BoolFieldUpdateOperationsInput | boolean
    vkyc_completed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    can_upload_reports?: BoolFieldUpdateOperationsInput | boolean
    reports?: ReportUncheckedUpdateManyWithoutProfileNestedInput
    advocateProfile?: AdvocateProfileUncheckedUpdateOneWithoutProfileNestedInput
  }

  export type ReportCreateManyProfileInput = {
    id?: string
    title: string
    category: string
    description?: string | null
    pdf_url: string
    created_at?: Date | string
    cloudinary_public_id?: string | null
    court?: string | null
    date?: Date | string | null
    tags?: ReportCreatetagsInput | string[]
    updated_at?: Date | string
  }

  export type VkycDocumentCreateManyProfileInput = {
    id?: string
    document_type: string
    document_url: string
    kyc_type?: $Enums.KycType
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type ReportUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    pdf_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cloudinary_public_id?: NullableStringFieldUpdateOperationsInput | string | null
    court?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tags?: ReportUpdatetagsInput | string[]
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    pdf_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cloudinary_public_id?: NullableStringFieldUpdateOperationsInput | string | null
    court?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tags?: ReportUpdatetagsInput | string[]
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReportUncheckedUpdateManyWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    pdf_url?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    cloudinary_public_id?: NullableStringFieldUpdateOperationsInput | string | null
    court?: NullableStringFieldUpdateOperationsInput | string | null
    date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tags?: ReportUpdatetagsInput | string[]
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VkycDocumentUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    document_type?: StringFieldUpdateOperationsInput | string
    document_url?: StringFieldUpdateOperationsInput | string
    kyc_type?: EnumKycTypeFieldUpdateOperationsInput | $Enums.KycType
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VkycDocumentUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    document_type?: StringFieldUpdateOperationsInput | string
    document_url?: StringFieldUpdateOperationsInput | string
    kyc_type?: EnumKycTypeFieldUpdateOperationsInput | $Enums.KycType
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VkycDocumentUncheckedUpdateManyWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    document_type?: StringFieldUpdateOperationsInput | string
    document_url?: StringFieldUpdateOperationsInput | string
    kyc_type?: EnumKycTypeFieldUpdateOperationsInput | $Enums.KycType
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}