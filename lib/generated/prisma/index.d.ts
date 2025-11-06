
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Subscription
 * 
 */
export type Subscription = $Result.DefaultSelection<Prisma.$SubscriptionPayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model TelegramLinkToken
 * 
 */
export type TelegramLinkToken = $Result.DefaultSelection<Prisma.$TelegramLinkTokenPayload>
/**
 * Model Ticket
 * 
 */
export type Ticket = $Result.DefaultSelection<Prisma.$TicketPayload>
/**
 * Model TicketMessage
 * 
 */
export type TicketMessage = $Result.DefaultSelection<Prisma.$TicketMessagePayload>
/**
 * Model Prediction
 * 
 */
export type Prediction = $Result.DefaultSelection<Prisma.$PredictionPayload>
/**
 * Model Affiliate
 * 
 */
export type Affiliate = $Result.DefaultSelection<Prisma.$AffiliatePayload>
/**
 * Model ReferralClick
 * 
 */
export type ReferralClick = $Result.DefaultSelection<Prisma.$ReferralClickPayload>
/**
 * Model Commission
 * 
 */
export type Commission = $Result.DefaultSelection<Prisma.$CommissionPayload>
/**
 * Model Payout
 * 
 */
export type Payout = $Result.DefaultSelection<Prisma.$PayoutPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  USER: 'USER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const TicketStatus: {
  OPEN: 'OPEN',
  IN_PROGRESS: 'IN_PROGRESS',
  RESOLVED: 'RESOLVED',
  CLOSED: 'CLOSED'
};

export type TicketStatus = (typeof TicketStatus)[keyof typeof TicketStatus]


export const TicketPriority: {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH'
};

export type TicketPriority = (typeof TicketPriority)[keyof typeof TicketPriority]


export const TicketCategory: {
  BILLING: 'BILLING',
  SUBSCRIPTION: 'SUBSCRIPTION',
  TECHNICAL: 'TECHNICAL',
  ACCOUNT: 'ACCOUNT',
  OTHER: 'OTHER'
};

export type TicketCategory = (typeof TicketCategory)[keyof typeof TicketCategory]


export const SubscriptionStatus: {
  ACTIVE: 'ACTIVE',
  PAST_DUE: 'PAST_DUE',
  CANCELED: 'CANCELED',
  PAUSED: 'PAUSED',
  TRIALING: 'TRIALING',
  EXPIRED: 'EXPIRED'
};

export type SubscriptionStatus = (typeof SubscriptionStatus)[keyof typeof SubscriptionStatus]


export const CommissionStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  PAID: 'PAID',
  REVERSED: 'REVERSED'
};

export type CommissionStatus = (typeof CommissionStatus)[keyof typeof CommissionStatus]


export const PayoutStatus: {
  DRAFT: 'DRAFT',
  PROCESSING: 'PROCESSING',
  PAID: 'PAID',
  FAILED: 'FAILED'
};

export type PayoutStatus = (typeof PayoutStatus)[keyof typeof PayoutStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type TicketStatus = $Enums.TicketStatus

export const TicketStatus: typeof $Enums.TicketStatus

export type TicketPriority = $Enums.TicketPriority

export const TicketPriority: typeof $Enums.TicketPriority

export type TicketCategory = $Enums.TicketCategory

export const TicketCategory: typeof $Enums.TicketCategory

export type SubscriptionStatus = $Enums.SubscriptionStatus

export const SubscriptionStatus: typeof $Enums.SubscriptionStatus

export type CommissionStatus = $Enums.CommissionStatus

export const CommissionStatus: typeof $Enums.CommissionStatus

export type PayoutStatus = $Enums.PayoutStatus

export const PayoutStatus: typeof $Enums.PayoutStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subscription`: Exposes CRUD operations for the **Subscription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subscriptions
    * const subscriptions = await prisma.subscription.findMany()
    * ```
    */
  get subscription(): Prisma.SubscriptionDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.telegramLinkToken`: Exposes CRUD operations for the **TelegramLinkToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TelegramLinkTokens
    * const telegramLinkTokens = await prisma.telegramLinkToken.findMany()
    * ```
    */
  get telegramLinkToken(): Prisma.TelegramLinkTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ticket`: Exposes CRUD operations for the **Ticket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tickets
    * const tickets = await prisma.ticket.findMany()
    * ```
    */
  get ticket(): Prisma.TicketDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ticketMessage`: Exposes CRUD operations for the **TicketMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TicketMessages
    * const ticketMessages = await prisma.ticketMessage.findMany()
    * ```
    */
  get ticketMessage(): Prisma.TicketMessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.prediction`: Exposes CRUD operations for the **Prediction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Predictions
    * const predictions = await prisma.prediction.findMany()
    * ```
    */
  get prediction(): Prisma.PredictionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.affiliate`: Exposes CRUD operations for the **Affiliate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Affiliates
    * const affiliates = await prisma.affiliate.findMany()
    * ```
    */
  get affiliate(): Prisma.AffiliateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.referralClick`: Exposes CRUD operations for the **ReferralClick** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReferralClicks
    * const referralClicks = await prisma.referralClick.findMany()
    * ```
    */
  get referralClick(): Prisma.ReferralClickDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.commission`: Exposes CRUD operations for the **Commission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Commissions
    * const commissions = await prisma.commission.findMany()
    * ```
    */
  get commission(): Prisma.CommissionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payout`: Exposes CRUD operations for the **Payout** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payouts
    * const payouts = await prisma.payout.findMany()
    * ```
    */
  get payout(): Prisma.PayoutDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.10.1
   * Query Engine version: 9b628578b3b7cae625e8c927178f15a170e74a9c
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
    User: 'User',
    Subscription: 'Subscription',
    Payment: 'Payment',
    TelegramLinkToken: 'TelegramLinkToken',
    Ticket: 'Ticket',
    TicketMessage: 'TicketMessage',
    Prediction: 'Prediction',
    Affiliate: 'Affiliate',
    ReferralClick: 'ReferralClick',
    Commission: 'Commission',
    Payout: 'Payout'
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
      modelProps: "user" | "subscription" | "payment" | "telegramLinkToken" | "ticket" | "ticketMessage" | "prediction" | "affiliate" | "referralClick" | "commission" | "payout"
      txIsolationLevel: never
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Subscription: {
        payload: Prisma.$SubscriptionPayload<ExtArgs>
        fields: Prisma.SubscriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubscriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubscriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findFirst: {
            args: Prisma.SubscriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubscriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          findMany: {
            args: Prisma.SubscriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>[]
          }
          create: {
            args: Prisma.SubscriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          createMany: {
            args: Prisma.SubscriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.SubscriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          update: {
            args: Prisma.SubscriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          deleteMany: {
            args: Prisma.SubscriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubscriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SubscriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubscriptionPayload>
          }
          aggregate: {
            args: Prisma.SubscriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubscription>
          }
          groupBy: {
            args: Prisma.SubscriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.SubscriptionFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.SubscriptionAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.SubscriptionCountArgs<ExtArgs>
            result: $Utils.Optional<SubscriptionCountAggregateOutputType> | number
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
          findRaw: {
            args: Prisma.PaymentFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.PaymentAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      TelegramLinkToken: {
        payload: Prisma.$TelegramLinkTokenPayload<ExtArgs>
        fields: Prisma.TelegramLinkTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TelegramLinkTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramLinkTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TelegramLinkTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramLinkTokenPayload>
          }
          findFirst: {
            args: Prisma.TelegramLinkTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramLinkTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TelegramLinkTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramLinkTokenPayload>
          }
          findMany: {
            args: Prisma.TelegramLinkTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramLinkTokenPayload>[]
          }
          create: {
            args: Prisma.TelegramLinkTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramLinkTokenPayload>
          }
          createMany: {
            args: Prisma.TelegramLinkTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TelegramLinkTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramLinkTokenPayload>
          }
          update: {
            args: Prisma.TelegramLinkTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramLinkTokenPayload>
          }
          deleteMany: {
            args: Prisma.TelegramLinkTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TelegramLinkTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TelegramLinkTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelegramLinkTokenPayload>
          }
          aggregate: {
            args: Prisma.TelegramLinkTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTelegramLinkToken>
          }
          groupBy: {
            args: Prisma.TelegramLinkTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<TelegramLinkTokenGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.TelegramLinkTokenFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.TelegramLinkTokenAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.TelegramLinkTokenCountArgs<ExtArgs>
            result: $Utils.Optional<TelegramLinkTokenCountAggregateOutputType> | number
          }
        }
      }
      Ticket: {
        payload: Prisma.$TicketPayload<ExtArgs>
        fields: Prisma.TicketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TicketFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TicketFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          findFirst: {
            args: Prisma.TicketFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TicketFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          findMany: {
            args: Prisma.TicketFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          create: {
            args: Prisma.TicketCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          createMany: {
            args: Prisma.TicketCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TicketDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          update: {
            args: Prisma.TicketUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          deleteMany: {
            args: Prisma.TicketDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TicketUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TicketUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          aggregate: {
            args: Prisma.TicketAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicket>
          }
          groupBy: {
            args: Prisma.TicketGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.TicketFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.TicketAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.TicketCountArgs<ExtArgs>
            result: $Utils.Optional<TicketCountAggregateOutputType> | number
          }
        }
      }
      TicketMessage: {
        payload: Prisma.$TicketMessagePayload<ExtArgs>
        fields: Prisma.TicketMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TicketMessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TicketMessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketMessagePayload>
          }
          findFirst: {
            args: Prisma.TicketMessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TicketMessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketMessagePayload>
          }
          findMany: {
            args: Prisma.TicketMessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketMessagePayload>[]
          }
          create: {
            args: Prisma.TicketMessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketMessagePayload>
          }
          createMany: {
            args: Prisma.TicketMessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TicketMessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketMessagePayload>
          }
          update: {
            args: Prisma.TicketMessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketMessagePayload>
          }
          deleteMany: {
            args: Prisma.TicketMessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TicketMessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TicketMessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketMessagePayload>
          }
          aggregate: {
            args: Prisma.TicketMessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicketMessage>
          }
          groupBy: {
            args: Prisma.TicketMessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketMessageGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.TicketMessageFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.TicketMessageAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.TicketMessageCountArgs<ExtArgs>
            result: $Utils.Optional<TicketMessageCountAggregateOutputType> | number
          }
        }
      }
      Prediction: {
        payload: Prisma.$PredictionPayload<ExtArgs>
        fields: Prisma.PredictionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PredictionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredictionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PredictionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredictionPayload>
          }
          findFirst: {
            args: Prisma.PredictionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredictionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PredictionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredictionPayload>
          }
          findMany: {
            args: Prisma.PredictionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredictionPayload>[]
          }
          create: {
            args: Prisma.PredictionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredictionPayload>
          }
          createMany: {
            args: Prisma.PredictionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PredictionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredictionPayload>
          }
          update: {
            args: Prisma.PredictionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredictionPayload>
          }
          deleteMany: {
            args: Prisma.PredictionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PredictionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PredictionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PredictionPayload>
          }
          aggregate: {
            args: Prisma.PredictionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePrediction>
          }
          groupBy: {
            args: Prisma.PredictionGroupByArgs<ExtArgs>
            result: $Utils.Optional<PredictionGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.PredictionFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.PredictionAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.PredictionCountArgs<ExtArgs>
            result: $Utils.Optional<PredictionCountAggregateOutputType> | number
          }
        }
      }
      Affiliate: {
        payload: Prisma.$AffiliatePayload<ExtArgs>
        fields: Prisma.AffiliateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AffiliateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AffiliatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AffiliateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AffiliatePayload>
          }
          findFirst: {
            args: Prisma.AffiliateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AffiliatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AffiliateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AffiliatePayload>
          }
          findMany: {
            args: Prisma.AffiliateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AffiliatePayload>[]
          }
          create: {
            args: Prisma.AffiliateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AffiliatePayload>
          }
          createMany: {
            args: Prisma.AffiliateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AffiliateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AffiliatePayload>
          }
          update: {
            args: Prisma.AffiliateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AffiliatePayload>
          }
          deleteMany: {
            args: Prisma.AffiliateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AffiliateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AffiliateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AffiliatePayload>
          }
          aggregate: {
            args: Prisma.AffiliateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAffiliate>
          }
          groupBy: {
            args: Prisma.AffiliateGroupByArgs<ExtArgs>
            result: $Utils.Optional<AffiliateGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.AffiliateFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.AffiliateAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.AffiliateCountArgs<ExtArgs>
            result: $Utils.Optional<AffiliateCountAggregateOutputType> | number
          }
        }
      }
      ReferralClick: {
        payload: Prisma.$ReferralClickPayload<ExtArgs>
        fields: Prisma.ReferralClickFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReferralClickFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralClickPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReferralClickFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralClickPayload>
          }
          findFirst: {
            args: Prisma.ReferralClickFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralClickPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReferralClickFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralClickPayload>
          }
          findMany: {
            args: Prisma.ReferralClickFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralClickPayload>[]
          }
          create: {
            args: Prisma.ReferralClickCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralClickPayload>
          }
          createMany: {
            args: Prisma.ReferralClickCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ReferralClickDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralClickPayload>
          }
          update: {
            args: Prisma.ReferralClickUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralClickPayload>
          }
          deleteMany: {
            args: Prisma.ReferralClickDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReferralClickUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReferralClickUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferralClickPayload>
          }
          aggregate: {
            args: Prisma.ReferralClickAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReferralClick>
          }
          groupBy: {
            args: Prisma.ReferralClickGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReferralClickGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ReferralClickFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ReferralClickAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ReferralClickCountArgs<ExtArgs>
            result: $Utils.Optional<ReferralClickCountAggregateOutputType> | number
          }
        }
      }
      Commission: {
        payload: Prisma.$CommissionPayload<ExtArgs>
        fields: Prisma.CommissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommissionPayload>
          }
          findFirst: {
            args: Prisma.CommissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommissionPayload>
          }
          findMany: {
            args: Prisma.CommissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommissionPayload>[]
          }
          create: {
            args: Prisma.CommissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommissionPayload>
          }
          createMany: {
            args: Prisma.CommissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.CommissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommissionPayload>
          }
          update: {
            args: Prisma.CommissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommissionPayload>
          }
          deleteMany: {
            args: Prisma.CommissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CommissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommissionPayload>
          }
          aggregate: {
            args: Prisma.CommissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCommission>
          }
          groupBy: {
            args: Prisma.CommissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommissionGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.CommissionFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.CommissionAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.CommissionCountArgs<ExtArgs>
            result: $Utils.Optional<CommissionCountAggregateOutputType> | number
          }
        }
      }
      Payout: {
        payload: Prisma.$PayoutPayload<ExtArgs>
        fields: Prisma.PayoutFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PayoutFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayoutPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PayoutFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayoutPayload>
          }
          findFirst: {
            args: Prisma.PayoutFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayoutPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PayoutFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayoutPayload>
          }
          findMany: {
            args: Prisma.PayoutFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayoutPayload>[]
          }
          create: {
            args: Prisma.PayoutCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayoutPayload>
          }
          createMany: {
            args: Prisma.PayoutCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.PayoutDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayoutPayload>
          }
          update: {
            args: Prisma.PayoutUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayoutPayload>
          }
          deleteMany: {
            args: Prisma.PayoutDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PayoutUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PayoutUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PayoutPayload>
          }
          aggregate: {
            args: Prisma.PayoutAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayout>
          }
          groupBy: {
            args: Prisma.PayoutGroupByArgs<ExtArgs>
            result: $Utils.Optional<PayoutGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.PayoutFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.PayoutAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.PayoutCountArgs<ExtArgs>
            result: $Utils.Optional<PayoutCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
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
    user?: UserOmit
    subscription?: SubscriptionOmit
    payment?: PaymentOmit
    telegramLinkToken?: TelegramLinkTokenOmit
    ticket?: TicketOmit
    ticketMessage?: TicketMessageOmit
    prediction?: PredictionOmit
    affiliate?: AffiliateOmit
    referralClick?: ReferralClickOmit
    commission?: CommissionOmit
    payout?: PayoutOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    payments: number
    telegramLinkTokens: number
    subscriptions: number
    Ticket: number
    Commission: number
    Affiliate: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payments?: boolean | UserCountOutputTypeCountPaymentsArgs
    telegramLinkTokens?: boolean | UserCountOutputTypeCountTelegramLinkTokensArgs
    subscriptions?: boolean | UserCountOutputTypeCountSubscriptionsArgs
    Ticket?: boolean | UserCountOutputTypeCountTicketArgs
    Commission?: boolean | UserCountOutputTypeCountCommissionArgs
    Affiliate?: boolean | UserCountOutputTypeCountAffiliateArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTelegramLinkTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TelegramLinkTokenWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSubscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTicketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommissionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAffiliateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AffiliateWhereInput
  }


  /**
   * Count Type SubscriptionCountOutputType
   */

  export type SubscriptionCountOutputType = {
    Commission: number
  }

  export type SubscriptionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Commission?: boolean | SubscriptionCountOutputTypeCountCommissionArgs
  }

  // Custom InputTypes
  /**
   * SubscriptionCountOutputType without action
   */
  export type SubscriptionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubscriptionCountOutputType
     */
    select?: SubscriptionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubscriptionCountOutputType without action
   */
  export type SubscriptionCountOutputTypeCountCommissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommissionWhereInput
  }


  /**
   * Count Type PaymentCountOutputType
   */

  export type PaymentCountOutputType = {
    Commission: number
  }

  export type PaymentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Commission?: boolean | PaymentCountOutputTypeCountCommissionArgs
  }

  // Custom InputTypes
  /**
   * PaymentCountOutputType without action
   */
  export type PaymentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentCountOutputType
     */
    select?: PaymentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PaymentCountOutputType without action
   */
  export type PaymentCountOutputTypeCountCommissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommissionWhereInput
  }


  /**
   * Count Type TicketCountOutputType
   */

  export type TicketCountOutputType = {
    messages: number
  }

  export type TicketCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | TicketCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes
  /**
   * TicketCountOutputType without action
   */
  export type TicketCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketCountOutputType
     */
    select?: TicketCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TicketCountOutputType without action
   */
  export type TicketCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketMessageWhereInput
  }


  /**
   * Count Type AffiliateCountOutputType
   */

  export type AffiliateCountOutputType = {
    referralClicks: number
    commissions: number
    payouts: number
  }

  export type AffiliateCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    referralClicks?: boolean | AffiliateCountOutputTypeCountReferralClicksArgs
    commissions?: boolean | AffiliateCountOutputTypeCountCommissionsArgs
    payouts?: boolean | AffiliateCountOutputTypeCountPayoutsArgs
  }

  // Custom InputTypes
  /**
   * AffiliateCountOutputType without action
   */
  export type AffiliateCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AffiliateCountOutputType
     */
    select?: AffiliateCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AffiliateCountOutputType without action
   */
  export type AffiliateCountOutputTypeCountReferralClicksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReferralClickWhereInput
  }

  /**
   * AffiliateCountOutputType without action
   */
  export type AffiliateCountOutputTypeCountCommissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommissionWhereInput
  }

  /**
   * AffiliateCountOutputType without action
   */
  export type AffiliateCountOutputTypeCountPayoutsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PayoutWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    clerkUserId: string | null
    email: string | null
    password: string | null
    username: string | null
    avatar: string | null
    role: $Enums.Role | null
    isSubscribed: boolean | null
    paddleCustomerId: string | null
    paddleEmail: string | null
    paystackCustomerCode: string | null
    paystackAuthCode: string | null
    referredByAffiliateId: string | null
    firstPaidAt: Date | null
    telegramChatId: string | null
    telegramUsername: string | null
    telegramLinkedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    clerkUserId: string | null
    email: string | null
    password: string | null
    username: string | null
    avatar: string | null
    role: $Enums.Role | null
    isSubscribed: boolean | null
    paddleCustomerId: string | null
    paddleEmail: string | null
    paystackCustomerCode: string | null
    paystackAuthCode: string | null
    referredByAffiliateId: string | null
    firstPaidAt: Date | null
    telegramChatId: string | null
    telegramUsername: string | null
    telegramLinkedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    clerkUserId: number
    email: number
    password: number
    username: number
    avatar: number
    role: number
    isSubscribed: number
    paddleCustomerId: number
    paddleEmail: number
    paystackCustomerCode: number
    paystackAuthCode: number
    referredByAffiliateId: number
    firstPaidAt: number
    telegramChatId: number
    telegramUsername: number
    telegramLinkedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    clerkUserId?: true
    email?: true
    password?: true
    username?: true
    avatar?: true
    role?: true
    isSubscribed?: true
    paddleCustomerId?: true
    paddleEmail?: true
    paystackCustomerCode?: true
    paystackAuthCode?: true
    referredByAffiliateId?: true
    firstPaidAt?: true
    telegramChatId?: true
    telegramUsername?: true
    telegramLinkedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    clerkUserId?: true
    email?: true
    password?: true
    username?: true
    avatar?: true
    role?: true
    isSubscribed?: true
    paddleCustomerId?: true
    paddleEmail?: true
    paystackCustomerCode?: true
    paystackAuthCode?: true
    referredByAffiliateId?: true
    firstPaidAt?: true
    telegramChatId?: true
    telegramUsername?: true
    telegramLinkedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    clerkUserId?: true
    email?: true
    password?: true
    username?: true
    avatar?: true
    role?: true
    isSubscribed?: true
    paddleCustomerId?: true
    paddleEmail?: true
    paystackCustomerCode?: true
    paystackAuthCode?: true
    referredByAffiliateId?: true
    firstPaidAt?: true
    telegramChatId?: true
    telegramUsername?: true
    telegramLinkedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    clerkUserId: string
    email: string
    password: string | null
    username: string | null
    avatar: string | null
    role: $Enums.Role
    isSubscribed: boolean
    paddleCustomerId: string | null
    paddleEmail: string | null
    paystackCustomerCode: string | null
    paystackAuthCode: string | null
    referredByAffiliateId: string | null
    firstPaidAt: Date | null
    telegramChatId: string | null
    telegramUsername: string | null
    telegramLinkedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkUserId?: boolean
    email?: boolean
    password?: boolean
    username?: boolean
    avatar?: boolean
    role?: boolean
    isSubscribed?: boolean
    paddleCustomerId?: boolean
    paddleEmail?: boolean
    paystackCustomerCode?: boolean
    paystackAuthCode?: boolean
    referredByAffiliateId?: boolean
    firstPaidAt?: boolean
    telegramChatId?: boolean
    telegramUsername?: boolean
    telegramLinkedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    payments?: boolean | User$paymentsArgs<ExtArgs>
    telegramLinkTokens?: boolean | User$telegramLinkTokensArgs<ExtArgs>
    subscriptions?: boolean | User$subscriptionsArgs<ExtArgs>
    Ticket?: boolean | User$TicketArgs<ExtArgs>
    Commission?: boolean | User$CommissionArgs<ExtArgs>
    Affiliate?: boolean | User$AffiliateArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    clerkUserId?: boolean
    email?: boolean
    password?: boolean
    username?: boolean
    avatar?: boolean
    role?: boolean
    isSubscribed?: boolean
    paddleCustomerId?: boolean
    paddleEmail?: boolean
    paystackCustomerCode?: boolean
    paystackAuthCode?: boolean
    referredByAffiliateId?: boolean
    firstPaidAt?: boolean
    telegramChatId?: boolean
    telegramUsername?: boolean
    telegramLinkedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clerkUserId" | "email" | "password" | "username" | "avatar" | "role" | "isSubscribed" | "paddleCustomerId" | "paddleEmail" | "paystackCustomerCode" | "paystackAuthCode" | "referredByAffiliateId" | "firstPaidAt" | "telegramChatId" | "telegramUsername" | "telegramLinkedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    payments?: boolean | User$paymentsArgs<ExtArgs>
    telegramLinkTokens?: boolean | User$telegramLinkTokensArgs<ExtArgs>
    subscriptions?: boolean | User$subscriptionsArgs<ExtArgs>
    Ticket?: boolean | User$TicketArgs<ExtArgs>
    Commission?: boolean | User$CommissionArgs<ExtArgs>
    Affiliate?: boolean | User$AffiliateArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      payments: Prisma.$PaymentPayload<ExtArgs>[]
      telegramLinkTokens: Prisma.$TelegramLinkTokenPayload<ExtArgs>[]
      subscriptions: Prisma.$SubscriptionPayload<ExtArgs>[]
      Ticket: Prisma.$TicketPayload<ExtArgs>[]
      Commission: Prisma.$CommissionPayload<ExtArgs>[]
      Affiliate: Prisma.$AffiliatePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clerkUserId: string
      email: string
      password: string | null
      username: string | null
      avatar: string | null
      role: $Enums.Role
      isSubscribed: boolean
      paddleCustomerId: string | null
      paddleEmail: string | null
      paystackCustomerCode: string | null
      paystackAuthCode: string | null
      referredByAffiliateId: string | null
      firstPaidAt: Date | null
      telegramChatId: string | null
      telegramUsername: string | null
      telegramLinkedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: UserFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    payments<T extends User$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, User$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    telegramLinkTokens<T extends User$telegramLinkTokensArgs<ExtArgs> = {}>(args?: Subset<T, User$telegramLinkTokensArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TelegramLinkTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    subscriptions<T extends User$subscriptionsArgs<ExtArgs> = {}>(args?: Subset<T, User$subscriptionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Ticket<T extends User$TicketArgs<ExtArgs> = {}>(args?: Subset<T, User$TicketArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Commission<T extends User$CommissionArgs<ExtArgs> = {}>(args?: Subset<T, User$CommissionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Affiliate<T extends User$AffiliateArgs<ExtArgs> = {}>(args?: Subset<T, User$AffiliateArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AffiliatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly clerkUserId: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly isSubscribed: FieldRef<"User", 'Boolean'>
    readonly paddleCustomerId: FieldRef<"User", 'String'>
    readonly paddleEmail: FieldRef<"User", 'String'>
    readonly paystackCustomerCode: FieldRef<"User", 'String'>
    readonly paystackAuthCode: FieldRef<"User", 'String'>
    readonly referredByAffiliateId: FieldRef<"User", 'String'>
    readonly firstPaidAt: FieldRef<"User", 'DateTime'>
    readonly telegramChatId: FieldRef<"User", 'String'>
    readonly telegramUsername: FieldRef<"User", 'String'>
    readonly telegramLinkedAt: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User findRaw
   */
  export type UserFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User.payments
   */
  export type User$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * User.telegramLinkTokens
   */
  export type User$telegramLinkTokensArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramLinkToken
     */
    select?: TelegramLinkTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramLinkToken
     */
    omit?: TelegramLinkTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelegramLinkTokenInclude<ExtArgs> | null
    where?: TelegramLinkTokenWhereInput
    orderBy?: TelegramLinkTokenOrderByWithRelationInput | TelegramLinkTokenOrderByWithRelationInput[]
    cursor?: TelegramLinkTokenWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TelegramLinkTokenScalarFieldEnum | TelegramLinkTokenScalarFieldEnum[]
  }

  /**
   * User.subscriptions
   */
  export type User$subscriptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    cursor?: SubscriptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * User.Ticket
   */
  export type User$TicketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * User.Commission
   */
  export type User$CommissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commission
     */
    select?: CommissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commission
     */
    omit?: CommissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommissionInclude<ExtArgs> | null
    where?: CommissionWhereInput
    orderBy?: CommissionOrderByWithRelationInput | CommissionOrderByWithRelationInput[]
    cursor?: CommissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommissionScalarFieldEnum | CommissionScalarFieldEnum[]
  }

  /**
   * User.Affiliate
   */
  export type User$AffiliateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Affiliate
     */
    select?: AffiliateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Affiliate
     */
    omit?: AffiliateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AffiliateInclude<ExtArgs> | null
    where?: AffiliateWhereInput
    orderBy?: AffiliateOrderByWithRelationInput | AffiliateOrderByWithRelationInput[]
    cursor?: AffiliateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AffiliateScalarFieldEnum | AffiliateScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Subscription
   */

  export type AggregateSubscription = {
    _count: SubscriptionCountAggregateOutputType | null
    _avg: SubscriptionAvgAggregateOutputType | null
    _sum: SubscriptionSumAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  export type SubscriptionAvgAggregateOutputType = {
    unitAmountMinor: number | null
    intervalCount: number | null
  }

  export type SubscriptionSumAggregateOutputType = {
    unitAmountMinor: number | null
    intervalCount: number | null
  }

  export type SubscriptionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    productName: string | null
    paystackSubscriptionCode: string | null
    paystackCustomerCode: string | null
    paystackPlanCode: string | null
    paystackEmailToken: string | null
    status: $Enums.SubscriptionStatus | null
    currency: string | null
    unitAmountMinor: number | null
    interval: string | null
    intervalCount: number | null
    currentPeriodStart: Date | null
    currentPeriodEnd: Date | null
    cancelAtPeriodEnd: boolean | null
    canceledAt: Date | null
    affiliateId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubscriptionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    productName: string | null
    paystackSubscriptionCode: string | null
    paystackCustomerCode: string | null
    paystackPlanCode: string | null
    paystackEmailToken: string | null
    status: $Enums.SubscriptionStatus | null
    currency: string | null
    unitAmountMinor: number | null
    interval: string | null
    intervalCount: number | null
    currentPeriodStart: Date | null
    currentPeriodEnd: Date | null
    cancelAtPeriodEnd: boolean | null
    canceledAt: Date | null
    affiliateId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubscriptionCountAggregateOutputType = {
    id: number
    userId: number
    productName: number
    paystackSubscriptionCode: number
    paystackCustomerCode: number
    paystackPlanCode: number
    paystackEmailToken: number
    status: number
    currency: number
    unitAmountMinor: number
    interval: number
    intervalCount: number
    currentPeriodStart: number
    currentPeriodEnd: number
    cancelAtPeriodEnd: number
    canceledAt: number
    affiliateId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SubscriptionAvgAggregateInputType = {
    unitAmountMinor?: true
    intervalCount?: true
  }

  export type SubscriptionSumAggregateInputType = {
    unitAmountMinor?: true
    intervalCount?: true
  }

  export type SubscriptionMinAggregateInputType = {
    id?: true
    userId?: true
    productName?: true
    paystackSubscriptionCode?: true
    paystackCustomerCode?: true
    paystackPlanCode?: true
    paystackEmailToken?: true
    status?: true
    currency?: true
    unitAmountMinor?: true
    interval?: true
    intervalCount?: true
    currentPeriodStart?: true
    currentPeriodEnd?: true
    cancelAtPeriodEnd?: true
    canceledAt?: true
    affiliateId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubscriptionMaxAggregateInputType = {
    id?: true
    userId?: true
    productName?: true
    paystackSubscriptionCode?: true
    paystackCustomerCode?: true
    paystackPlanCode?: true
    paystackEmailToken?: true
    status?: true
    currency?: true
    unitAmountMinor?: true
    interval?: true
    intervalCount?: true
    currentPeriodStart?: true
    currentPeriodEnd?: true
    cancelAtPeriodEnd?: true
    canceledAt?: true
    affiliateId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubscriptionCountAggregateInputType = {
    id?: true
    userId?: true
    productName?: true
    paystackSubscriptionCode?: true
    paystackCustomerCode?: true
    paystackPlanCode?: true
    paystackEmailToken?: true
    status?: true
    currency?: true
    unitAmountMinor?: true
    interval?: true
    intervalCount?: true
    currentPeriodStart?: true
    currentPeriodEnd?: true
    cancelAtPeriodEnd?: true
    canceledAt?: true
    affiliateId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SubscriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscription to aggregate.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subscriptions
    **/
    _count?: true | SubscriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubscriptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubscriptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubscriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubscriptionMaxAggregateInputType
  }

  export type GetSubscriptionAggregateType<T extends SubscriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubscription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubscription[P]>
      : GetScalarType<T[P], AggregateSubscription[P]>
  }




  export type SubscriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubscriptionWhereInput
    orderBy?: SubscriptionOrderByWithAggregationInput | SubscriptionOrderByWithAggregationInput[]
    by: SubscriptionScalarFieldEnum[] | SubscriptionScalarFieldEnum
    having?: SubscriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubscriptionCountAggregateInputType | true
    _avg?: SubscriptionAvgAggregateInputType
    _sum?: SubscriptionSumAggregateInputType
    _min?: SubscriptionMinAggregateInputType
    _max?: SubscriptionMaxAggregateInputType
  }

  export type SubscriptionGroupByOutputType = {
    id: string
    userId: string
    productName: string | null
    paystackSubscriptionCode: string | null
    paystackCustomerCode: string | null
    paystackPlanCode: string | null
    paystackEmailToken: string | null
    status: $Enums.SubscriptionStatus
    currency: string
    unitAmountMinor: number
    interval: string
    intervalCount: number
    currentPeriodStart: Date | null
    currentPeriodEnd: Date | null
    cancelAtPeriodEnd: boolean
    canceledAt: Date | null
    affiliateId: string | null
    createdAt: Date
    updatedAt: Date
    _count: SubscriptionCountAggregateOutputType | null
    _avg: SubscriptionAvgAggregateOutputType | null
    _sum: SubscriptionSumAggregateOutputType | null
    _min: SubscriptionMinAggregateOutputType | null
    _max: SubscriptionMaxAggregateOutputType | null
  }

  type GetSubscriptionGroupByPayload<T extends SubscriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubscriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubscriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
            : GetScalarType<T[P], SubscriptionGroupByOutputType[P]>
        }
      >
    >


  export type SubscriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    productName?: boolean
    paystackSubscriptionCode?: boolean
    paystackCustomerCode?: boolean
    paystackPlanCode?: boolean
    paystackEmailToken?: boolean
    status?: boolean
    currency?: boolean
    unitAmountMinor?: boolean
    interval?: boolean
    intervalCount?: boolean
    currentPeriodStart?: boolean
    currentPeriodEnd?: boolean
    cancelAtPeriodEnd?: boolean
    canceledAt?: boolean
    affiliateId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    Commission?: boolean | Subscription$CommissionArgs<ExtArgs>
    _count?: boolean | SubscriptionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subscription"]>



  export type SubscriptionSelectScalar = {
    id?: boolean
    userId?: boolean
    productName?: boolean
    paystackSubscriptionCode?: boolean
    paystackCustomerCode?: boolean
    paystackPlanCode?: boolean
    paystackEmailToken?: boolean
    status?: boolean
    currency?: boolean
    unitAmountMinor?: boolean
    interval?: boolean
    intervalCount?: boolean
    currentPeriodStart?: boolean
    currentPeriodEnd?: boolean
    cancelAtPeriodEnd?: boolean
    canceledAt?: boolean
    affiliateId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SubscriptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "productName" | "paystackSubscriptionCode" | "paystackCustomerCode" | "paystackPlanCode" | "paystackEmailToken" | "status" | "currency" | "unitAmountMinor" | "interval" | "intervalCount" | "currentPeriodStart" | "currentPeriodEnd" | "cancelAtPeriodEnd" | "canceledAt" | "affiliateId" | "createdAt" | "updatedAt", ExtArgs["result"]["subscription"]>
  export type SubscriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    Commission?: boolean | Subscription$CommissionArgs<ExtArgs>
    _count?: boolean | SubscriptionCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $SubscriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subscription"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      Commission: Prisma.$CommissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      productName: string | null
      paystackSubscriptionCode: string | null
      paystackCustomerCode: string | null
      paystackPlanCode: string | null
      paystackEmailToken: string | null
      status: $Enums.SubscriptionStatus
      currency: string
      unitAmountMinor: number
      interval: string
      intervalCount: number
      currentPeriodStart: Date | null
      currentPeriodEnd: Date | null
      cancelAtPeriodEnd: boolean
      canceledAt: Date | null
      affiliateId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["subscription"]>
    composites: {}
  }

  type SubscriptionGetPayload<S extends boolean | null | undefined | SubscriptionDefaultArgs> = $Result.GetResult<Prisma.$SubscriptionPayload, S>

  type SubscriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubscriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubscriptionCountAggregateInputType | true
    }

  export interface SubscriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subscription'], meta: { name: 'Subscription' } }
    /**
     * Find zero or one Subscription that matches the filter.
     * @param {SubscriptionFindUniqueArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubscriptionFindUniqueArgs>(args: SelectSubset<T, SubscriptionFindUniqueArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Subscription that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubscriptionFindUniqueOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubscriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, SubscriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubscriptionFindFirstArgs>(args?: SelectSubset<T, SubscriptionFindFirstArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Subscription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindFirstOrThrowArgs} args - Arguments to find a Subscription
     * @example
     * // Get one Subscription
     * const subscription = await prisma.subscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubscriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, SubscriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subscriptions
     * const subscriptions = await prisma.subscription.findMany()
     * 
     * // Get first 10 Subscriptions
     * const subscriptions = await prisma.subscription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subscriptionWithIdOnly = await prisma.subscription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubscriptionFindManyArgs>(args?: SelectSubset<T, SubscriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Subscription.
     * @param {SubscriptionCreateArgs} args - Arguments to create a Subscription.
     * @example
     * // Create one Subscription
     * const Subscription = await prisma.subscription.create({
     *   data: {
     *     // ... data to create a Subscription
     *   }
     * })
     * 
     */
    create<T extends SubscriptionCreateArgs>(args: SelectSubset<T, SubscriptionCreateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Subscriptions.
     * @param {SubscriptionCreateManyArgs} args - Arguments to create many Subscriptions.
     * @example
     * // Create many Subscriptions
     * const subscription = await prisma.subscription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubscriptionCreateManyArgs>(args?: SelectSubset<T, SubscriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Subscription.
     * @param {SubscriptionDeleteArgs} args - Arguments to delete one Subscription.
     * @example
     * // Delete one Subscription
     * const Subscription = await prisma.subscription.delete({
     *   where: {
     *     // ... filter to delete one Subscription
     *   }
     * })
     * 
     */
    delete<T extends SubscriptionDeleteArgs>(args: SelectSubset<T, SubscriptionDeleteArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Subscription.
     * @param {SubscriptionUpdateArgs} args - Arguments to update one Subscription.
     * @example
     * // Update one Subscription
     * const subscription = await prisma.subscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubscriptionUpdateArgs>(args: SelectSubset<T, SubscriptionUpdateArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Subscriptions.
     * @param {SubscriptionDeleteManyArgs} args - Arguments to filter Subscriptions to delete.
     * @example
     * // Delete a few Subscriptions
     * const { count } = await prisma.subscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubscriptionDeleteManyArgs>(args?: SelectSubset<T, SubscriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subscriptions
     * const subscription = await prisma.subscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubscriptionUpdateManyArgs>(args: SelectSubset<T, SubscriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Subscription.
     * @param {SubscriptionUpsertArgs} args - Arguments to update or create a Subscription.
     * @example
     * // Update or create a Subscription
     * const subscription = await prisma.subscription.upsert({
     *   create: {
     *     // ... data to create a Subscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subscription we want to update
     *   }
     * })
     */
    upsert<T extends SubscriptionUpsertArgs>(args: SelectSubset<T, SubscriptionUpsertArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Subscriptions that matches the filter.
     * @param {SubscriptionFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const subscription = await prisma.subscription.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: SubscriptionFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Subscription.
     * @param {SubscriptionAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const subscription = await prisma.subscription.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: SubscriptionAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionCountArgs} args - Arguments to filter Subscriptions to count.
     * @example
     * // Count the number of Subscriptions
     * const count = await prisma.subscription.count({
     *   where: {
     *     // ... the filter for the Subscriptions we want to count
     *   }
     * })
    **/
    count<T extends SubscriptionCountArgs>(
      args?: Subset<T, SubscriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubscriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubscriptionAggregateArgs>(args: Subset<T, SubscriptionAggregateArgs>): Prisma.PrismaPromise<GetSubscriptionAggregateType<T>>

    /**
     * Group by Subscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubscriptionGroupByArgs} args - Group by arguments.
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
      T extends SubscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubscriptionGroupByArgs['orderBy'] }
        : { orderBy?: SubscriptionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SubscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subscription model
   */
  readonly fields: SubscriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubscriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Commission<T extends Subscription$CommissionArgs<ExtArgs> = {}>(args?: Subset<T, Subscription$CommissionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Subscription model
   */
  interface SubscriptionFieldRefs {
    readonly id: FieldRef<"Subscription", 'String'>
    readonly userId: FieldRef<"Subscription", 'String'>
    readonly productName: FieldRef<"Subscription", 'String'>
    readonly paystackSubscriptionCode: FieldRef<"Subscription", 'String'>
    readonly paystackCustomerCode: FieldRef<"Subscription", 'String'>
    readonly paystackPlanCode: FieldRef<"Subscription", 'String'>
    readonly paystackEmailToken: FieldRef<"Subscription", 'String'>
    readonly status: FieldRef<"Subscription", 'SubscriptionStatus'>
    readonly currency: FieldRef<"Subscription", 'String'>
    readonly unitAmountMinor: FieldRef<"Subscription", 'Int'>
    readonly interval: FieldRef<"Subscription", 'String'>
    readonly intervalCount: FieldRef<"Subscription", 'Int'>
    readonly currentPeriodStart: FieldRef<"Subscription", 'DateTime'>
    readonly currentPeriodEnd: FieldRef<"Subscription", 'DateTime'>
    readonly cancelAtPeriodEnd: FieldRef<"Subscription", 'Boolean'>
    readonly canceledAt: FieldRef<"Subscription", 'DateTime'>
    readonly affiliateId: FieldRef<"Subscription", 'String'>
    readonly createdAt: FieldRef<"Subscription", 'DateTime'>
    readonly updatedAt: FieldRef<"Subscription", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Subscription findUnique
   */
  export type SubscriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findUniqueOrThrow
   */
  export type SubscriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription findFirst
   */
  export type SubscriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findFirstOrThrow
   */
  export type SubscriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscription to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subscriptions.
     */
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription findMany
   */
  export type SubscriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which Subscriptions to fetch.
     */
    where?: SubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subscriptions to fetch.
     */
    orderBy?: SubscriptionOrderByWithRelationInput | SubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subscriptions.
     */
    cursor?: SubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subscriptions.
     */
    skip?: number
    distinct?: SubscriptionScalarFieldEnum | SubscriptionScalarFieldEnum[]
  }

  /**
   * Subscription create
   */
  export type SubscriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a Subscription.
     */
    data: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
  }

  /**
   * Subscription createMany
   */
  export type SubscriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subscriptions.
     */
    data: SubscriptionCreateManyInput | SubscriptionCreateManyInput[]
  }

  /**
   * Subscription update
   */
  export type SubscriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a Subscription.
     */
    data: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
    /**
     * Choose, which Subscription to update.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription updateMany
   */
  export type SubscriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subscriptions.
     */
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which Subscriptions to update
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to update.
     */
    limit?: number
  }

  /**
   * Subscription upsert
   */
  export type SubscriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the Subscription to update in case it exists.
     */
    where: SubscriptionWhereUniqueInput
    /**
     * In case the Subscription found by the `where` argument doesn't exist, create a new Subscription with this data.
     */
    create: XOR<SubscriptionCreateInput, SubscriptionUncheckedCreateInput>
    /**
     * In case the Subscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubscriptionUpdateInput, SubscriptionUncheckedUpdateInput>
  }

  /**
   * Subscription delete
   */
  export type SubscriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    /**
     * Filter which Subscription to delete.
     */
    where: SubscriptionWhereUniqueInput
  }

  /**
   * Subscription deleteMany
   */
  export type SubscriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subscriptions to delete
     */
    where?: SubscriptionWhereInput
    /**
     * Limit how many Subscriptions to delete.
     */
    limit?: number
  }

  /**
   * Subscription findRaw
   */
  export type SubscriptionFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Subscription aggregateRaw
   */
  export type SubscriptionAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Subscription.Commission
   */
  export type Subscription$CommissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commission
     */
    select?: CommissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commission
     */
    omit?: CommissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommissionInclude<ExtArgs> | null
    where?: CommissionWhereInput
    orderBy?: CommissionOrderByWithRelationInput | CommissionOrderByWithRelationInput[]
    cursor?: CommissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommissionScalarFieldEnum | CommissionScalarFieldEnum[]
  }

  /**
   * Subscription without action
   */
  export type SubscriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
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
    fxRateToGBP: number | null
    amountMinor: number | null
  }

  export type PaymentSumAggregateOutputType = {
    amount: number | null
    fxRateToGBP: number | null
    amountMinor: number | null
  }

  export type PaymentMinAggregateOutputType = {
    id: string | null
    userId: string | null
    amount: number | null
    method: string | null
    status: string | null
    reference: string | null
    provider: string | null
    createdAt: Date | null
    currency: string | null
    fxRateToGBP: number | null
    amountMinor: number | null
    chargedCurrency: string | null
    affiliateId: string | null
    commissionId: string | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    amount: number | null
    method: string | null
    status: string | null
    reference: string | null
    provider: string | null
    createdAt: Date | null
    currency: string | null
    fxRateToGBP: number | null
    amountMinor: number | null
    chargedCurrency: string | null
    affiliateId: string | null
    commissionId: string | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    userId: number
    amount: number
    method: number
    status: number
    reference: number
    provider: number
    createdAt: number
    currency: number
    fxRateToGBP: number
    amountMinor: number
    chargedCurrency: number
    affiliateId: number
    commissionId: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    amount?: true
    fxRateToGBP?: true
    amountMinor?: true
  }

  export type PaymentSumAggregateInputType = {
    amount?: true
    fxRateToGBP?: true
    amountMinor?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    method?: true
    status?: true
    reference?: true
    provider?: true
    createdAt?: true
    currency?: true
    fxRateToGBP?: true
    amountMinor?: true
    chargedCurrency?: true
    affiliateId?: true
    commissionId?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    method?: true
    status?: true
    reference?: true
    provider?: true
    createdAt?: true
    currency?: true
    fxRateToGBP?: true
    amountMinor?: true
    chargedCurrency?: true
    affiliateId?: true
    commissionId?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    userId?: true
    amount?: true
    method?: true
    status?: true
    reference?: true
    provider?: true
    createdAt?: true
    currency?: true
    fxRateToGBP?: true
    amountMinor?: true
    chargedCurrency?: true
    affiliateId?: true
    commissionId?: true
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
    userId: string
    amount: number
    method: string
    status: string
    reference: string
    provider: string
    createdAt: Date
    currency: string | null
    fxRateToGBP: number | null
    amountMinor: number | null
    chargedCurrency: string | null
    affiliateId: string | null
    commissionId: string | null
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
    userId?: boolean
    amount?: boolean
    method?: boolean
    status?: boolean
    reference?: boolean
    provider?: boolean
    createdAt?: boolean
    currency?: boolean
    fxRateToGBP?: boolean
    amountMinor?: boolean
    chargedCurrency?: boolean
    affiliateId?: boolean
    commissionId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    Commission?: boolean | Payment$CommissionArgs<ExtArgs>
    _count?: boolean | PaymentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>



  export type PaymentSelectScalar = {
    id?: boolean
    userId?: boolean
    amount?: boolean
    method?: boolean
    status?: boolean
    reference?: boolean
    provider?: boolean
    createdAt?: boolean
    currency?: boolean
    fxRateToGBP?: boolean
    amountMinor?: boolean
    chargedCurrency?: boolean
    affiliateId?: boolean
    commissionId?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "amount" | "method" | "status" | "reference" | "provider" | "createdAt" | "currency" | "fxRateToGBP" | "amountMinor" | "chargedCurrency" | "affiliateId" | "commissionId", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    Commission?: boolean | Payment$CommissionArgs<ExtArgs>
    _count?: boolean | PaymentCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      Commission: Prisma.$CommissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      amount: number
      method: string
      status: string
      reference: string
      provider: string
      createdAt: Date
      currency: string | null
      fxRateToGBP: number | null
      amountMinor: number | null
      chargedCurrency: string | null
      affiliateId: string | null
      commissionId: string | null
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
     * Find zero or more Payments that matches the filter.
     * @param {PaymentFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const payment = await prisma.payment.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: PaymentFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Payment.
     * @param {PaymentAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const payment = await prisma.payment.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: PaymentAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


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
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Commission<T extends Payment$CommissionArgs<ExtArgs> = {}>(args?: Subset<T, Payment$CommissionArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly userId: FieldRef<"Payment", 'String'>
    readonly amount: FieldRef<"Payment", 'Float'>
    readonly method: FieldRef<"Payment", 'String'>
    readonly status: FieldRef<"Payment", 'String'>
    readonly reference: FieldRef<"Payment", 'String'>
    readonly provider: FieldRef<"Payment", 'String'>
    readonly createdAt: FieldRef<"Payment", 'DateTime'>
    readonly currency: FieldRef<"Payment", 'String'>
    readonly fxRateToGBP: FieldRef<"Payment", 'Float'>
    readonly amountMinor: FieldRef<"Payment", 'Int'>
    readonly chargedCurrency: FieldRef<"Payment", 'String'>
    readonly affiliateId: FieldRef<"Payment", 'String'>
    readonly commissionId: FieldRef<"Payment", 'String'>
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
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
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
   * Payment findRaw
   */
  export type PaymentFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Payment aggregateRaw
   */
  export type PaymentAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Payment.Commission
   */
  export type Payment$CommissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commission
     */
    select?: CommissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commission
     */
    omit?: CommissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommissionInclude<ExtArgs> | null
    where?: CommissionWhereInput
    orderBy?: CommissionOrderByWithRelationInput | CommissionOrderByWithRelationInput[]
    cursor?: CommissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommissionScalarFieldEnum | CommissionScalarFieldEnum[]
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
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Model TelegramLinkToken
   */

  export type AggregateTelegramLinkToken = {
    _count: TelegramLinkTokenCountAggregateOutputType | null
    _min: TelegramLinkTokenMinAggregateOutputType | null
    _max: TelegramLinkTokenMaxAggregateOutputType | null
  }

  export type TelegramLinkTokenMinAggregateOutputType = {
    id: string | null
    token: string | null
    userId: string | null
    createdAt: Date | null
    expiresAt: Date | null
    usedAt: Date | null
  }

  export type TelegramLinkTokenMaxAggregateOutputType = {
    id: string | null
    token: string | null
    userId: string | null
    createdAt: Date | null
    expiresAt: Date | null
    usedAt: Date | null
  }

  export type TelegramLinkTokenCountAggregateOutputType = {
    id: number
    token: number
    userId: number
    createdAt: number
    expiresAt: number
    usedAt: number
    _all: number
  }


  export type TelegramLinkTokenMinAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    createdAt?: true
    expiresAt?: true
    usedAt?: true
  }

  export type TelegramLinkTokenMaxAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    createdAt?: true
    expiresAt?: true
    usedAt?: true
  }

  export type TelegramLinkTokenCountAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    createdAt?: true
    expiresAt?: true
    usedAt?: true
    _all?: true
  }

  export type TelegramLinkTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TelegramLinkToken to aggregate.
     */
    where?: TelegramLinkTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TelegramLinkTokens to fetch.
     */
    orderBy?: TelegramLinkTokenOrderByWithRelationInput | TelegramLinkTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TelegramLinkTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TelegramLinkTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TelegramLinkTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TelegramLinkTokens
    **/
    _count?: true | TelegramLinkTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TelegramLinkTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TelegramLinkTokenMaxAggregateInputType
  }

  export type GetTelegramLinkTokenAggregateType<T extends TelegramLinkTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateTelegramLinkToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTelegramLinkToken[P]>
      : GetScalarType<T[P], AggregateTelegramLinkToken[P]>
  }




  export type TelegramLinkTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TelegramLinkTokenWhereInput
    orderBy?: TelegramLinkTokenOrderByWithAggregationInput | TelegramLinkTokenOrderByWithAggregationInput[]
    by: TelegramLinkTokenScalarFieldEnum[] | TelegramLinkTokenScalarFieldEnum
    having?: TelegramLinkTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TelegramLinkTokenCountAggregateInputType | true
    _min?: TelegramLinkTokenMinAggregateInputType
    _max?: TelegramLinkTokenMaxAggregateInputType
  }

  export type TelegramLinkTokenGroupByOutputType = {
    id: string
    token: string
    userId: string
    createdAt: Date
    expiresAt: Date
    usedAt: Date | null
    _count: TelegramLinkTokenCountAggregateOutputType | null
    _min: TelegramLinkTokenMinAggregateOutputType | null
    _max: TelegramLinkTokenMaxAggregateOutputType | null
  }

  type GetTelegramLinkTokenGroupByPayload<T extends TelegramLinkTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TelegramLinkTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TelegramLinkTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TelegramLinkTokenGroupByOutputType[P]>
            : GetScalarType<T[P], TelegramLinkTokenGroupByOutputType[P]>
        }
      >
    >


  export type TelegramLinkTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    userId?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    usedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["telegramLinkToken"]>



  export type TelegramLinkTokenSelectScalar = {
    id?: boolean
    token?: boolean
    userId?: boolean
    createdAt?: boolean
    expiresAt?: boolean
    usedAt?: boolean
  }

  export type TelegramLinkTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "token" | "userId" | "createdAt" | "expiresAt" | "usedAt", ExtArgs["result"]["telegramLinkToken"]>
  export type TelegramLinkTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TelegramLinkTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TelegramLinkToken"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      token: string
      userId: string
      createdAt: Date
      expiresAt: Date
      usedAt: Date | null
    }, ExtArgs["result"]["telegramLinkToken"]>
    composites: {}
  }

  type TelegramLinkTokenGetPayload<S extends boolean | null | undefined | TelegramLinkTokenDefaultArgs> = $Result.GetResult<Prisma.$TelegramLinkTokenPayload, S>

  type TelegramLinkTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TelegramLinkTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TelegramLinkTokenCountAggregateInputType | true
    }

  export interface TelegramLinkTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TelegramLinkToken'], meta: { name: 'TelegramLinkToken' } }
    /**
     * Find zero or one TelegramLinkToken that matches the filter.
     * @param {TelegramLinkTokenFindUniqueArgs} args - Arguments to find a TelegramLinkToken
     * @example
     * // Get one TelegramLinkToken
     * const telegramLinkToken = await prisma.telegramLinkToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TelegramLinkTokenFindUniqueArgs>(args: SelectSubset<T, TelegramLinkTokenFindUniqueArgs<ExtArgs>>): Prisma__TelegramLinkTokenClient<$Result.GetResult<Prisma.$TelegramLinkTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TelegramLinkToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TelegramLinkTokenFindUniqueOrThrowArgs} args - Arguments to find a TelegramLinkToken
     * @example
     * // Get one TelegramLinkToken
     * const telegramLinkToken = await prisma.telegramLinkToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TelegramLinkTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, TelegramLinkTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TelegramLinkTokenClient<$Result.GetResult<Prisma.$TelegramLinkTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TelegramLinkToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelegramLinkTokenFindFirstArgs} args - Arguments to find a TelegramLinkToken
     * @example
     * // Get one TelegramLinkToken
     * const telegramLinkToken = await prisma.telegramLinkToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TelegramLinkTokenFindFirstArgs>(args?: SelectSubset<T, TelegramLinkTokenFindFirstArgs<ExtArgs>>): Prisma__TelegramLinkTokenClient<$Result.GetResult<Prisma.$TelegramLinkTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TelegramLinkToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelegramLinkTokenFindFirstOrThrowArgs} args - Arguments to find a TelegramLinkToken
     * @example
     * // Get one TelegramLinkToken
     * const telegramLinkToken = await prisma.telegramLinkToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TelegramLinkTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, TelegramLinkTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__TelegramLinkTokenClient<$Result.GetResult<Prisma.$TelegramLinkTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TelegramLinkTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelegramLinkTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TelegramLinkTokens
     * const telegramLinkTokens = await prisma.telegramLinkToken.findMany()
     * 
     * // Get first 10 TelegramLinkTokens
     * const telegramLinkTokens = await prisma.telegramLinkToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const telegramLinkTokenWithIdOnly = await prisma.telegramLinkToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TelegramLinkTokenFindManyArgs>(args?: SelectSubset<T, TelegramLinkTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TelegramLinkTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TelegramLinkToken.
     * @param {TelegramLinkTokenCreateArgs} args - Arguments to create a TelegramLinkToken.
     * @example
     * // Create one TelegramLinkToken
     * const TelegramLinkToken = await prisma.telegramLinkToken.create({
     *   data: {
     *     // ... data to create a TelegramLinkToken
     *   }
     * })
     * 
     */
    create<T extends TelegramLinkTokenCreateArgs>(args: SelectSubset<T, TelegramLinkTokenCreateArgs<ExtArgs>>): Prisma__TelegramLinkTokenClient<$Result.GetResult<Prisma.$TelegramLinkTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TelegramLinkTokens.
     * @param {TelegramLinkTokenCreateManyArgs} args - Arguments to create many TelegramLinkTokens.
     * @example
     * // Create many TelegramLinkTokens
     * const telegramLinkToken = await prisma.telegramLinkToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TelegramLinkTokenCreateManyArgs>(args?: SelectSubset<T, TelegramLinkTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TelegramLinkToken.
     * @param {TelegramLinkTokenDeleteArgs} args - Arguments to delete one TelegramLinkToken.
     * @example
     * // Delete one TelegramLinkToken
     * const TelegramLinkToken = await prisma.telegramLinkToken.delete({
     *   where: {
     *     // ... filter to delete one TelegramLinkToken
     *   }
     * })
     * 
     */
    delete<T extends TelegramLinkTokenDeleteArgs>(args: SelectSubset<T, TelegramLinkTokenDeleteArgs<ExtArgs>>): Prisma__TelegramLinkTokenClient<$Result.GetResult<Prisma.$TelegramLinkTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TelegramLinkToken.
     * @param {TelegramLinkTokenUpdateArgs} args - Arguments to update one TelegramLinkToken.
     * @example
     * // Update one TelegramLinkToken
     * const telegramLinkToken = await prisma.telegramLinkToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TelegramLinkTokenUpdateArgs>(args: SelectSubset<T, TelegramLinkTokenUpdateArgs<ExtArgs>>): Prisma__TelegramLinkTokenClient<$Result.GetResult<Prisma.$TelegramLinkTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TelegramLinkTokens.
     * @param {TelegramLinkTokenDeleteManyArgs} args - Arguments to filter TelegramLinkTokens to delete.
     * @example
     * // Delete a few TelegramLinkTokens
     * const { count } = await prisma.telegramLinkToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TelegramLinkTokenDeleteManyArgs>(args?: SelectSubset<T, TelegramLinkTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TelegramLinkTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelegramLinkTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TelegramLinkTokens
     * const telegramLinkToken = await prisma.telegramLinkToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TelegramLinkTokenUpdateManyArgs>(args: SelectSubset<T, TelegramLinkTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TelegramLinkToken.
     * @param {TelegramLinkTokenUpsertArgs} args - Arguments to update or create a TelegramLinkToken.
     * @example
     * // Update or create a TelegramLinkToken
     * const telegramLinkToken = await prisma.telegramLinkToken.upsert({
     *   create: {
     *     // ... data to create a TelegramLinkToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TelegramLinkToken we want to update
     *   }
     * })
     */
    upsert<T extends TelegramLinkTokenUpsertArgs>(args: SelectSubset<T, TelegramLinkTokenUpsertArgs<ExtArgs>>): Prisma__TelegramLinkTokenClient<$Result.GetResult<Prisma.$TelegramLinkTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TelegramLinkTokens that matches the filter.
     * @param {TelegramLinkTokenFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const telegramLinkToken = await prisma.telegramLinkToken.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: TelegramLinkTokenFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a TelegramLinkToken.
     * @param {TelegramLinkTokenAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const telegramLinkToken = await prisma.telegramLinkToken.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: TelegramLinkTokenAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of TelegramLinkTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelegramLinkTokenCountArgs} args - Arguments to filter TelegramLinkTokens to count.
     * @example
     * // Count the number of TelegramLinkTokens
     * const count = await prisma.telegramLinkToken.count({
     *   where: {
     *     // ... the filter for the TelegramLinkTokens we want to count
     *   }
     * })
    **/
    count<T extends TelegramLinkTokenCountArgs>(
      args?: Subset<T, TelegramLinkTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TelegramLinkTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TelegramLinkToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelegramLinkTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TelegramLinkTokenAggregateArgs>(args: Subset<T, TelegramLinkTokenAggregateArgs>): Prisma.PrismaPromise<GetTelegramLinkTokenAggregateType<T>>

    /**
     * Group by TelegramLinkToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelegramLinkTokenGroupByArgs} args - Group by arguments.
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
      T extends TelegramLinkTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TelegramLinkTokenGroupByArgs['orderBy'] }
        : { orderBy?: TelegramLinkTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TelegramLinkTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTelegramLinkTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TelegramLinkToken model
   */
  readonly fields: TelegramLinkTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TelegramLinkToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TelegramLinkTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TelegramLinkToken model
   */
  interface TelegramLinkTokenFieldRefs {
    readonly id: FieldRef<"TelegramLinkToken", 'String'>
    readonly token: FieldRef<"TelegramLinkToken", 'String'>
    readonly userId: FieldRef<"TelegramLinkToken", 'String'>
    readonly createdAt: FieldRef<"TelegramLinkToken", 'DateTime'>
    readonly expiresAt: FieldRef<"TelegramLinkToken", 'DateTime'>
    readonly usedAt: FieldRef<"TelegramLinkToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TelegramLinkToken findUnique
   */
  export type TelegramLinkTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramLinkToken
     */
    select?: TelegramLinkTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramLinkToken
     */
    omit?: TelegramLinkTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelegramLinkTokenInclude<ExtArgs> | null
    /**
     * Filter, which TelegramLinkToken to fetch.
     */
    where: TelegramLinkTokenWhereUniqueInput
  }

  /**
   * TelegramLinkToken findUniqueOrThrow
   */
  export type TelegramLinkTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramLinkToken
     */
    select?: TelegramLinkTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramLinkToken
     */
    omit?: TelegramLinkTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelegramLinkTokenInclude<ExtArgs> | null
    /**
     * Filter, which TelegramLinkToken to fetch.
     */
    where: TelegramLinkTokenWhereUniqueInput
  }

  /**
   * TelegramLinkToken findFirst
   */
  export type TelegramLinkTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramLinkToken
     */
    select?: TelegramLinkTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramLinkToken
     */
    omit?: TelegramLinkTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelegramLinkTokenInclude<ExtArgs> | null
    /**
     * Filter, which TelegramLinkToken to fetch.
     */
    where?: TelegramLinkTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TelegramLinkTokens to fetch.
     */
    orderBy?: TelegramLinkTokenOrderByWithRelationInput | TelegramLinkTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TelegramLinkTokens.
     */
    cursor?: TelegramLinkTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TelegramLinkTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TelegramLinkTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TelegramLinkTokens.
     */
    distinct?: TelegramLinkTokenScalarFieldEnum | TelegramLinkTokenScalarFieldEnum[]
  }

  /**
   * TelegramLinkToken findFirstOrThrow
   */
  export type TelegramLinkTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramLinkToken
     */
    select?: TelegramLinkTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramLinkToken
     */
    omit?: TelegramLinkTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelegramLinkTokenInclude<ExtArgs> | null
    /**
     * Filter, which TelegramLinkToken to fetch.
     */
    where?: TelegramLinkTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TelegramLinkTokens to fetch.
     */
    orderBy?: TelegramLinkTokenOrderByWithRelationInput | TelegramLinkTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TelegramLinkTokens.
     */
    cursor?: TelegramLinkTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TelegramLinkTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TelegramLinkTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TelegramLinkTokens.
     */
    distinct?: TelegramLinkTokenScalarFieldEnum | TelegramLinkTokenScalarFieldEnum[]
  }

  /**
   * TelegramLinkToken findMany
   */
  export type TelegramLinkTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramLinkToken
     */
    select?: TelegramLinkTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramLinkToken
     */
    omit?: TelegramLinkTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelegramLinkTokenInclude<ExtArgs> | null
    /**
     * Filter, which TelegramLinkTokens to fetch.
     */
    where?: TelegramLinkTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TelegramLinkTokens to fetch.
     */
    orderBy?: TelegramLinkTokenOrderByWithRelationInput | TelegramLinkTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TelegramLinkTokens.
     */
    cursor?: TelegramLinkTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TelegramLinkTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TelegramLinkTokens.
     */
    skip?: number
    distinct?: TelegramLinkTokenScalarFieldEnum | TelegramLinkTokenScalarFieldEnum[]
  }

  /**
   * TelegramLinkToken create
   */
  export type TelegramLinkTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramLinkToken
     */
    select?: TelegramLinkTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramLinkToken
     */
    omit?: TelegramLinkTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelegramLinkTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a TelegramLinkToken.
     */
    data: XOR<TelegramLinkTokenCreateInput, TelegramLinkTokenUncheckedCreateInput>
  }

  /**
   * TelegramLinkToken createMany
   */
  export type TelegramLinkTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TelegramLinkTokens.
     */
    data: TelegramLinkTokenCreateManyInput | TelegramLinkTokenCreateManyInput[]
  }

  /**
   * TelegramLinkToken update
   */
  export type TelegramLinkTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramLinkToken
     */
    select?: TelegramLinkTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramLinkToken
     */
    omit?: TelegramLinkTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelegramLinkTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a TelegramLinkToken.
     */
    data: XOR<TelegramLinkTokenUpdateInput, TelegramLinkTokenUncheckedUpdateInput>
    /**
     * Choose, which TelegramLinkToken to update.
     */
    where: TelegramLinkTokenWhereUniqueInput
  }

  /**
   * TelegramLinkToken updateMany
   */
  export type TelegramLinkTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TelegramLinkTokens.
     */
    data: XOR<TelegramLinkTokenUpdateManyMutationInput, TelegramLinkTokenUncheckedUpdateManyInput>
    /**
     * Filter which TelegramLinkTokens to update
     */
    where?: TelegramLinkTokenWhereInput
    /**
     * Limit how many TelegramLinkTokens to update.
     */
    limit?: number
  }

  /**
   * TelegramLinkToken upsert
   */
  export type TelegramLinkTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramLinkToken
     */
    select?: TelegramLinkTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramLinkToken
     */
    omit?: TelegramLinkTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelegramLinkTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the TelegramLinkToken to update in case it exists.
     */
    where: TelegramLinkTokenWhereUniqueInput
    /**
     * In case the TelegramLinkToken found by the `where` argument doesn't exist, create a new TelegramLinkToken with this data.
     */
    create: XOR<TelegramLinkTokenCreateInput, TelegramLinkTokenUncheckedCreateInput>
    /**
     * In case the TelegramLinkToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TelegramLinkTokenUpdateInput, TelegramLinkTokenUncheckedUpdateInput>
  }

  /**
   * TelegramLinkToken delete
   */
  export type TelegramLinkTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramLinkToken
     */
    select?: TelegramLinkTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramLinkToken
     */
    omit?: TelegramLinkTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelegramLinkTokenInclude<ExtArgs> | null
    /**
     * Filter which TelegramLinkToken to delete.
     */
    where: TelegramLinkTokenWhereUniqueInput
  }

  /**
   * TelegramLinkToken deleteMany
   */
  export type TelegramLinkTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TelegramLinkTokens to delete
     */
    where?: TelegramLinkTokenWhereInput
    /**
     * Limit how many TelegramLinkTokens to delete.
     */
    limit?: number
  }

  /**
   * TelegramLinkToken findRaw
   */
  export type TelegramLinkTokenFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * TelegramLinkToken aggregateRaw
   */
  export type TelegramLinkTokenAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * TelegramLinkToken without action
   */
  export type TelegramLinkTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TelegramLinkToken
     */
    select?: TelegramLinkTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TelegramLinkToken
     */
    omit?: TelegramLinkTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelegramLinkTokenInclude<ExtArgs> | null
  }


  /**
   * Model Ticket
   */

  export type AggregateTicket = {
    _count: TicketCountAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  export type TicketMinAggregateOutputType = {
    id: string | null
    userId: string | null
    subject: string | null
    category: $Enums.TicketCategory | null
    priority: $Enums.TicketPriority | null
    status: $Enums.TicketStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TicketMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    subject: string | null
    category: $Enums.TicketCategory | null
    priority: $Enums.TicketPriority | null
    status: $Enums.TicketStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TicketCountAggregateOutputType = {
    id: number
    userId: number
    subject: number
    category: number
    priority: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TicketMinAggregateInputType = {
    id?: true
    userId?: true
    subject?: true
    category?: true
    priority?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TicketMaxAggregateInputType = {
    id?: true
    userId?: true
    subject?: true
    category?: true
    priority?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TicketCountAggregateInputType = {
    id?: true
    userId?: true
    subject?: true
    category?: true
    priority?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TicketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ticket to aggregate.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tickets
    **/
    _count?: true | TicketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketMaxAggregateInputType
  }

  export type GetTicketAggregateType<T extends TicketAggregateArgs> = {
        [P in keyof T & keyof AggregateTicket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicket[P]>
      : GetScalarType<T[P], AggregateTicket[P]>
  }




  export type TicketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithAggregationInput | TicketOrderByWithAggregationInput[]
    by: TicketScalarFieldEnum[] | TicketScalarFieldEnum
    having?: TicketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketCountAggregateInputType | true
    _min?: TicketMinAggregateInputType
    _max?: TicketMaxAggregateInputType
  }

  export type TicketGroupByOutputType = {
    id: string
    userId: string
    subject: string
    category: $Enums.TicketCategory
    priority: $Enums.TicketPriority
    status: $Enums.TicketStatus
    createdAt: Date
    updatedAt: Date
    _count: TicketCountAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  type GetTicketGroupByPayload<T extends TicketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketGroupByOutputType[P]>
            : GetScalarType<T[P], TicketGroupByOutputType[P]>
        }
      >
    >


  export type TicketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    subject?: boolean
    category?: boolean
    priority?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | Ticket$userArgs<ExtArgs>
    messages?: boolean | Ticket$messagesArgs<ExtArgs>
    _count?: boolean | TicketCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>



  export type TicketSelectScalar = {
    id?: boolean
    userId?: boolean
    subject?: boolean
    category?: boolean
    priority?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TicketOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "subject" | "category" | "priority" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["ticket"]>
  export type TicketInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Ticket$userArgs<ExtArgs>
    messages?: boolean | Ticket$messagesArgs<ExtArgs>
    _count?: boolean | TicketCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $TicketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ticket"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      messages: Prisma.$TicketMessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      subject: string
      category: $Enums.TicketCategory
      priority: $Enums.TicketPriority
      status: $Enums.TicketStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["ticket"]>
    composites: {}
  }

  type TicketGetPayload<S extends boolean | null | undefined | TicketDefaultArgs> = $Result.GetResult<Prisma.$TicketPayload, S>

  type TicketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TicketFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TicketCountAggregateInputType | true
    }

  export interface TicketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ticket'], meta: { name: 'Ticket' } }
    /**
     * Find zero or one Ticket that matches the filter.
     * @param {TicketFindUniqueArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TicketFindUniqueArgs>(args: SelectSubset<T, TicketFindUniqueArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ticket that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TicketFindUniqueOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TicketFindUniqueOrThrowArgs>(args: SelectSubset<T, TicketFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ticket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TicketFindFirstArgs>(args?: SelectSubset<T, TicketFindFirstArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ticket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TicketFindFirstOrThrowArgs>(args?: SelectSubset<T, TicketFindFirstOrThrowArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tickets
     * const tickets = await prisma.ticket.findMany()
     * 
     * // Get first 10 Tickets
     * const tickets = await prisma.ticket.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketWithIdOnly = await prisma.ticket.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TicketFindManyArgs>(args?: SelectSubset<T, TicketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ticket.
     * @param {TicketCreateArgs} args - Arguments to create a Ticket.
     * @example
     * // Create one Ticket
     * const Ticket = await prisma.ticket.create({
     *   data: {
     *     // ... data to create a Ticket
     *   }
     * })
     * 
     */
    create<T extends TicketCreateArgs>(args: SelectSubset<T, TicketCreateArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tickets.
     * @param {TicketCreateManyArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const ticket = await prisma.ticket.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TicketCreateManyArgs>(args?: SelectSubset<T, TicketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Ticket.
     * @param {TicketDeleteArgs} args - Arguments to delete one Ticket.
     * @example
     * // Delete one Ticket
     * const Ticket = await prisma.ticket.delete({
     *   where: {
     *     // ... filter to delete one Ticket
     *   }
     * })
     * 
     */
    delete<T extends TicketDeleteArgs>(args: SelectSubset<T, TicketDeleteArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ticket.
     * @param {TicketUpdateArgs} args - Arguments to update one Ticket.
     * @example
     * // Update one Ticket
     * const ticket = await prisma.ticket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TicketUpdateArgs>(args: SelectSubset<T, TicketUpdateArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tickets.
     * @param {TicketDeleteManyArgs} args - Arguments to filter Tickets to delete.
     * @example
     * // Delete a few Tickets
     * const { count } = await prisma.ticket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TicketDeleteManyArgs>(args?: SelectSubset<T, TicketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tickets
     * const ticket = await prisma.ticket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TicketUpdateManyArgs>(args: SelectSubset<T, TicketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Ticket.
     * @param {TicketUpsertArgs} args - Arguments to update or create a Ticket.
     * @example
     * // Update or create a Ticket
     * const ticket = await prisma.ticket.upsert({
     *   create: {
     *     // ... data to create a Ticket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ticket we want to update
     *   }
     * })
     */
    upsert<T extends TicketUpsertArgs>(args: SelectSubset<T, TicketUpsertArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tickets that matches the filter.
     * @param {TicketFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const ticket = await prisma.ticket.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: TicketFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Ticket.
     * @param {TicketAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const ticket = await prisma.ticket.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: TicketAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketCountArgs} args - Arguments to filter Tickets to count.
     * @example
     * // Count the number of Tickets
     * const count = await prisma.ticket.count({
     *   where: {
     *     // ... the filter for the Tickets we want to count
     *   }
     * })
    **/
    count<T extends TicketCountArgs>(
      args?: Subset<T, TicketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TicketAggregateArgs>(args: Subset<T, TicketAggregateArgs>): Prisma.PrismaPromise<GetTicketAggregateType<T>>

    /**
     * Group by Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketGroupByArgs} args - Group by arguments.
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
      T extends TicketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketGroupByArgs['orderBy'] }
        : { orderBy?: TicketGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TicketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ticket model
   */
  readonly fields: TicketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ticket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Ticket$userArgs<ExtArgs> = {}>(args?: Subset<T, Ticket$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    messages<T extends Ticket$messagesArgs<ExtArgs> = {}>(args?: Subset<T, Ticket$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Ticket model
   */
  interface TicketFieldRefs {
    readonly id: FieldRef<"Ticket", 'String'>
    readonly userId: FieldRef<"Ticket", 'String'>
    readonly subject: FieldRef<"Ticket", 'String'>
    readonly category: FieldRef<"Ticket", 'TicketCategory'>
    readonly priority: FieldRef<"Ticket", 'TicketPriority'>
    readonly status: FieldRef<"Ticket", 'TicketStatus'>
    readonly createdAt: FieldRef<"Ticket", 'DateTime'>
    readonly updatedAt: FieldRef<"Ticket", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Ticket findUnique
   */
  export type TicketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket findUniqueOrThrow
   */
  export type TicketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket findFirst
   */
  export type TicketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket findFirstOrThrow
   */
  export type TicketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket findMany
   */
  export type TicketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Tickets to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket create
   */
  export type TicketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The data needed to create a Ticket.
     */
    data: XOR<TicketCreateInput, TicketUncheckedCreateInput>
  }

  /**
   * Ticket createMany
   */
  export type TicketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tickets.
     */
    data: TicketCreateManyInput | TicketCreateManyInput[]
  }

  /**
   * Ticket update
   */
  export type TicketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The data needed to update a Ticket.
     */
    data: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
    /**
     * Choose, which Ticket to update.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket updateMany
   */
  export type TicketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tickets.
     */
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyInput>
    /**
     * Filter which Tickets to update
     */
    where?: TicketWhereInput
    /**
     * Limit how many Tickets to update.
     */
    limit?: number
  }

  /**
   * Ticket upsert
   */
  export type TicketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The filter to search for the Ticket to update in case it exists.
     */
    where: TicketWhereUniqueInput
    /**
     * In case the Ticket found by the `where` argument doesn't exist, create a new Ticket with this data.
     */
    create: XOR<TicketCreateInput, TicketUncheckedCreateInput>
    /**
     * In case the Ticket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
  }

  /**
   * Ticket delete
   */
  export type TicketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter which Ticket to delete.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket deleteMany
   */
  export type TicketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tickets to delete
     */
    where?: TicketWhereInput
    /**
     * Limit how many Tickets to delete.
     */
    limit?: number
  }

  /**
   * Ticket findRaw
   */
  export type TicketFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Ticket aggregateRaw
   */
  export type TicketAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Ticket.user
   */
  export type Ticket$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Ticket.messages
   */
  export type Ticket$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketMessage
     */
    select?: TicketMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketMessage
     */
    omit?: TicketMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketMessageInclude<ExtArgs> | null
    where?: TicketMessageWhereInput
    orderBy?: TicketMessageOrderByWithRelationInput | TicketMessageOrderByWithRelationInput[]
    cursor?: TicketMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketMessageScalarFieldEnum | TicketMessageScalarFieldEnum[]
  }

  /**
   * Ticket without action
   */
  export type TicketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
  }


  /**
   * Model TicketMessage
   */

  export type AggregateTicketMessage = {
    _count: TicketMessageCountAggregateOutputType | null
    _min: TicketMessageMinAggregateOutputType | null
    _max: TicketMessageMaxAggregateOutputType | null
  }

  export type TicketMessageMinAggregateOutputType = {
    id: string | null
    ticketId: string | null
    authorId: string | null
    body: string | null
    isStaff: boolean | null
    createdAt: Date | null
  }

  export type TicketMessageMaxAggregateOutputType = {
    id: string | null
    ticketId: string | null
    authorId: string | null
    body: string | null
    isStaff: boolean | null
    createdAt: Date | null
  }

  export type TicketMessageCountAggregateOutputType = {
    id: number
    ticketId: number
    authorId: number
    body: number
    isStaff: number
    createdAt: number
    _all: number
  }


  export type TicketMessageMinAggregateInputType = {
    id?: true
    ticketId?: true
    authorId?: true
    body?: true
    isStaff?: true
    createdAt?: true
  }

  export type TicketMessageMaxAggregateInputType = {
    id?: true
    ticketId?: true
    authorId?: true
    body?: true
    isStaff?: true
    createdAt?: true
  }

  export type TicketMessageCountAggregateInputType = {
    id?: true
    ticketId?: true
    authorId?: true
    body?: true
    isStaff?: true
    createdAt?: true
    _all?: true
  }

  export type TicketMessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TicketMessage to aggregate.
     */
    where?: TicketMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketMessages to fetch.
     */
    orderBy?: TicketMessageOrderByWithRelationInput | TicketMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TicketMessages
    **/
    _count?: true | TicketMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketMessageMaxAggregateInputType
  }

  export type GetTicketMessageAggregateType<T extends TicketMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateTicketMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicketMessage[P]>
      : GetScalarType<T[P], AggregateTicketMessage[P]>
  }




  export type TicketMessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketMessageWhereInput
    orderBy?: TicketMessageOrderByWithAggregationInput | TicketMessageOrderByWithAggregationInput[]
    by: TicketMessageScalarFieldEnum[] | TicketMessageScalarFieldEnum
    having?: TicketMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketMessageCountAggregateInputType | true
    _min?: TicketMessageMinAggregateInputType
    _max?: TicketMessageMaxAggregateInputType
  }

  export type TicketMessageGroupByOutputType = {
    id: string
    ticketId: string
    authorId: string
    body: string
    isStaff: boolean
    createdAt: Date
    _count: TicketMessageCountAggregateOutputType | null
    _min: TicketMessageMinAggregateOutputType | null
    _max: TicketMessageMaxAggregateOutputType | null
  }

  type GetTicketMessageGroupByPayload<T extends TicketMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketMessageGroupByOutputType[P]>
            : GetScalarType<T[P], TicketMessageGroupByOutputType[P]>
        }
      >
    >


  export type TicketMessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ticketId?: boolean
    authorId?: boolean
    body?: boolean
    isStaff?: boolean
    createdAt?: boolean
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticketMessage"]>



  export type TicketMessageSelectScalar = {
    id?: boolean
    ticketId?: boolean
    authorId?: boolean
    body?: boolean
    isStaff?: boolean
    createdAt?: boolean
  }

  export type TicketMessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ticketId" | "authorId" | "body" | "isStaff" | "createdAt", ExtArgs["result"]["ticketMessage"]>
  export type TicketMessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticket?: boolean | TicketDefaultArgs<ExtArgs>
  }

  export type $TicketMessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TicketMessage"
    objects: {
      ticket: Prisma.$TicketPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ticketId: string
      authorId: string
      body: string
      isStaff: boolean
      createdAt: Date
    }, ExtArgs["result"]["ticketMessage"]>
    composites: {}
  }

  type TicketMessageGetPayload<S extends boolean | null | undefined | TicketMessageDefaultArgs> = $Result.GetResult<Prisma.$TicketMessagePayload, S>

  type TicketMessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TicketMessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TicketMessageCountAggregateInputType | true
    }

  export interface TicketMessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TicketMessage'], meta: { name: 'TicketMessage' } }
    /**
     * Find zero or one TicketMessage that matches the filter.
     * @param {TicketMessageFindUniqueArgs} args - Arguments to find a TicketMessage
     * @example
     * // Get one TicketMessage
     * const ticketMessage = await prisma.ticketMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TicketMessageFindUniqueArgs>(args: SelectSubset<T, TicketMessageFindUniqueArgs<ExtArgs>>): Prisma__TicketMessageClient<$Result.GetResult<Prisma.$TicketMessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TicketMessage that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TicketMessageFindUniqueOrThrowArgs} args - Arguments to find a TicketMessage
     * @example
     * // Get one TicketMessage
     * const ticketMessage = await prisma.ticketMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TicketMessageFindUniqueOrThrowArgs>(args: SelectSubset<T, TicketMessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TicketMessageClient<$Result.GetResult<Prisma.$TicketMessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TicketMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketMessageFindFirstArgs} args - Arguments to find a TicketMessage
     * @example
     * // Get one TicketMessage
     * const ticketMessage = await prisma.ticketMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TicketMessageFindFirstArgs>(args?: SelectSubset<T, TicketMessageFindFirstArgs<ExtArgs>>): Prisma__TicketMessageClient<$Result.GetResult<Prisma.$TicketMessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TicketMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketMessageFindFirstOrThrowArgs} args - Arguments to find a TicketMessage
     * @example
     * // Get one TicketMessage
     * const ticketMessage = await prisma.ticketMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TicketMessageFindFirstOrThrowArgs>(args?: SelectSubset<T, TicketMessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__TicketMessageClient<$Result.GetResult<Prisma.$TicketMessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TicketMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketMessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TicketMessages
     * const ticketMessages = await prisma.ticketMessage.findMany()
     * 
     * // Get first 10 TicketMessages
     * const ticketMessages = await prisma.ticketMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketMessageWithIdOnly = await prisma.ticketMessage.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TicketMessageFindManyArgs>(args?: SelectSubset<T, TicketMessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketMessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TicketMessage.
     * @param {TicketMessageCreateArgs} args - Arguments to create a TicketMessage.
     * @example
     * // Create one TicketMessage
     * const TicketMessage = await prisma.ticketMessage.create({
     *   data: {
     *     // ... data to create a TicketMessage
     *   }
     * })
     * 
     */
    create<T extends TicketMessageCreateArgs>(args: SelectSubset<T, TicketMessageCreateArgs<ExtArgs>>): Prisma__TicketMessageClient<$Result.GetResult<Prisma.$TicketMessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TicketMessages.
     * @param {TicketMessageCreateManyArgs} args - Arguments to create many TicketMessages.
     * @example
     * // Create many TicketMessages
     * const ticketMessage = await prisma.ticketMessage.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TicketMessageCreateManyArgs>(args?: SelectSubset<T, TicketMessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TicketMessage.
     * @param {TicketMessageDeleteArgs} args - Arguments to delete one TicketMessage.
     * @example
     * // Delete one TicketMessage
     * const TicketMessage = await prisma.ticketMessage.delete({
     *   where: {
     *     // ... filter to delete one TicketMessage
     *   }
     * })
     * 
     */
    delete<T extends TicketMessageDeleteArgs>(args: SelectSubset<T, TicketMessageDeleteArgs<ExtArgs>>): Prisma__TicketMessageClient<$Result.GetResult<Prisma.$TicketMessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TicketMessage.
     * @param {TicketMessageUpdateArgs} args - Arguments to update one TicketMessage.
     * @example
     * // Update one TicketMessage
     * const ticketMessage = await prisma.ticketMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TicketMessageUpdateArgs>(args: SelectSubset<T, TicketMessageUpdateArgs<ExtArgs>>): Prisma__TicketMessageClient<$Result.GetResult<Prisma.$TicketMessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TicketMessages.
     * @param {TicketMessageDeleteManyArgs} args - Arguments to filter TicketMessages to delete.
     * @example
     * // Delete a few TicketMessages
     * const { count } = await prisma.ticketMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TicketMessageDeleteManyArgs>(args?: SelectSubset<T, TicketMessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TicketMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TicketMessages
     * const ticketMessage = await prisma.ticketMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TicketMessageUpdateManyArgs>(args: SelectSubset<T, TicketMessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TicketMessage.
     * @param {TicketMessageUpsertArgs} args - Arguments to update or create a TicketMessage.
     * @example
     * // Update or create a TicketMessage
     * const ticketMessage = await prisma.ticketMessage.upsert({
     *   create: {
     *     // ... data to create a TicketMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TicketMessage we want to update
     *   }
     * })
     */
    upsert<T extends TicketMessageUpsertArgs>(args: SelectSubset<T, TicketMessageUpsertArgs<ExtArgs>>): Prisma__TicketMessageClient<$Result.GetResult<Prisma.$TicketMessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TicketMessages that matches the filter.
     * @param {TicketMessageFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const ticketMessage = await prisma.ticketMessage.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: TicketMessageFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a TicketMessage.
     * @param {TicketMessageAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const ticketMessage = await prisma.ticketMessage.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: TicketMessageAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of TicketMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketMessageCountArgs} args - Arguments to filter TicketMessages to count.
     * @example
     * // Count the number of TicketMessages
     * const count = await prisma.ticketMessage.count({
     *   where: {
     *     // ... the filter for the TicketMessages we want to count
     *   }
     * })
    **/
    count<T extends TicketMessageCountArgs>(
      args?: Subset<T, TicketMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TicketMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TicketMessageAggregateArgs>(args: Subset<T, TicketMessageAggregateArgs>): Prisma.PrismaPromise<GetTicketMessageAggregateType<T>>

    /**
     * Group by TicketMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketMessageGroupByArgs} args - Group by arguments.
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
      T extends TicketMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketMessageGroupByArgs['orderBy'] }
        : { orderBy?: TicketMessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TicketMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TicketMessage model
   */
  readonly fields: TicketMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TicketMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketMessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ticket<T extends TicketDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TicketDefaultArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TicketMessage model
   */
  interface TicketMessageFieldRefs {
    readonly id: FieldRef<"TicketMessage", 'String'>
    readonly ticketId: FieldRef<"TicketMessage", 'String'>
    readonly authorId: FieldRef<"TicketMessage", 'String'>
    readonly body: FieldRef<"TicketMessage", 'String'>
    readonly isStaff: FieldRef<"TicketMessage", 'Boolean'>
    readonly createdAt: FieldRef<"TicketMessage", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TicketMessage findUnique
   */
  export type TicketMessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketMessage
     */
    select?: TicketMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketMessage
     */
    omit?: TicketMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketMessageInclude<ExtArgs> | null
    /**
     * Filter, which TicketMessage to fetch.
     */
    where: TicketMessageWhereUniqueInput
  }

  /**
   * TicketMessage findUniqueOrThrow
   */
  export type TicketMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketMessage
     */
    select?: TicketMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketMessage
     */
    omit?: TicketMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketMessageInclude<ExtArgs> | null
    /**
     * Filter, which TicketMessage to fetch.
     */
    where: TicketMessageWhereUniqueInput
  }

  /**
   * TicketMessage findFirst
   */
  export type TicketMessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketMessage
     */
    select?: TicketMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketMessage
     */
    omit?: TicketMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketMessageInclude<ExtArgs> | null
    /**
     * Filter, which TicketMessage to fetch.
     */
    where?: TicketMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketMessages to fetch.
     */
    orderBy?: TicketMessageOrderByWithRelationInput | TicketMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TicketMessages.
     */
    cursor?: TicketMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TicketMessages.
     */
    distinct?: TicketMessageScalarFieldEnum | TicketMessageScalarFieldEnum[]
  }

  /**
   * TicketMessage findFirstOrThrow
   */
  export type TicketMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketMessage
     */
    select?: TicketMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketMessage
     */
    omit?: TicketMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketMessageInclude<ExtArgs> | null
    /**
     * Filter, which TicketMessage to fetch.
     */
    where?: TicketMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketMessages to fetch.
     */
    orderBy?: TicketMessageOrderByWithRelationInput | TicketMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TicketMessages.
     */
    cursor?: TicketMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TicketMessages.
     */
    distinct?: TicketMessageScalarFieldEnum | TicketMessageScalarFieldEnum[]
  }

  /**
   * TicketMessage findMany
   */
  export type TicketMessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketMessage
     */
    select?: TicketMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketMessage
     */
    omit?: TicketMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketMessageInclude<ExtArgs> | null
    /**
     * Filter, which TicketMessages to fetch.
     */
    where?: TicketMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TicketMessages to fetch.
     */
    orderBy?: TicketMessageOrderByWithRelationInput | TicketMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TicketMessages.
     */
    cursor?: TicketMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TicketMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TicketMessages.
     */
    skip?: number
    distinct?: TicketMessageScalarFieldEnum | TicketMessageScalarFieldEnum[]
  }

  /**
   * TicketMessage create
   */
  export type TicketMessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketMessage
     */
    select?: TicketMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketMessage
     */
    omit?: TicketMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a TicketMessage.
     */
    data: XOR<TicketMessageCreateInput, TicketMessageUncheckedCreateInput>
  }

  /**
   * TicketMessage createMany
   */
  export type TicketMessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TicketMessages.
     */
    data: TicketMessageCreateManyInput | TicketMessageCreateManyInput[]
  }

  /**
   * TicketMessage update
   */
  export type TicketMessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketMessage
     */
    select?: TicketMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketMessage
     */
    omit?: TicketMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a TicketMessage.
     */
    data: XOR<TicketMessageUpdateInput, TicketMessageUncheckedUpdateInput>
    /**
     * Choose, which TicketMessage to update.
     */
    where: TicketMessageWhereUniqueInput
  }

  /**
   * TicketMessage updateMany
   */
  export type TicketMessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TicketMessages.
     */
    data: XOR<TicketMessageUpdateManyMutationInput, TicketMessageUncheckedUpdateManyInput>
    /**
     * Filter which TicketMessages to update
     */
    where?: TicketMessageWhereInput
    /**
     * Limit how many TicketMessages to update.
     */
    limit?: number
  }

  /**
   * TicketMessage upsert
   */
  export type TicketMessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketMessage
     */
    select?: TicketMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketMessage
     */
    omit?: TicketMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the TicketMessage to update in case it exists.
     */
    where: TicketMessageWhereUniqueInput
    /**
     * In case the TicketMessage found by the `where` argument doesn't exist, create a new TicketMessage with this data.
     */
    create: XOR<TicketMessageCreateInput, TicketMessageUncheckedCreateInput>
    /**
     * In case the TicketMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketMessageUpdateInput, TicketMessageUncheckedUpdateInput>
  }

  /**
   * TicketMessage delete
   */
  export type TicketMessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketMessage
     */
    select?: TicketMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketMessage
     */
    omit?: TicketMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketMessageInclude<ExtArgs> | null
    /**
     * Filter which TicketMessage to delete.
     */
    where: TicketMessageWhereUniqueInput
  }

  /**
   * TicketMessage deleteMany
   */
  export type TicketMessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TicketMessages to delete
     */
    where?: TicketMessageWhereInput
    /**
     * Limit how many TicketMessages to delete.
     */
    limit?: number
  }

  /**
   * TicketMessage findRaw
   */
  export type TicketMessageFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * TicketMessage aggregateRaw
   */
  export type TicketMessageAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * TicketMessage without action
   */
  export type TicketMessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketMessage
     */
    select?: TicketMessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TicketMessage
     */
    omit?: TicketMessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketMessageInclude<ExtArgs> | null
  }


  /**
   * Model Prediction
   */

  export type AggregatePrediction = {
    _count: PredictionCountAggregateOutputType | null
    _avg: PredictionAvgAggregateOutputType | null
    _sum: PredictionSumAggregateOutputType | null
    _min: PredictionMinAggregateOutputType | null
    _max: PredictionMaxAggregateOutputType | null
  }

  export type PredictionAvgAggregateOutputType = {
    fixtureId: number | null
    leagueId: number | null
    predictedHome: number | null
    predictedAway: number | null
    impliedOdds: number | null
    actualHome: number | null
    actualAway: number | null
  }

  export type PredictionSumAggregateOutputType = {
    fixtureId: number | null
    leagueId: number | null
    predictedHome: number | null
    predictedAway: number | null
    impliedOdds: number | null
    actualHome: number | null
    actualAway: number | null
  }

  export type PredictionMinAggregateOutputType = {
    id: string | null
    fixtureId: number | null
    leagueId: number | null
    leagueSlug: string | null
    date: Date | null
    homeTeam: string | null
    awayTeam: string | null
    predictedHome: number | null
    predictedAway: number | null
    pick: string | null
    impliedOdds: number | null
    status: string | null
    actualHome: number | null
    actualAway: number | null
    outcome: string | null
    exactHit: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PredictionMaxAggregateOutputType = {
    id: string | null
    fixtureId: number | null
    leagueId: number | null
    leagueSlug: string | null
    date: Date | null
    homeTeam: string | null
    awayTeam: string | null
    predictedHome: number | null
    predictedAway: number | null
    pick: string | null
    impliedOdds: number | null
    status: string | null
    actualHome: number | null
    actualAway: number | null
    outcome: string | null
    exactHit: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PredictionCountAggregateOutputType = {
    id: number
    fixtureId: number
    leagueId: number
    leagueSlug: number
    date: number
    homeTeam: number
    awayTeam: number
    predictedHome: number
    predictedAway: number
    pick: number
    impliedOdds: number
    status: number
    actualHome: number
    actualAway: number
    outcome: number
    exactHit: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PredictionAvgAggregateInputType = {
    fixtureId?: true
    leagueId?: true
    predictedHome?: true
    predictedAway?: true
    impliedOdds?: true
    actualHome?: true
    actualAway?: true
  }

  export type PredictionSumAggregateInputType = {
    fixtureId?: true
    leagueId?: true
    predictedHome?: true
    predictedAway?: true
    impliedOdds?: true
    actualHome?: true
    actualAway?: true
  }

  export type PredictionMinAggregateInputType = {
    id?: true
    fixtureId?: true
    leagueId?: true
    leagueSlug?: true
    date?: true
    homeTeam?: true
    awayTeam?: true
    predictedHome?: true
    predictedAway?: true
    pick?: true
    impliedOdds?: true
    status?: true
    actualHome?: true
    actualAway?: true
    outcome?: true
    exactHit?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PredictionMaxAggregateInputType = {
    id?: true
    fixtureId?: true
    leagueId?: true
    leagueSlug?: true
    date?: true
    homeTeam?: true
    awayTeam?: true
    predictedHome?: true
    predictedAway?: true
    pick?: true
    impliedOdds?: true
    status?: true
    actualHome?: true
    actualAway?: true
    outcome?: true
    exactHit?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PredictionCountAggregateInputType = {
    id?: true
    fixtureId?: true
    leagueId?: true
    leagueSlug?: true
    date?: true
    homeTeam?: true
    awayTeam?: true
    predictedHome?: true
    predictedAway?: true
    pick?: true
    impliedOdds?: true
    status?: true
    actualHome?: true
    actualAway?: true
    outcome?: true
    exactHit?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PredictionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Prediction to aggregate.
     */
    where?: PredictionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Predictions to fetch.
     */
    orderBy?: PredictionOrderByWithRelationInput | PredictionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PredictionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Predictions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Predictions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Predictions
    **/
    _count?: true | PredictionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PredictionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PredictionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PredictionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PredictionMaxAggregateInputType
  }

  export type GetPredictionAggregateType<T extends PredictionAggregateArgs> = {
        [P in keyof T & keyof AggregatePrediction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePrediction[P]>
      : GetScalarType<T[P], AggregatePrediction[P]>
  }




  export type PredictionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PredictionWhereInput
    orderBy?: PredictionOrderByWithAggregationInput | PredictionOrderByWithAggregationInput[]
    by: PredictionScalarFieldEnum[] | PredictionScalarFieldEnum
    having?: PredictionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PredictionCountAggregateInputType | true
    _avg?: PredictionAvgAggregateInputType
    _sum?: PredictionSumAggregateInputType
    _min?: PredictionMinAggregateInputType
    _max?: PredictionMaxAggregateInputType
  }

  export type PredictionGroupByOutputType = {
    id: string
    fixtureId: number
    leagueId: number
    leagueSlug: string
    date: Date
    homeTeam: string
    awayTeam: string
    predictedHome: number
    predictedAway: number
    pick: string
    impliedOdds: number | null
    status: string | null
    actualHome: number | null
    actualAway: number | null
    outcome: string | null
    exactHit: boolean
    createdAt: Date
    updatedAt: Date
    _count: PredictionCountAggregateOutputType | null
    _avg: PredictionAvgAggregateOutputType | null
    _sum: PredictionSumAggregateOutputType | null
    _min: PredictionMinAggregateOutputType | null
    _max: PredictionMaxAggregateOutputType | null
  }

  type GetPredictionGroupByPayload<T extends PredictionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PredictionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PredictionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PredictionGroupByOutputType[P]>
            : GetScalarType<T[P], PredictionGroupByOutputType[P]>
        }
      >
    >


  export type PredictionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fixtureId?: boolean
    leagueId?: boolean
    leagueSlug?: boolean
    date?: boolean
    homeTeam?: boolean
    awayTeam?: boolean
    predictedHome?: boolean
    predictedAway?: boolean
    pick?: boolean
    impliedOdds?: boolean
    status?: boolean
    actualHome?: boolean
    actualAway?: boolean
    outcome?: boolean
    exactHit?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["prediction"]>



  export type PredictionSelectScalar = {
    id?: boolean
    fixtureId?: boolean
    leagueId?: boolean
    leagueSlug?: boolean
    date?: boolean
    homeTeam?: boolean
    awayTeam?: boolean
    predictedHome?: boolean
    predictedAway?: boolean
    pick?: boolean
    impliedOdds?: boolean
    status?: boolean
    actualHome?: boolean
    actualAway?: boolean
    outcome?: boolean
    exactHit?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PredictionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fixtureId" | "leagueId" | "leagueSlug" | "date" | "homeTeam" | "awayTeam" | "predictedHome" | "predictedAway" | "pick" | "impliedOdds" | "status" | "actualHome" | "actualAway" | "outcome" | "exactHit" | "createdAt" | "updatedAt", ExtArgs["result"]["prediction"]>

  export type $PredictionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Prediction"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fixtureId: number
      leagueId: number
      leagueSlug: string
      date: Date
      homeTeam: string
      awayTeam: string
      predictedHome: number
      predictedAway: number
      pick: string
      impliedOdds: number | null
      status: string | null
      actualHome: number | null
      actualAway: number | null
      outcome: string | null
      exactHit: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["prediction"]>
    composites: {}
  }

  type PredictionGetPayload<S extends boolean | null | undefined | PredictionDefaultArgs> = $Result.GetResult<Prisma.$PredictionPayload, S>

  type PredictionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PredictionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PredictionCountAggregateInputType | true
    }

  export interface PredictionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Prediction'], meta: { name: 'Prediction' } }
    /**
     * Find zero or one Prediction that matches the filter.
     * @param {PredictionFindUniqueArgs} args - Arguments to find a Prediction
     * @example
     * // Get one Prediction
     * const prediction = await prisma.prediction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PredictionFindUniqueArgs>(args: SelectSubset<T, PredictionFindUniqueArgs<ExtArgs>>): Prisma__PredictionClient<$Result.GetResult<Prisma.$PredictionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Prediction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PredictionFindUniqueOrThrowArgs} args - Arguments to find a Prediction
     * @example
     * // Get one Prediction
     * const prediction = await prisma.prediction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PredictionFindUniqueOrThrowArgs>(args: SelectSubset<T, PredictionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PredictionClient<$Result.GetResult<Prisma.$PredictionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prediction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PredictionFindFirstArgs} args - Arguments to find a Prediction
     * @example
     * // Get one Prediction
     * const prediction = await prisma.prediction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PredictionFindFirstArgs>(args?: SelectSubset<T, PredictionFindFirstArgs<ExtArgs>>): Prisma__PredictionClient<$Result.GetResult<Prisma.$PredictionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Prediction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PredictionFindFirstOrThrowArgs} args - Arguments to find a Prediction
     * @example
     * // Get one Prediction
     * const prediction = await prisma.prediction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PredictionFindFirstOrThrowArgs>(args?: SelectSubset<T, PredictionFindFirstOrThrowArgs<ExtArgs>>): Prisma__PredictionClient<$Result.GetResult<Prisma.$PredictionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Predictions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PredictionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Predictions
     * const predictions = await prisma.prediction.findMany()
     * 
     * // Get first 10 Predictions
     * const predictions = await prisma.prediction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const predictionWithIdOnly = await prisma.prediction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PredictionFindManyArgs>(args?: SelectSubset<T, PredictionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PredictionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Prediction.
     * @param {PredictionCreateArgs} args - Arguments to create a Prediction.
     * @example
     * // Create one Prediction
     * const Prediction = await prisma.prediction.create({
     *   data: {
     *     // ... data to create a Prediction
     *   }
     * })
     * 
     */
    create<T extends PredictionCreateArgs>(args: SelectSubset<T, PredictionCreateArgs<ExtArgs>>): Prisma__PredictionClient<$Result.GetResult<Prisma.$PredictionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Predictions.
     * @param {PredictionCreateManyArgs} args - Arguments to create many Predictions.
     * @example
     * // Create many Predictions
     * const prediction = await prisma.prediction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PredictionCreateManyArgs>(args?: SelectSubset<T, PredictionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Prediction.
     * @param {PredictionDeleteArgs} args - Arguments to delete one Prediction.
     * @example
     * // Delete one Prediction
     * const Prediction = await prisma.prediction.delete({
     *   where: {
     *     // ... filter to delete one Prediction
     *   }
     * })
     * 
     */
    delete<T extends PredictionDeleteArgs>(args: SelectSubset<T, PredictionDeleteArgs<ExtArgs>>): Prisma__PredictionClient<$Result.GetResult<Prisma.$PredictionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Prediction.
     * @param {PredictionUpdateArgs} args - Arguments to update one Prediction.
     * @example
     * // Update one Prediction
     * const prediction = await prisma.prediction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PredictionUpdateArgs>(args: SelectSubset<T, PredictionUpdateArgs<ExtArgs>>): Prisma__PredictionClient<$Result.GetResult<Prisma.$PredictionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Predictions.
     * @param {PredictionDeleteManyArgs} args - Arguments to filter Predictions to delete.
     * @example
     * // Delete a few Predictions
     * const { count } = await prisma.prediction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PredictionDeleteManyArgs>(args?: SelectSubset<T, PredictionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Predictions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PredictionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Predictions
     * const prediction = await prisma.prediction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PredictionUpdateManyArgs>(args: SelectSubset<T, PredictionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Prediction.
     * @param {PredictionUpsertArgs} args - Arguments to update or create a Prediction.
     * @example
     * // Update or create a Prediction
     * const prediction = await prisma.prediction.upsert({
     *   create: {
     *     // ... data to create a Prediction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Prediction we want to update
     *   }
     * })
     */
    upsert<T extends PredictionUpsertArgs>(args: SelectSubset<T, PredictionUpsertArgs<ExtArgs>>): Prisma__PredictionClient<$Result.GetResult<Prisma.$PredictionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Predictions that matches the filter.
     * @param {PredictionFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const prediction = await prisma.prediction.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: PredictionFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Prediction.
     * @param {PredictionAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const prediction = await prisma.prediction.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: PredictionAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Predictions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PredictionCountArgs} args - Arguments to filter Predictions to count.
     * @example
     * // Count the number of Predictions
     * const count = await prisma.prediction.count({
     *   where: {
     *     // ... the filter for the Predictions we want to count
     *   }
     * })
    **/
    count<T extends PredictionCountArgs>(
      args?: Subset<T, PredictionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PredictionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Prediction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PredictionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PredictionAggregateArgs>(args: Subset<T, PredictionAggregateArgs>): Prisma.PrismaPromise<GetPredictionAggregateType<T>>

    /**
     * Group by Prediction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PredictionGroupByArgs} args - Group by arguments.
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
      T extends PredictionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PredictionGroupByArgs['orderBy'] }
        : { orderBy?: PredictionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PredictionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPredictionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Prediction model
   */
  readonly fields: PredictionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Prediction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PredictionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Prediction model
   */
  interface PredictionFieldRefs {
    readonly id: FieldRef<"Prediction", 'String'>
    readonly fixtureId: FieldRef<"Prediction", 'Int'>
    readonly leagueId: FieldRef<"Prediction", 'Int'>
    readonly leagueSlug: FieldRef<"Prediction", 'String'>
    readonly date: FieldRef<"Prediction", 'DateTime'>
    readonly homeTeam: FieldRef<"Prediction", 'String'>
    readonly awayTeam: FieldRef<"Prediction", 'String'>
    readonly predictedHome: FieldRef<"Prediction", 'Int'>
    readonly predictedAway: FieldRef<"Prediction", 'Int'>
    readonly pick: FieldRef<"Prediction", 'String'>
    readonly impliedOdds: FieldRef<"Prediction", 'Float'>
    readonly status: FieldRef<"Prediction", 'String'>
    readonly actualHome: FieldRef<"Prediction", 'Int'>
    readonly actualAway: FieldRef<"Prediction", 'Int'>
    readonly outcome: FieldRef<"Prediction", 'String'>
    readonly exactHit: FieldRef<"Prediction", 'Boolean'>
    readonly createdAt: FieldRef<"Prediction", 'DateTime'>
    readonly updatedAt: FieldRef<"Prediction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Prediction findUnique
   */
  export type PredictionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prediction
     */
    select?: PredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prediction
     */
    omit?: PredictionOmit<ExtArgs> | null
    /**
     * Filter, which Prediction to fetch.
     */
    where: PredictionWhereUniqueInput
  }

  /**
   * Prediction findUniqueOrThrow
   */
  export type PredictionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prediction
     */
    select?: PredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prediction
     */
    omit?: PredictionOmit<ExtArgs> | null
    /**
     * Filter, which Prediction to fetch.
     */
    where: PredictionWhereUniqueInput
  }

  /**
   * Prediction findFirst
   */
  export type PredictionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prediction
     */
    select?: PredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prediction
     */
    omit?: PredictionOmit<ExtArgs> | null
    /**
     * Filter, which Prediction to fetch.
     */
    where?: PredictionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Predictions to fetch.
     */
    orderBy?: PredictionOrderByWithRelationInput | PredictionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Predictions.
     */
    cursor?: PredictionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Predictions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Predictions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Predictions.
     */
    distinct?: PredictionScalarFieldEnum | PredictionScalarFieldEnum[]
  }

  /**
   * Prediction findFirstOrThrow
   */
  export type PredictionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prediction
     */
    select?: PredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prediction
     */
    omit?: PredictionOmit<ExtArgs> | null
    /**
     * Filter, which Prediction to fetch.
     */
    where?: PredictionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Predictions to fetch.
     */
    orderBy?: PredictionOrderByWithRelationInput | PredictionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Predictions.
     */
    cursor?: PredictionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Predictions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Predictions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Predictions.
     */
    distinct?: PredictionScalarFieldEnum | PredictionScalarFieldEnum[]
  }

  /**
   * Prediction findMany
   */
  export type PredictionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prediction
     */
    select?: PredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prediction
     */
    omit?: PredictionOmit<ExtArgs> | null
    /**
     * Filter, which Predictions to fetch.
     */
    where?: PredictionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Predictions to fetch.
     */
    orderBy?: PredictionOrderByWithRelationInput | PredictionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Predictions.
     */
    cursor?: PredictionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Predictions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Predictions.
     */
    skip?: number
    distinct?: PredictionScalarFieldEnum | PredictionScalarFieldEnum[]
  }

  /**
   * Prediction create
   */
  export type PredictionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prediction
     */
    select?: PredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prediction
     */
    omit?: PredictionOmit<ExtArgs> | null
    /**
     * The data needed to create a Prediction.
     */
    data: XOR<PredictionCreateInput, PredictionUncheckedCreateInput>
  }

  /**
   * Prediction createMany
   */
  export type PredictionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Predictions.
     */
    data: PredictionCreateManyInput | PredictionCreateManyInput[]
  }

  /**
   * Prediction update
   */
  export type PredictionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prediction
     */
    select?: PredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prediction
     */
    omit?: PredictionOmit<ExtArgs> | null
    /**
     * The data needed to update a Prediction.
     */
    data: XOR<PredictionUpdateInput, PredictionUncheckedUpdateInput>
    /**
     * Choose, which Prediction to update.
     */
    where: PredictionWhereUniqueInput
  }

  /**
   * Prediction updateMany
   */
  export type PredictionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Predictions.
     */
    data: XOR<PredictionUpdateManyMutationInput, PredictionUncheckedUpdateManyInput>
    /**
     * Filter which Predictions to update
     */
    where?: PredictionWhereInput
    /**
     * Limit how many Predictions to update.
     */
    limit?: number
  }

  /**
   * Prediction upsert
   */
  export type PredictionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prediction
     */
    select?: PredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prediction
     */
    omit?: PredictionOmit<ExtArgs> | null
    /**
     * The filter to search for the Prediction to update in case it exists.
     */
    where: PredictionWhereUniqueInput
    /**
     * In case the Prediction found by the `where` argument doesn't exist, create a new Prediction with this data.
     */
    create: XOR<PredictionCreateInput, PredictionUncheckedCreateInput>
    /**
     * In case the Prediction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PredictionUpdateInput, PredictionUncheckedUpdateInput>
  }

  /**
   * Prediction delete
   */
  export type PredictionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prediction
     */
    select?: PredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prediction
     */
    omit?: PredictionOmit<ExtArgs> | null
    /**
     * Filter which Prediction to delete.
     */
    where: PredictionWhereUniqueInput
  }

  /**
   * Prediction deleteMany
   */
  export type PredictionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Predictions to delete
     */
    where?: PredictionWhereInput
    /**
     * Limit how many Predictions to delete.
     */
    limit?: number
  }

  /**
   * Prediction findRaw
   */
  export type PredictionFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Prediction aggregateRaw
   */
  export type PredictionAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Prediction without action
   */
  export type PredictionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Prediction
     */
    select?: PredictionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Prediction
     */
    omit?: PredictionOmit<ExtArgs> | null
  }


  /**
   * Model Affiliate
   */

  export type AggregateAffiliate = {
    _count: AffiliateCountAggregateOutputType | null
    _avg: AffiliateAvgAggregateOutputType | null
    _sum: AffiliateSumAggregateOutputType | null
    _min: AffiliateMinAggregateOutputType | null
    _max: AffiliateMaxAggregateOutputType | null
  }

  export type AffiliateAvgAggregateOutputType = {
    ratePct: number | null
    flatMinor: number | null
    clicks: number | null
    conversions: number | null
    lifetimeMinor: number | null
  }

  export type AffiliateSumAggregateOutputType = {
    ratePct: number | null
    flatMinor: number | null
    clicks: number | null
    conversions: number | null
    lifetimeMinor: number | null
  }

  export type AffiliateMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    email: string | null
    code: string | null
    ratePct: number | null
    flatMinor: number | null
    currency: string | null
    isActive: boolean | null
    clicks: number | null
    conversions: number | null
    lifetimeMinor: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AffiliateMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    email: string | null
    code: string | null
    ratePct: number | null
    flatMinor: number | null
    currency: string | null
    isActive: boolean | null
    clicks: number | null
    conversions: number | null
    lifetimeMinor: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AffiliateCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    email: number
    code: number
    ratePct: number
    flatMinor: number
    currency: number
    isActive: number
    clicks: number
    conversions: number
    lifetimeMinor: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AffiliateAvgAggregateInputType = {
    ratePct?: true
    flatMinor?: true
    clicks?: true
    conversions?: true
    lifetimeMinor?: true
  }

  export type AffiliateSumAggregateInputType = {
    ratePct?: true
    flatMinor?: true
    clicks?: true
    conversions?: true
    lifetimeMinor?: true
  }

  export type AffiliateMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    email?: true
    code?: true
    ratePct?: true
    flatMinor?: true
    currency?: true
    isActive?: true
    clicks?: true
    conversions?: true
    lifetimeMinor?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AffiliateMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    email?: true
    code?: true
    ratePct?: true
    flatMinor?: true
    currency?: true
    isActive?: true
    clicks?: true
    conversions?: true
    lifetimeMinor?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AffiliateCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    email?: true
    code?: true
    ratePct?: true
    flatMinor?: true
    currency?: true
    isActive?: true
    clicks?: true
    conversions?: true
    lifetimeMinor?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AffiliateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Affiliate to aggregate.
     */
    where?: AffiliateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Affiliates to fetch.
     */
    orderBy?: AffiliateOrderByWithRelationInput | AffiliateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AffiliateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Affiliates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Affiliates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Affiliates
    **/
    _count?: true | AffiliateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AffiliateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AffiliateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AffiliateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AffiliateMaxAggregateInputType
  }

  export type GetAffiliateAggregateType<T extends AffiliateAggregateArgs> = {
        [P in keyof T & keyof AggregateAffiliate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAffiliate[P]>
      : GetScalarType<T[P], AggregateAffiliate[P]>
  }




  export type AffiliateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AffiliateWhereInput
    orderBy?: AffiliateOrderByWithAggregationInput | AffiliateOrderByWithAggregationInput[]
    by: AffiliateScalarFieldEnum[] | AffiliateScalarFieldEnum
    having?: AffiliateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AffiliateCountAggregateInputType | true
    _avg?: AffiliateAvgAggregateInputType
    _sum?: AffiliateSumAggregateInputType
    _min?: AffiliateMinAggregateInputType
    _max?: AffiliateMaxAggregateInputType
  }

  export type AffiliateGroupByOutputType = {
    id: string
    userId: string | null
    name: string
    email: string | null
    code: string
    ratePct: number | null
    flatMinor: number | null
    currency: string | null
    isActive: boolean
    clicks: number
    conversions: number
    lifetimeMinor: number
    createdAt: Date
    updatedAt: Date
    _count: AffiliateCountAggregateOutputType | null
    _avg: AffiliateAvgAggregateOutputType | null
    _sum: AffiliateSumAggregateOutputType | null
    _min: AffiliateMinAggregateOutputType | null
    _max: AffiliateMaxAggregateOutputType | null
  }

  type GetAffiliateGroupByPayload<T extends AffiliateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AffiliateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AffiliateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AffiliateGroupByOutputType[P]>
            : GetScalarType<T[P], AffiliateGroupByOutputType[P]>
        }
      >
    >


  export type AffiliateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    email?: boolean
    code?: boolean
    ratePct?: boolean
    flatMinor?: boolean
    currency?: boolean
    isActive?: boolean
    clicks?: boolean
    conversions?: boolean
    lifetimeMinor?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | Affiliate$userArgs<ExtArgs>
    referralClicks?: boolean | Affiliate$referralClicksArgs<ExtArgs>
    commissions?: boolean | Affiliate$commissionsArgs<ExtArgs>
    payouts?: boolean | Affiliate$payoutsArgs<ExtArgs>
    _count?: boolean | AffiliateCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["affiliate"]>



  export type AffiliateSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    email?: boolean
    code?: boolean
    ratePct?: boolean
    flatMinor?: boolean
    currency?: boolean
    isActive?: boolean
    clicks?: boolean
    conversions?: boolean
    lifetimeMinor?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AffiliateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "email" | "code" | "ratePct" | "flatMinor" | "currency" | "isActive" | "clicks" | "conversions" | "lifetimeMinor" | "createdAt" | "updatedAt", ExtArgs["result"]["affiliate"]>
  export type AffiliateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Affiliate$userArgs<ExtArgs>
    referralClicks?: boolean | Affiliate$referralClicksArgs<ExtArgs>
    commissions?: boolean | Affiliate$commissionsArgs<ExtArgs>
    payouts?: boolean | Affiliate$payoutsArgs<ExtArgs>
    _count?: boolean | AffiliateCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AffiliatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Affiliate"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      referralClicks: Prisma.$ReferralClickPayload<ExtArgs>[]
      commissions: Prisma.$CommissionPayload<ExtArgs>[]
      payouts: Prisma.$PayoutPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string | null
      name: string
      email: string | null
      code: string
      ratePct: number | null
      flatMinor: number | null
      currency: string | null
      isActive: boolean
      clicks: number
      conversions: number
      lifetimeMinor: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["affiliate"]>
    composites: {}
  }

  type AffiliateGetPayload<S extends boolean | null | undefined | AffiliateDefaultArgs> = $Result.GetResult<Prisma.$AffiliatePayload, S>

  type AffiliateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AffiliateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AffiliateCountAggregateInputType | true
    }

  export interface AffiliateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Affiliate'], meta: { name: 'Affiliate' } }
    /**
     * Find zero or one Affiliate that matches the filter.
     * @param {AffiliateFindUniqueArgs} args - Arguments to find a Affiliate
     * @example
     * // Get one Affiliate
     * const affiliate = await prisma.affiliate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AffiliateFindUniqueArgs>(args: SelectSubset<T, AffiliateFindUniqueArgs<ExtArgs>>): Prisma__AffiliateClient<$Result.GetResult<Prisma.$AffiliatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Affiliate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AffiliateFindUniqueOrThrowArgs} args - Arguments to find a Affiliate
     * @example
     * // Get one Affiliate
     * const affiliate = await prisma.affiliate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AffiliateFindUniqueOrThrowArgs>(args: SelectSubset<T, AffiliateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AffiliateClient<$Result.GetResult<Prisma.$AffiliatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Affiliate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AffiliateFindFirstArgs} args - Arguments to find a Affiliate
     * @example
     * // Get one Affiliate
     * const affiliate = await prisma.affiliate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AffiliateFindFirstArgs>(args?: SelectSubset<T, AffiliateFindFirstArgs<ExtArgs>>): Prisma__AffiliateClient<$Result.GetResult<Prisma.$AffiliatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Affiliate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AffiliateFindFirstOrThrowArgs} args - Arguments to find a Affiliate
     * @example
     * // Get one Affiliate
     * const affiliate = await prisma.affiliate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AffiliateFindFirstOrThrowArgs>(args?: SelectSubset<T, AffiliateFindFirstOrThrowArgs<ExtArgs>>): Prisma__AffiliateClient<$Result.GetResult<Prisma.$AffiliatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Affiliates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AffiliateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Affiliates
     * const affiliates = await prisma.affiliate.findMany()
     * 
     * // Get first 10 Affiliates
     * const affiliates = await prisma.affiliate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const affiliateWithIdOnly = await prisma.affiliate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AffiliateFindManyArgs>(args?: SelectSubset<T, AffiliateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AffiliatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Affiliate.
     * @param {AffiliateCreateArgs} args - Arguments to create a Affiliate.
     * @example
     * // Create one Affiliate
     * const Affiliate = await prisma.affiliate.create({
     *   data: {
     *     // ... data to create a Affiliate
     *   }
     * })
     * 
     */
    create<T extends AffiliateCreateArgs>(args: SelectSubset<T, AffiliateCreateArgs<ExtArgs>>): Prisma__AffiliateClient<$Result.GetResult<Prisma.$AffiliatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Affiliates.
     * @param {AffiliateCreateManyArgs} args - Arguments to create many Affiliates.
     * @example
     * // Create many Affiliates
     * const affiliate = await prisma.affiliate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AffiliateCreateManyArgs>(args?: SelectSubset<T, AffiliateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Affiliate.
     * @param {AffiliateDeleteArgs} args - Arguments to delete one Affiliate.
     * @example
     * // Delete one Affiliate
     * const Affiliate = await prisma.affiliate.delete({
     *   where: {
     *     // ... filter to delete one Affiliate
     *   }
     * })
     * 
     */
    delete<T extends AffiliateDeleteArgs>(args: SelectSubset<T, AffiliateDeleteArgs<ExtArgs>>): Prisma__AffiliateClient<$Result.GetResult<Prisma.$AffiliatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Affiliate.
     * @param {AffiliateUpdateArgs} args - Arguments to update one Affiliate.
     * @example
     * // Update one Affiliate
     * const affiliate = await prisma.affiliate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AffiliateUpdateArgs>(args: SelectSubset<T, AffiliateUpdateArgs<ExtArgs>>): Prisma__AffiliateClient<$Result.GetResult<Prisma.$AffiliatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Affiliates.
     * @param {AffiliateDeleteManyArgs} args - Arguments to filter Affiliates to delete.
     * @example
     * // Delete a few Affiliates
     * const { count } = await prisma.affiliate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AffiliateDeleteManyArgs>(args?: SelectSubset<T, AffiliateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Affiliates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AffiliateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Affiliates
     * const affiliate = await prisma.affiliate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AffiliateUpdateManyArgs>(args: SelectSubset<T, AffiliateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Affiliate.
     * @param {AffiliateUpsertArgs} args - Arguments to update or create a Affiliate.
     * @example
     * // Update or create a Affiliate
     * const affiliate = await prisma.affiliate.upsert({
     *   create: {
     *     // ... data to create a Affiliate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Affiliate we want to update
     *   }
     * })
     */
    upsert<T extends AffiliateUpsertArgs>(args: SelectSubset<T, AffiliateUpsertArgs<ExtArgs>>): Prisma__AffiliateClient<$Result.GetResult<Prisma.$AffiliatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Affiliates that matches the filter.
     * @param {AffiliateFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const affiliate = await prisma.affiliate.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: AffiliateFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Affiliate.
     * @param {AffiliateAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const affiliate = await prisma.affiliate.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: AffiliateAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Affiliates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AffiliateCountArgs} args - Arguments to filter Affiliates to count.
     * @example
     * // Count the number of Affiliates
     * const count = await prisma.affiliate.count({
     *   where: {
     *     // ... the filter for the Affiliates we want to count
     *   }
     * })
    **/
    count<T extends AffiliateCountArgs>(
      args?: Subset<T, AffiliateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AffiliateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Affiliate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AffiliateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AffiliateAggregateArgs>(args: Subset<T, AffiliateAggregateArgs>): Prisma.PrismaPromise<GetAffiliateAggregateType<T>>

    /**
     * Group by Affiliate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AffiliateGroupByArgs} args - Group by arguments.
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
      T extends AffiliateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AffiliateGroupByArgs['orderBy'] }
        : { orderBy?: AffiliateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AffiliateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAffiliateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Affiliate model
   */
  readonly fields: AffiliateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Affiliate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AffiliateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Affiliate$userArgs<ExtArgs> = {}>(args?: Subset<T, Affiliate$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    referralClicks<T extends Affiliate$referralClicksArgs<ExtArgs> = {}>(args?: Subset<T, Affiliate$referralClicksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferralClickPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    commissions<T extends Affiliate$commissionsArgs<ExtArgs> = {}>(args?: Subset<T, Affiliate$commissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payouts<T extends Affiliate$payoutsArgs<ExtArgs> = {}>(args?: Subset<T, Affiliate$payoutsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayoutPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Affiliate model
   */
  interface AffiliateFieldRefs {
    readonly id: FieldRef<"Affiliate", 'String'>
    readonly userId: FieldRef<"Affiliate", 'String'>
    readonly name: FieldRef<"Affiliate", 'String'>
    readonly email: FieldRef<"Affiliate", 'String'>
    readonly code: FieldRef<"Affiliate", 'String'>
    readonly ratePct: FieldRef<"Affiliate", 'Float'>
    readonly flatMinor: FieldRef<"Affiliate", 'Int'>
    readonly currency: FieldRef<"Affiliate", 'String'>
    readonly isActive: FieldRef<"Affiliate", 'Boolean'>
    readonly clicks: FieldRef<"Affiliate", 'Int'>
    readonly conversions: FieldRef<"Affiliate", 'Int'>
    readonly lifetimeMinor: FieldRef<"Affiliate", 'Int'>
    readonly createdAt: FieldRef<"Affiliate", 'DateTime'>
    readonly updatedAt: FieldRef<"Affiliate", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Affiliate findUnique
   */
  export type AffiliateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Affiliate
     */
    select?: AffiliateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Affiliate
     */
    omit?: AffiliateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AffiliateInclude<ExtArgs> | null
    /**
     * Filter, which Affiliate to fetch.
     */
    where: AffiliateWhereUniqueInput
  }

  /**
   * Affiliate findUniqueOrThrow
   */
  export type AffiliateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Affiliate
     */
    select?: AffiliateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Affiliate
     */
    omit?: AffiliateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AffiliateInclude<ExtArgs> | null
    /**
     * Filter, which Affiliate to fetch.
     */
    where: AffiliateWhereUniqueInput
  }

  /**
   * Affiliate findFirst
   */
  export type AffiliateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Affiliate
     */
    select?: AffiliateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Affiliate
     */
    omit?: AffiliateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AffiliateInclude<ExtArgs> | null
    /**
     * Filter, which Affiliate to fetch.
     */
    where?: AffiliateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Affiliates to fetch.
     */
    orderBy?: AffiliateOrderByWithRelationInput | AffiliateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Affiliates.
     */
    cursor?: AffiliateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Affiliates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Affiliates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Affiliates.
     */
    distinct?: AffiliateScalarFieldEnum | AffiliateScalarFieldEnum[]
  }

  /**
   * Affiliate findFirstOrThrow
   */
  export type AffiliateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Affiliate
     */
    select?: AffiliateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Affiliate
     */
    omit?: AffiliateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AffiliateInclude<ExtArgs> | null
    /**
     * Filter, which Affiliate to fetch.
     */
    where?: AffiliateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Affiliates to fetch.
     */
    orderBy?: AffiliateOrderByWithRelationInput | AffiliateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Affiliates.
     */
    cursor?: AffiliateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Affiliates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Affiliates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Affiliates.
     */
    distinct?: AffiliateScalarFieldEnum | AffiliateScalarFieldEnum[]
  }

  /**
   * Affiliate findMany
   */
  export type AffiliateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Affiliate
     */
    select?: AffiliateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Affiliate
     */
    omit?: AffiliateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AffiliateInclude<ExtArgs> | null
    /**
     * Filter, which Affiliates to fetch.
     */
    where?: AffiliateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Affiliates to fetch.
     */
    orderBy?: AffiliateOrderByWithRelationInput | AffiliateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Affiliates.
     */
    cursor?: AffiliateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Affiliates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Affiliates.
     */
    skip?: number
    distinct?: AffiliateScalarFieldEnum | AffiliateScalarFieldEnum[]
  }

  /**
   * Affiliate create
   */
  export type AffiliateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Affiliate
     */
    select?: AffiliateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Affiliate
     */
    omit?: AffiliateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AffiliateInclude<ExtArgs> | null
    /**
     * The data needed to create a Affiliate.
     */
    data: XOR<AffiliateCreateInput, AffiliateUncheckedCreateInput>
  }

  /**
   * Affiliate createMany
   */
  export type AffiliateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Affiliates.
     */
    data: AffiliateCreateManyInput | AffiliateCreateManyInput[]
  }

  /**
   * Affiliate update
   */
  export type AffiliateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Affiliate
     */
    select?: AffiliateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Affiliate
     */
    omit?: AffiliateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AffiliateInclude<ExtArgs> | null
    /**
     * The data needed to update a Affiliate.
     */
    data: XOR<AffiliateUpdateInput, AffiliateUncheckedUpdateInput>
    /**
     * Choose, which Affiliate to update.
     */
    where: AffiliateWhereUniqueInput
  }

  /**
   * Affiliate updateMany
   */
  export type AffiliateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Affiliates.
     */
    data: XOR<AffiliateUpdateManyMutationInput, AffiliateUncheckedUpdateManyInput>
    /**
     * Filter which Affiliates to update
     */
    where?: AffiliateWhereInput
    /**
     * Limit how many Affiliates to update.
     */
    limit?: number
  }

  /**
   * Affiliate upsert
   */
  export type AffiliateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Affiliate
     */
    select?: AffiliateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Affiliate
     */
    omit?: AffiliateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AffiliateInclude<ExtArgs> | null
    /**
     * The filter to search for the Affiliate to update in case it exists.
     */
    where: AffiliateWhereUniqueInput
    /**
     * In case the Affiliate found by the `where` argument doesn't exist, create a new Affiliate with this data.
     */
    create: XOR<AffiliateCreateInput, AffiliateUncheckedCreateInput>
    /**
     * In case the Affiliate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AffiliateUpdateInput, AffiliateUncheckedUpdateInput>
  }

  /**
   * Affiliate delete
   */
  export type AffiliateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Affiliate
     */
    select?: AffiliateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Affiliate
     */
    omit?: AffiliateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AffiliateInclude<ExtArgs> | null
    /**
     * Filter which Affiliate to delete.
     */
    where: AffiliateWhereUniqueInput
  }

  /**
   * Affiliate deleteMany
   */
  export type AffiliateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Affiliates to delete
     */
    where?: AffiliateWhereInput
    /**
     * Limit how many Affiliates to delete.
     */
    limit?: number
  }

  /**
   * Affiliate findRaw
   */
  export type AffiliateFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Affiliate aggregateRaw
   */
  export type AffiliateAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Affiliate.user
   */
  export type Affiliate$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Affiliate.referralClicks
   */
  export type Affiliate$referralClicksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralClick
     */
    select?: ReferralClickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralClick
     */
    omit?: ReferralClickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralClickInclude<ExtArgs> | null
    where?: ReferralClickWhereInput
    orderBy?: ReferralClickOrderByWithRelationInput | ReferralClickOrderByWithRelationInput[]
    cursor?: ReferralClickWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReferralClickScalarFieldEnum | ReferralClickScalarFieldEnum[]
  }

  /**
   * Affiliate.commissions
   */
  export type Affiliate$commissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commission
     */
    select?: CommissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commission
     */
    omit?: CommissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommissionInclude<ExtArgs> | null
    where?: CommissionWhereInput
    orderBy?: CommissionOrderByWithRelationInput | CommissionOrderByWithRelationInput[]
    cursor?: CommissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommissionScalarFieldEnum | CommissionScalarFieldEnum[]
  }

  /**
   * Affiliate.payouts
   */
  export type Affiliate$payoutsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payout
     */
    select?: PayoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payout
     */
    omit?: PayoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayoutInclude<ExtArgs> | null
    where?: PayoutWhereInput
    orderBy?: PayoutOrderByWithRelationInput | PayoutOrderByWithRelationInput[]
    cursor?: PayoutWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PayoutScalarFieldEnum | PayoutScalarFieldEnum[]
  }

  /**
   * Affiliate without action
   */
  export type AffiliateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Affiliate
     */
    select?: AffiliateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Affiliate
     */
    omit?: AffiliateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AffiliateInclude<ExtArgs> | null
  }


  /**
   * Model ReferralClick
   */

  export type AggregateReferralClick = {
    _count: ReferralClickCountAggregateOutputType | null
    _min: ReferralClickMinAggregateOutputType | null
    _max: ReferralClickMaxAggregateOutputType | null
  }

  export type ReferralClickMinAggregateOutputType = {
    id: string | null
    affiliateId: string | null
    ip: string | null
    ua: string | null
    referrer: string | null
    createdAt: Date | null
  }

  export type ReferralClickMaxAggregateOutputType = {
    id: string | null
    affiliateId: string | null
    ip: string | null
    ua: string | null
    referrer: string | null
    createdAt: Date | null
  }

  export type ReferralClickCountAggregateOutputType = {
    id: number
    affiliateId: number
    ip: number
    ua: number
    referrer: number
    createdAt: number
    _all: number
  }


  export type ReferralClickMinAggregateInputType = {
    id?: true
    affiliateId?: true
    ip?: true
    ua?: true
    referrer?: true
    createdAt?: true
  }

  export type ReferralClickMaxAggregateInputType = {
    id?: true
    affiliateId?: true
    ip?: true
    ua?: true
    referrer?: true
    createdAt?: true
  }

  export type ReferralClickCountAggregateInputType = {
    id?: true
    affiliateId?: true
    ip?: true
    ua?: true
    referrer?: true
    createdAt?: true
    _all?: true
  }

  export type ReferralClickAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReferralClick to aggregate.
     */
    where?: ReferralClickWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReferralClicks to fetch.
     */
    orderBy?: ReferralClickOrderByWithRelationInput | ReferralClickOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReferralClickWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReferralClicks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReferralClicks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReferralClicks
    **/
    _count?: true | ReferralClickCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReferralClickMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReferralClickMaxAggregateInputType
  }

  export type GetReferralClickAggregateType<T extends ReferralClickAggregateArgs> = {
        [P in keyof T & keyof AggregateReferralClick]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReferralClick[P]>
      : GetScalarType<T[P], AggregateReferralClick[P]>
  }




  export type ReferralClickGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReferralClickWhereInput
    orderBy?: ReferralClickOrderByWithAggregationInput | ReferralClickOrderByWithAggregationInput[]
    by: ReferralClickScalarFieldEnum[] | ReferralClickScalarFieldEnum
    having?: ReferralClickScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReferralClickCountAggregateInputType | true
    _min?: ReferralClickMinAggregateInputType
    _max?: ReferralClickMaxAggregateInputType
  }

  export type ReferralClickGroupByOutputType = {
    id: string
    affiliateId: string
    ip: string | null
    ua: string | null
    referrer: string | null
    createdAt: Date
    _count: ReferralClickCountAggregateOutputType | null
    _min: ReferralClickMinAggregateOutputType | null
    _max: ReferralClickMaxAggregateOutputType | null
  }

  type GetReferralClickGroupByPayload<T extends ReferralClickGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReferralClickGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReferralClickGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReferralClickGroupByOutputType[P]>
            : GetScalarType<T[P], ReferralClickGroupByOutputType[P]>
        }
      >
    >


  export type ReferralClickSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    affiliateId?: boolean
    ip?: boolean
    ua?: boolean
    referrer?: boolean
    createdAt?: boolean
    affiliate?: boolean | AffiliateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["referralClick"]>



  export type ReferralClickSelectScalar = {
    id?: boolean
    affiliateId?: boolean
    ip?: boolean
    ua?: boolean
    referrer?: boolean
    createdAt?: boolean
  }

  export type ReferralClickOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "affiliateId" | "ip" | "ua" | "referrer" | "createdAt", ExtArgs["result"]["referralClick"]>
  export type ReferralClickInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    affiliate?: boolean | AffiliateDefaultArgs<ExtArgs>
  }

  export type $ReferralClickPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReferralClick"
    objects: {
      affiliate: Prisma.$AffiliatePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      affiliateId: string
      ip: string | null
      ua: string | null
      referrer: string | null
      createdAt: Date
    }, ExtArgs["result"]["referralClick"]>
    composites: {}
  }

  type ReferralClickGetPayload<S extends boolean | null | undefined | ReferralClickDefaultArgs> = $Result.GetResult<Prisma.$ReferralClickPayload, S>

  type ReferralClickCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReferralClickFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReferralClickCountAggregateInputType | true
    }

  export interface ReferralClickDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReferralClick'], meta: { name: 'ReferralClick' } }
    /**
     * Find zero or one ReferralClick that matches the filter.
     * @param {ReferralClickFindUniqueArgs} args - Arguments to find a ReferralClick
     * @example
     * // Get one ReferralClick
     * const referralClick = await prisma.referralClick.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReferralClickFindUniqueArgs>(args: SelectSubset<T, ReferralClickFindUniqueArgs<ExtArgs>>): Prisma__ReferralClickClient<$Result.GetResult<Prisma.$ReferralClickPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ReferralClick that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReferralClickFindUniqueOrThrowArgs} args - Arguments to find a ReferralClick
     * @example
     * // Get one ReferralClick
     * const referralClick = await prisma.referralClick.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReferralClickFindUniqueOrThrowArgs>(args: SelectSubset<T, ReferralClickFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReferralClickClient<$Result.GetResult<Prisma.$ReferralClickPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReferralClick that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralClickFindFirstArgs} args - Arguments to find a ReferralClick
     * @example
     * // Get one ReferralClick
     * const referralClick = await prisma.referralClick.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReferralClickFindFirstArgs>(args?: SelectSubset<T, ReferralClickFindFirstArgs<ExtArgs>>): Prisma__ReferralClickClient<$Result.GetResult<Prisma.$ReferralClickPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ReferralClick that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralClickFindFirstOrThrowArgs} args - Arguments to find a ReferralClick
     * @example
     * // Get one ReferralClick
     * const referralClick = await prisma.referralClick.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReferralClickFindFirstOrThrowArgs>(args?: SelectSubset<T, ReferralClickFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReferralClickClient<$Result.GetResult<Prisma.$ReferralClickPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ReferralClicks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralClickFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReferralClicks
     * const referralClicks = await prisma.referralClick.findMany()
     * 
     * // Get first 10 ReferralClicks
     * const referralClicks = await prisma.referralClick.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const referralClickWithIdOnly = await prisma.referralClick.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReferralClickFindManyArgs>(args?: SelectSubset<T, ReferralClickFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferralClickPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ReferralClick.
     * @param {ReferralClickCreateArgs} args - Arguments to create a ReferralClick.
     * @example
     * // Create one ReferralClick
     * const ReferralClick = await prisma.referralClick.create({
     *   data: {
     *     // ... data to create a ReferralClick
     *   }
     * })
     * 
     */
    create<T extends ReferralClickCreateArgs>(args: SelectSubset<T, ReferralClickCreateArgs<ExtArgs>>): Prisma__ReferralClickClient<$Result.GetResult<Prisma.$ReferralClickPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ReferralClicks.
     * @param {ReferralClickCreateManyArgs} args - Arguments to create many ReferralClicks.
     * @example
     * // Create many ReferralClicks
     * const referralClick = await prisma.referralClick.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReferralClickCreateManyArgs>(args?: SelectSubset<T, ReferralClickCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ReferralClick.
     * @param {ReferralClickDeleteArgs} args - Arguments to delete one ReferralClick.
     * @example
     * // Delete one ReferralClick
     * const ReferralClick = await prisma.referralClick.delete({
     *   where: {
     *     // ... filter to delete one ReferralClick
     *   }
     * })
     * 
     */
    delete<T extends ReferralClickDeleteArgs>(args: SelectSubset<T, ReferralClickDeleteArgs<ExtArgs>>): Prisma__ReferralClickClient<$Result.GetResult<Prisma.$ReferralClickPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ReferralClick.
     * @param {ReferralClickUpdateArgs} args - Arguments to update one ReferralClick.
     * @example
     * // Update one ReferralClick
     * const referralClick = await prisma.referralClick.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReferralClickUpdateArgs>(args: SelectSubset<T, ReferralClickUpdateArgs<ExtArgs>>): Prisma__ReferralClickClient<$Result.GetResult<Prisma.$ReferralClickPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ReferralClicks.
     * @param {ReferralClickDeleteManyArgs} args - Arguments to filter ReferralClicks to delete.
     * @example
     * // Delete a few ReferralClicks
     * const { count } = await prisma.referralClick.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReferralClickDeleteManyArgs>(args?: SelectSubset<T, ReferralClickDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReferralClicks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralClickUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReferralClicks
     * const referralClick = await prisma.referralClick.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReferralClickUpdateManyArgs>(args: SelectSubset<T, ReferralClickUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ReferralClick.
     * @param {ReferralClickUpsertArgs} args - Arguments to update or create a ReferralClick.
     * @example
     * // Update or create a ReferralClick
     * const referralClick = await prisma.referralClick.upsert({
     *   create: {
     *     // ... data to create a ReferralClick
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReferralClick we want to update
     *   }
     * })
     */
    upsert<T extends ReferralClickUpsertArgs>(args: SelectSubset<T, ReferralClickUpsertArgs<ExtArgs>>): Prisma__ReferralClickClient<$Result.GetResult<Prisma.$ReferralClickPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ReferralClicks that matches the filter.
     * @param {ReferralClickFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const referralClick = await prisma.referralClick.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: ReferralClickFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a ReferralClick.
     * @param {ReferralClickAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const referralClick = await prisma.referralClick.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ReferralClickAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of ReferralClicks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralClickCountArgs} args - Arguments to filter ReferralClicks to count.
     * @example
     * // Count the number of ReferralClicks
     * const count = await prisma.referralClick.count({
     *   where: {
     *     // ... the filter for the ReferralClicks we want to count
     *   }
     * })
    **/
    count<T extends ReferralClickCountArgs>(
      args?: Subset<T, ReferralClickCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReferralClickCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReferralClick.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralClickAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReferralClickAggregateArgs>(args: Subset<T, ReferralClickAggregateArgs>): Prisma.PrismaPromise<GetReferralClickAggregateType<T>>

    /**
     * Group by ReferralClick.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferralClickGroupByArgs} args - Group by arguments.
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
      T extends ReferralClickGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReferralClickGroupByArgs['orderBy'] }
        : { orderBy?: ReferralClickGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReferralClickGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReferralClickGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReferralClick model
   */
  readonly fields: ReferralClickFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReferralClick.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReferralClickClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    affiliate<T extends AffiliateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AffiliateDefaultArgs<ExtArgs>>): Prisma__AffiliateClient<$Result.GetResult<Prisma.$AffiliatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ReferralClick model
   */
  interface ReferralClickFieldRefs {
    readonly id: FieldRef<"ReferralClick", 'String'>
    readonly affiliateId: FieldRef<"ReferralClick", 'String'>
    readonly ip: FieldRef<"ReferralClick", 'String'>
    readonly ua: FieldRef<"ReferralClick", 'String'>
    readonly referrer: FieldRef<"ReferralClick", 'String'>
    readonly createdAt: FieldRef<"ReferralClick", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ReferralClick findUnique
   */
  export type ReferralClickFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralClick
     */
    select?: ReferralClickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralClick
     */
    omit?: ReferralClickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralClickInclude<ExtArgs> | null
    /**
     * Filter, which ReferralClick to fetch.
     */
    where: ReferralClickWhereUniqueInput
  }

  /**
   * ReferralClick findUniqueOrThrow
   */
  export type ReferralClickFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralClick
     */
    select?: ReferralClickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralClick
     */
    omit?: ReferralClickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralClickInclude<ExtArgs> | null
    /**
     * Filter, which ReferralClick to fetch.
     */
    where: ReferralClickWhereUniqueInput
  }

  /**
   * ReferralClick findFirst
   */
  export type ReferralClickFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralClick
     */
    select?: ReferralClickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralClick
     */
    omit?: ReferralClickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralClickInclude<ExtArgs> | null
    /**
     * Filter, which ReferralClick to fetch.
     */
    where?: ReferralClickWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReferralClicks to fetch.
     */
    orderBy?: ReferralClickOrderByWithRelationInput | ReferralClickOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReferralClicks.
     */
    cursor?: ReferralClickWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReferralClicks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReferralClicks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReferralClicks.
     */
    distinct?: ReferralClickScalarFieldEnum | ReferralClickScalarFieldEnum[]
  }

  /**
   * ReferralClick findFirstOrThrow
   */
  export type ReferralClickFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralClick
     */
    select?: ReferralClickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralClick
     */
    omit?: ReferralClickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralClickInclude<ExtArgs> | null
    /**
     * Filter, which ReferralClick to fetch.
     */
    where?: ReferralClickWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReferralClicks to fetch.
     */
    orderBy?: ReferralClickOrderByWithRelationInput | ReferralClickOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReferralClicks.
     */
    cursor?: ReferralClickWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReferralClicks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReferralClicks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReferralClicks.
     */
    distinct?: ReferralClickScalarFieldEnum | ReferralClickScalarFieldEnum[]
  }

  /**
   * ReferralClick findMany
   */
  export type ReferralClickFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralClick
     */
    select?: ReferralClickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralClick
     */
    omit?: ReferralClickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralClickInclude<ExtArgs> | null
    /**
     * Filter, which ReferralClicks to fetch.
     */
    where?: ReferralClickWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReferralClicks to fetch.
     */
    orderBy?: ReferralClickOrderByWithRelationInput | ReferralClickOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReferralClicks.
     */
    cursor?: ReferralClickWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReferralClicks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReferralClicks.
     */
    skip?: number
    distinct?: ReferralClickScalarFieldEnum | ReferralClickScalarFieldEnum[]
  }

  /**
   * ReferralClick create
   */
  export type ReferralClickCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralClick
     */
    select?: ReferralClickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralClick
     */
    omit?: ReferralClickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralClickInclude<ExtArgs> | null
    /**
     * The data needed to create a ReferralClick.
     */
    data: XOR<ReferralClickCreateInput, ReferralClickUncheckedCreateInput>
  }

  /**
   * ReferralClick createMany
   */
  export type ReferralClickCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReferralClicks.
     */
    data: ReferralClickCreateManyInput | ReferralClickCreateManyInput[]
  }

  /**
   * ReferralClick update
   */
  export type ReferralClickUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralClick
     */
    select?: ReferralClickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralClick
     */
    omit?: ReferralClickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralClickInclude<ExtArgs> | null
    /**
     * The data needed to update a ReferralClick.
     */
    data: XOR<ReferralClickUpdateInput, ReferralClickUncheckedUpdateInput>
    /**
     * Choose, which ReferralClick to update.
     */
    where: ReferralClickWhereUniqueInput
  }

  /**
   * ReferralClick updateMany
   */
  export type ReferralClickUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReferralClicks.
     */
    data: XOR<ReferralClickUpdateManyMutationInput, ReferralClickUncheckedUpdateManyInput>
    /**
     * Filter which ReferralClicks to update
     */
    where?: ReferralClickWhereInput
    /**
     * Limit how many ReferralClicks to update.
     */
    limit?: number
  }

  /**
   * ReferralClick upsert
   */
  export type ReferralClickUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralClick
     */
    select?: ReferralClickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralClick
     */
    omit?: ReferralClickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralClickInclude<ExtArgs> | null
    /**
     * The filter to search for the ReferralClick to update in case it exists.
     */
    where: ReferralClickWhereUniqueInput
    /**
     * In case the ReferralClick found by the `where` argument doesn't exist, create a new ReferralClick with this data.
     */
    create: XOR<ReferralClickCreateInput, ReferralClickUncheckedCreateInput>
    /**
     * In case the ReferralClick was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReferralClickUpdateInput, ReferralClickUncheckedUpdateInput>
  }

  /**
   * ReferralClick delete
   */
  export type ReferralClickDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralClick
     */
    select?: ReferralClickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralClick
     */
    omit?: ReferralClickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralClickInclude<ExtArgs> | null
    /**
     * Filter which ReferralClick to delete.
     */
    where: ReferralClickWhereUniqueInput
  }

  /**
   * ReferralClick deleteMany
   */
  export type ReferralClickDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReferralClicks to delete
     */
    where?: ReferralClickWhereInput
    /**
     * Limit how many ReferralClicks to delete.
     */
    limit?: number
  }

  /**
   * ReferralClick findRaw
   */
  export type ReferralClickFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * ReferralClick aggregateRaw
   */
  export type ReferralClickAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * ReferralClick without action
   */
  export type ReferralClickDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferralClick
     */
    select?: ReferralClickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ReferralClick
     */
    omit?: ReferralClickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReferralClickInclude<ExtArgs> | null
  }


  /**
   * Model Commission
   */

  export type AggregateCommission = {
    _count: CommissionCountAggregateOutputType | null
    _avg: CommissionAvgAggregateOutputType | null
    _sum: CommissionSumAggregateOutputType | null
    _min: CommissionMinAggregateOutputType | null
    _max: CommissionMaxAggregateOutputType | null
  }

  export type CommissionAvgAggregateOutputType = {
    amountMinor: number | null
  }

  export type CommissionSumAggregateOutputType = {
    amountMinor: number | null
  }

  export type CommissionMinAggregateOutputType = {
    id: string | null
    affiliateId: string | null
    userId: string | null
    paymentId: string | null
    subscriptionId: string | null
    currency: string | null
    amountMinor: number | null
    status: $Enums.CommissionStatus | null
    reason: string | null
    holdUntil: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommissionMaxAggregateOutputType = {
    id: string | null
    affiliateId: string | null
    userId: string | null
    paymentId: string | null
    subscriptionId: string | null
    currency: string | null
    amountMinor: number | null
    status: $Enums.CommissionStatus | null
    reason: string | null
    holdUntil: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CommissionCountAggregateOutputType = {
    id: number
    affiliateId: number
    userId: number
    paymentId: number
    subscriptionId: number
    currency: number
    amountMinor: number
    status: number
    reason: number
    holdUntil: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CommissionAvgAggregateInputType = {
    amountMinor?: true
  }

  export type CommissionSumAggregateInputType = {
    amountMinor?: true
  }

  export type CommissionMinAggregateInputType = {
    id?: true
    affiliateId?: true
    userId?: true
    paymentId?: true
    subscriptionId?: true
    currency?: true
    amountMinor?: true
    status?: true
    reason?: true
    holdUntil?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommissionMaxAggregateInputType = {
    id?: true
    affiliateId?: true
    userId?: true
    paymentId?: true
    subscriptionId?: true
    currency?: true
    amountMinor?: true
    status?: true
    reason?: true
    holdUntil?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CommissionCountAggregateInputType = {
    id?: true
    affiliateId?: true
    userId?: true
    paymentId?: true
    subscriptionId?: true
    currency?: true
    amountMinor?: true
    status?: true
    reason?: true
    holdUntil?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CommissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Commission to aggregate.
     */
    where?: CommissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commissions to fetch.
     */
    orderBy?: CommissionOrderByWithRelationInput | CommissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Commissions
    **/
    _count?: true | CommissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CommissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CommissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommissionMaxAggregateInputType
  }

  export type GetCommissionAggregateType<T extends CommissionAggregateArgs> = {
        [P in keyof T & keyof AggregateCommission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommission[P]>
      : GetScalarType<T[P], AggregateCommission[P]>
  }




  export type CommissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommissionWhereInput
    orderBy?: CommissionOrderByWithAggregationInput | CommissionOrderByWithAggregationInput[]
    by: CommissionScalarFieldEnum[] | CommissionScalarFieldEnum
    having?: CommissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommissionCountAggregateInputType | true
    _avg?: CommissionAvgAggregateInputType
    _sum?: CommissionSumAggregateInputType
    _min?: CommissionMinAggregateInputType
    _max?: CommissionMaxAggregateInputType
  }

  export type CommissionGroupByOutputType = {
    id: string
    affiliateId: string
    userId: string
    paymentId: string | null
    subscriptionId: string | null
    currency: string
    amountMinor: number
    status: $Enums.CommissionStatus
    reason: string | null
    holdUntil: Date | null
    createdAt: Date
    updatedAt: Date
    _count: CommissionCountAggregateOutputType | null
    _avg: CommissionAvgAggregateOutputType | null
    _sum: CommissionSumAggregateOutputType | null
    _min: CommissionMinAggregateOutputType | null
    _max: CommissionMaxAggregateOutputType | null
  }

  type GetCommissionGroupByPayload<T extends CommissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommissionGroupByOutputType[P]>
            : GetScalarType<T[P], CommissionGroupByOutputType[P]>
        }
      >
    >


  export type CommissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    affiliateId?: boolean
    userId?: boolean
    paymentId?: boolean
    subscriptionId?: boolean
    currency?: boolean
    amountMinor?: boolean
    status?: boolean
    reason?: boolean
    holdUntil?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    affiliate?: boolean | AffiliateDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    payment?: boolean | Commission$paymentArgs<ExtArgs>
    subscription?: boolean | Commission$subscriptionArgs<ExtArgs>
  }, ExtArgs["result"]["commission"]>



  export type CommissionSelectScalar = {
    id?: boolean
    affiliateId?: boolean
    userId?: boolean
    paymentId?: boolean
    subscriptionId?: boolean
    currency?: boolean
    amountMinor?: boolean
    status?: boolean
    reason?: boolean
    holdUntil?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CommissionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "affiliateId" | "userId" | "paymentId" | "subscriptionId" | "currency" | "amountMinor" | "status" | "reason" | "holdUntil" | "createdAt" | "updatedAt", ExtArgs["result"]["commission"]>
  export type CommissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    affiliate?: boolean | AffiliateDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    payment?: boolean | Commission$paymentArgs<ExtArgs>
    subscription?: boolean | Commission$subscriptionArgs<ExtArgs>
  }

  export type $CommissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Commission"
    objects: {
      affiliate: Prisma.$AffiliatePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
      payment: Prisma.$PaymentPayload<ExtArgs> | null
      subscription: Prisma.$SubscriptionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      affiliateId: string
      userId: string
      paymentId: string | null
      subscriptionId: string | null
      currency: string
      amountMinor: number
      status: $Enums.CommissionStatus
      reason: string | null
      holdUntil: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["commission"]>
    composites: {}
  }

  type CommissionGetPayload<S extends boolean | null | undefined | CommissionDefaultArgs> = $Result.GetResult<Prisma.$CommissionPayload, S>

  type CommissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommissionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommissionCountAggregateInputType | true
    }

  export interface CommissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Commission'], meta: { name: 'Commission' } }
    /**
     * Find zero or one Commission that matches the filter.
     * @param {CommissionFindUniqueArgs} args - Arguments to find a Commission
     * @example
     * // Get one Commission
     * const commission = await prisma.commission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommissionFindUniqueArgs>(args: SelectSubset<T, CommissionFindUniqueArgs<ExtArgs>>): Prisma__CommissionClient<$Result.GetResult<Prisma.$CommissionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Commission that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommissionFindUniqueOrThrowArgs} args - Arguments to find a Commission
     * @example
     * // Get one Commission
     * const commission = await prisma.commission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommissionFindUniqueOrThrowArgs>(args: SelectSubset<T, CommissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommissionClient<$Result.GetResult<Prisma.$CommissionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Commission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommissionFindFirstArgs} args - Arguments to find a Commission
     * @example
     * // Get one Commission
     * const commission = await prisma.commission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommissionFindFirstArgs>(args?: SelectSubset<T, CommissionFindFirstArgs<ExtArgs>>): Prisma__CommissionClient<$Result.GetResult<Prisma.$CommissionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Commission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommissionFindFirstOrThrowArgs} args - Arguments to find a Commission
     * @example
     * // Get one Commission
     * const commission = await prisma.commission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommissionFindFirstOrThrowArgs>(args?: SelectSubset<T, CommissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommissionClient<$Result.GetResult<Prisma.$CommissionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Commissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Commissions
     * const commissions = await prisma.commission.findMany()
     * 
     * // Get first 10 Commissions
     * const commissions = await prisma.commission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commissionWithIdOnly = await prisma.commission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommissionFindManyArgs>(args?: SelectSubset<T, CommissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommissionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Commission.
     * @param {CommissionCreateArgs} args - Arguments to create a Commission.
     * @example
     * // Create one Commission
     * const Commission = await prisma.commission.create({
     *   data: {
     *     // ... data to create a Commission
     *   }
     * })
     * 
     */
    create<T extends CommissionCreateArgs>(args: SelectSubset<T, CommissionCreateArgs<ExtArgs>>): Prisma__CommissionClient<$Result.GetResult<Prisma.$CommissionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Commissions.
     * @param {CommissionCreateManyArgs} args - Arguments to create many Commissions.
     * @example
     * // Create many Commissions
     * const commission = await prisma.commission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommissionCreateManyArgs>(args?: SelectSubset<T, CommissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Commission.
     * @param {CommissionDeleteArgs} args - Arguments to delete one Commission.
     * @example
     * // Delete one Commission
     * const Commission = await prisma.commission.delete({
     *   where: {
     *     // ... filter to delete one Commission
     *   }
     * })
     * 
     */
    delete<T extends CommissionDeleteArgs>(args: SelectSubset<T, CommissionDeleteArgs<ExtArgs>>): Prisma__CommissionClient<$Result.GetResult<Prisma.$CommissionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Commission.
     * @param {CommissionUpdateArgs} args - Arguments to update one Commission.
     * @example
     * // Update one Commission
     * const commission = await prisma.commission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommissionUpdateArgs>(args: SelectSubset<T, CommissionUpdateArgs<ExtArgs>>): Prisma__CommissionClient<$Result.GetResult<Prisma.$CommissionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Commissions.
     * @param {CommissionDeleteManyArgs} args - Arguments to filter Commissions to delete.
     * @example
     * // Delete a few Commissions
     * const { count } = await prisma.commission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommissionDeleteManyArgs>(args?: SelectSubset<T, CommissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Commissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Commissions
     * const commission = await prisma.commission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommissionUpdateManyArgs>(args: SelectSubset<T, CommissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Commission.
     * @param {CommissionUpsertArgs} args - Arguments to update or create a Commission.
     * @example
     * // Update or create a Commission
     * const commission = await prisma.commission.upsert({
     *   create: {
     *     // ... data to create a Commission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Commission we want to update
     *   }
     * })
     */
    upsert<T extends CommissionUpsertArgs>(args: SelectSubset<T, CommissionUpsertArgs<ExtArgs>>): Prisma__CommissionClient<$Result.GetResult<Prisma.$CommissionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Commissions that matches the filter.
     * @param {CommissionFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const commission = await prisma.commission.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: CommissionFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Commission.
     * @param {CommissionAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const commission = await prisma.commission.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: CommissionAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Commissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommissionCountArgs} args - Arguments to filter Commissions to count.
     * @example
     * // Count the number of Commissions
     * const count = await prisma.commission.count({
     *   where: {
     *     // ... the filter for the Commissions we want to count
     *   }
     * })
    **/
    count<T extends CommissionCountArgs>(
      args?: Subset<T, CommissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Commission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CommissionAggregateArgs>(args: Subset<T, CommissionAggregateArgs>): Prisma.PrismaPromise<GetCommissionAggregateType<T>>

    /**
     * Group by Commission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommissionGroupByArgs} args - Group by arguments.
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
      T extends CommissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommissionGroupByArgs['orderBy'] }
        : { orderBy?: CommissionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CommissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Commission model
   */
  readonly fields: CommissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Commission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    affiliate<T extends AffiliateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AffiliateDefaultArgs<ExtArgs>>): Prisma__AffiliateClient<$Result.GetResult<Prisma.$AffiliatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    payment<T extends Commission$paymentArgs<ExtArgs> = {}>(args?: Subset<T, Commission$paymentArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    subscription<T extends Commission$subscriptionArgs<ExtArgs> = {}>(args?: Subset<T, Commission$subscriptionArgs<ExtArgs>>): Prisma__SubscriptionClient<$Result.GetResult<Prisma.$SubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Commission model
   */
  interface CommissionFieldRefs {
    readonly id: FieldRef<"Commission", 'String'>
    readonly affiliateId: FieldRef<"Commission", 'String'>
    readonly userId: FieldRef<"Commission", 'String'>
    readonly paymentId: FieldRef<"Commission", 'String'>
    readonly subscriptionId: FieldRef<"Commission", 'String'>
    readonly currency: FieldRef<"Commission", 'String'>
    readonly amountMinor: FieldRef<"Commission", 'Int'>
    readonly status: FieldRef<"Commission", 'CommissionStatus'>
    readonly reason: FieldRef<"Commission", 'String'>
    readonly holdUntil: FieldRef<"Commission", 'DateTime'>
    readonly createdAt: FieldRef<"Commission", 'DateTime'>
    readonly updatedAt: FieldRef<"Commission", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Commission findUnique
   */
  export type CommissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commission
     */
    select?: CommissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commission
     */
    omit?: CommissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommissionInclude<ExtArgs> | null
    /**
     * Filter, which Commission to fetch.
     */
    where: CommissionWhereUniqueInput
  }

  /**
   * Commission findUniqueOrThrow
   */
  export type CommissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commission
     */
    select?: CommissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commission
     */
    omit?: CommissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommissionInclude<ExtArgs> | null
    /**
     * Filter, which Commission to fetch.
     */
    where: CommissionWhereUniqueInput
  }

  /**
   * Commission findFirst
   */
  export type CommissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commission
     */
    select?: CommissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commission
     */
    omit?: CommissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommissionInclude<ExtArgs> | null
    /**
     * Filter, which Commission to fetch.
     */
    where?: CommissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commissions to fetch.
     */
    orderBy?: CommissionOrderByWithRelationInput | CommissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Commissions.
     */
    cursor?: CommissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Commissions.
     */
    distinct?: CommissionScalarFieldEnum | CommissionScalarFieldEnum[]
  }

  /**
   * Commission findFirstOrThrow
   */
  export type CommissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commission
     */
    select?: CommissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commission
     */
    omit?: CommissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommissionInclude<ExtArgs> | null
    /**
     * Filter, which Commission to fetch.
     */
    where?: CommissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commissions to fetch.
     */
    orderBy?: CommissionOrderByWithRelationInput | CommissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Commissions.
     */
    cursor?: CommissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Commissions.
     */
    distinct?: CommissionScalarFieldEnum | CommissionScalarFieldEnum[]
  }

  /**
   * Commission findMany
   */
  export type CommissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commission
     */
    select?: CommissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commission
     */
    omit?: CommissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommissionInclude<ExtArgs> | null
    /**
     * Filter, which Commissions to fetch.
     */
    where?: CommissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commissions to fetch.
     */
    orderBy?: CommissionOrderByWithRelationInput | CommissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Commissions.
     */
    cursor?: CommissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commissions.
     */
    skip?: number
    distinct?: CommissionScalarFieldEnum | CommissionScalarFieldEnum[]
  }

  /**
   * Commission create
   */
  export type CommissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commission
     */
    select?: CommissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commission
     */
    omit?: CommissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommissionInclude<ExtArgs> | null
    /**
     * The data needed to create a Commission.
     */
    data: XOR<CommissionCreateInput, CommissionUncheckedCreateInput>
  }

  /**
   * Commission createMany
   */
  export type CommissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Commissions.
     */
    data: CommissionCreateManyInput | CommissionCreateManyInput[]
  }

  /**
   * Commission update
   */
  export type CommissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commission
     */
    select?: CommissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commission
     */
    omit?: CommissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommissionInclude<ExtArgs> | null
    /**
     * The data needed to update a Commission.
     */
    data: XOR<CommissionUpdateInput, CommissionUncheckedUpdateInput>
    /**
     * Choose, which Commission to update.
     */
    where: CommissionWhereUniqueInput
  }

  /**
   * Commission updateMany
   */
  export type CommissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Commissions.
     */
    data: XOR<CommissionUpdateManyMutationInput, CommissionUncheckedUpdateManyInput>
    /**
     * Filter which Commissions to update
     */
    where?: CommissionWhereInput
    /**
     * Limit how many Commissions to update.
     */
    limit?: number
  }

  /**
   * Commission upsert
   */
  export type CommissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commission
     */
    select?: CommissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commission
     */
    omit?: CommissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommissionInclude<ExtArgs> | null
    /**
     * The filter to search for the Commission to update in case it exists.
     */
    where: CommissionWhereUniqueInput
    /**
     * In case the Commission found by the `where` argument doesn't exist, create a new Commission with this data.
     */
    create: XOR<CommissionCreateInput, CommissionUncheckedCreateInput>
    /**
     * In case the Commission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommissionUpdateInput, CommissionUncheckedUpdateInput>
  }

  /**
   * Commission delete
   */
  export type CommissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commission
     */
    select?: CommissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commission
     */
    omit?: CommissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommissionInclude<ExtArgs> | null
    /**
     * Filter which Commission to delete.
     */
    where: CommissionWhereUniqueInput
  }

  /**
   * Commission deleteMany
   */
  export type CommissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Commissions to delete
     */
    where?: CommissionWhereInput
    /**
     * Limit how many Commissions to delete.
     */
    limit?: number
  }

  /**
   * Commission findRaw
   */
  export type CommissionFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Commission aggregateRaw
   */
  export type CommissionAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Commission.payment
   */
  export type Commission$paymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
  }

  /**
   * Commission.subscription
   */
  export type Commission$subscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subscription
     */
    select?: SubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Subscription
     */
    omit?: SubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubscriptionInclude<ExtArgs> | null
    where?: SubscriptionWhereInput
  }

  /**
   * Commission without action
   */
  export type CommissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commission
     */
    select?: CommissionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commission
     */
    omit?: CommissionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommissionInclude<ExtArgs> | null
  }


  /**
   * Model Payout
   */

  export type AggregatePayout = {
    _count: PayoutCountAggregateOutputType | null
    _avg: PayoutAvgAggregateOutputType | null
    _sum: PayoutSumAggregateOutputType | null
    _min: PayoutMinAggregateOutputType | null
    _max: PayoutMaxAggregateOutputType | null
  }

  export type PayoutAvgAggregateOutputType = {
    amountMinor: number | null
  }

  export type PayoutSumAggregateOutputType = {
    amountMinor: number | null
  }

  export type PayoutMinAggregateOutputType = {
    id: string | null
    affiliateId: string | null
    status: $Enums.PayoutStatus | null
    currency: string | null
    amountMinor: number | null
    note: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PayoutMaxAggregateOutputType = {
    id: string | null
    affiliateId: string | null
    status: $Enums.PayoutStatus | null
    currency: string | null
    amountMinor: number | null
    note: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PayoutCountAggregateOutputType = {
    id: number
    affiliateId: number
    status: number
    currency: number
    amountMinor: number
    note: number
    commissionIds: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PayoutAvgAggregateInputType = {
    amountMinor?: true
  }

  export type PayoutSumAggregateInputType = {
    amountMinor?: true
  }

  export type PayoutMinAggregateInputType = {
    id?: true
    affiliateId?: true
    status?: true
    currency?: true
    amountMinor?: true
    note?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PayoutMaxAggregateInputType = {
    id?: true
    affiliateId?: true
    status?: true
    currency?: true
    amountMinor?: true
    note?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PayoutCountAggregateInputType = {
    id?: true
    affiliateId?: true
    status?: true
    currency?: true
    amountMinor?: true
    note?: true
    commissionIds?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PayoutAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payout to aggregate.
     */
    where?: PayoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payouts to fetch.
     */
    orderBy?: PayoutOrderByWithRelationInput | PayoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PayoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payouts
    **/
    _count?: true | PayoutCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PayoutAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PayoutSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PayoutMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PayoutMaxAggregateInputType
  }

  export type GetPayoutAggregateType<T extends PayoutAggregateArgs> = {
        [P in keyof T & keyof AggregatePayout]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayout[P]>
      : GetScalarType<T[P], AggregatePayout[P]>
  }




  export type PayoutGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PayoutWhereInput
    orderBy?: PayoutOrderByWithAggregationInput | PayoutOrderByWithAggregationInput[]
    by: PayoutScalarFieldEnum[] | PayoutScalarFieldEnum
    having?: PayoutScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PayoutCountAggregateInputType | true
    _avg?: PayoutAvgAggregateInputType
    _sum?: PayoutSumAggregateInputType
    _min?: PayoutMinAggregateInputType
    _max?: PayoutMaxAggregateInputType
  }

  export type PayoutGroupByOutputType = {
    id: string
    affiliateId: string
    status: $Enums.PayoutStatus
    currency: string
    amountMinor: number
    note: string | null
    commissionIds: string[]
    createdAt: Date
    updatedAt: Date
    _count: PayoutCountAggregateOutputType | null
    _avg: PayoutAvgAggregateOutputType | null
    _sum: PayoutSumAggregateOutputType | null
    _min: PayoutMinAggregateOutputType | null
    _max: PayoutMaxAggregateOutputType | null
  }

  type GetPayoutGroupByPayload<T extends PayoutGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PayoutGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PayoutGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PayoutGroupByOutputType[P]>
            : GetScalarType<T[P], PayoutGroupByOutputType[P]>
        }
      >
    >


  export type PayoutSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    affiliateId?: boolean
    status?: boolean
    currency?: boolean
    amountMinor?: boolean
    note?: boolean
    commissionIds?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    affiliate?: boolean | AffiliateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payout"]>



  export type PayoutSelectScalar = {
    id?: boolean
    affiliateId?: boolean
    status?: boolean
    currency?: boolean
    amountMinor?: boolean
    note?: boolean
    commissionIds?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PayoutOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "affiliateId" | "status" | "currency" | "amountMinor" | "note" | "commissionIds" | "createdAt" | "updatedAt", ExtArgs["result"]["payout"]>
  export type PayoutInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    affiliate?: boolean | AffiliateDefaultArgs<ExtArgs>
  }

  export type $PayoutPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payout"
    objects: {
      affiliate: Prisma.$AffiliatePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      affiliateId: string
      status: $Enums.PayoutStatus
      currency: string
      amountMinor: number
      note: string | null
      commissionIds: string[]
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["payout"]>
    composites: {}
  }

  type PayoutGetPayload<S extends boolean | null | undefined | PayoutDefaultArgs> = $Result.GetResult<Prisma.$PayoutPayload, S>

  type PayoutCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PayoutFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PayoutCountAggregateInputType | true
    }

  export interface PayoutDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payout'], meta: { name: 'Payout' } }
    /**
     * Find zero or one Payout that matches the filter.
     * @param {PayoutFindUniqueArgs} args - Arguments to find a Payout
     * @example
     * // Get one Payout
     * const payout = await prisma.payout.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PayoutFindUniqueArgs>(args: SelectSubset<T, PayoutFindUniqueArgs<ExtArgs>>): Prisma__PayoutClient<$Result.GetResult<Prisma.$PayoutPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payout that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PayoutFindUniqueOrThrowArgs} args - Arguments to find a Payout
     * @example
     * // Get one Payout
     * const payout = await prisma.payout.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PayoutFindUniqueOrThrowArgs>(args: SelectSubset<T, PayoutFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PayoutClient<$Result.GetResult<Prisma.$PayoutPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payout that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayoutFindFirstArgs} args - Arguments to find a Payout
     * @example
     * // Get one Payout
     * const payout = await prisma.payout.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PayoutFindFirstArgs>(args?: SelectSubset<T, PayoutFindFirstArgs<ExtArgs>>): Prisma__PayoutClient<$Result.GetResult<Prisma.$PayoutPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payout that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayoutFindFirstOrThrowArgs} args - Arguments to find a Payout
     * @example
     * // Get one Payout
     * const payout = await prisma.payout.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PayoutFindFirstOrThrowArgs>(args?: SelectSubset<T, PayoutFindFirstOrThrowArgs<ExtArgs>>): Prisma__PayoutClient<$Result.GetResult<Prisma.$PayoutPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payouts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayoutFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payouts
     * const payouts = await prisma.payout.findMany()
     * 
     * // Get first 10 Payouts
     * const payouts = await prisma.payout.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const payoutWithIdOnly = await prisma.payout.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PayoutFindManyArgs>(args?: SelectSubset<T, PayoutFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PayoutPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payout.
     * @param {PayoutCreateArgs} args - Arguments to create a Payout.
     * @example
     * // Create one Payout
     * const Payout = await prisma.payout.create({
     *   data: {
     *     // ... data to create a Payout
     *   }
     * })
     * 
     */
    create<T extends PayoutCreateArgs>(args: SelectSubset<T, PayoutCreateArgs<ExtArgs>>): Prisma__PayoutClient<$Result.GetResult<Prisma.$PayoutPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payouts.
     * @param {PayoutCreateManyArgs} args - Arguments to create many Payouts.
     * @example
     * // Create many Payouts
     * const payout = await prisma.payout.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PayoutCreateManyArgs>(args?: SelectSubset<T, PayoutCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Payout.
     * @param {PayoutDeleteArgs} args - Arguments to delete one Payout.
     * @example
     * // Delete one Payout
     * const Payout = await prisma.payout.delete({
     *   where: {
     *     // ... filter to delete one Payout
     *   }
     * })
     * 
     */
    delete<T extends PayoutDeleteArgs>(args: SelectSubset<T, PayoutDeleteArgs<ExtArgs>>): Prisma__PayoutClient<$Result.GetResult<Prisma.$PayoutPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payout.
     * @param {PayoutUpdateArgs} args - Arguments to update one Payout.
     * @example
     * // Update one Payout
     * const payout = await prisma.payout.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PayoutUpdateArgs>(args: SelectSubset<T, PayoutUpdateArgs<ExtArgs>>): Prisma__PayoutClient<$Result.GetResult<Prisma.$PayoutPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payouts.
     * @param {PayoutDeleteManyArgs} args - Arguments to filter Payouts to delete.
     * @example
     * // Delete a few Payouts
     * const { count } = await prisma.payout.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PayoutDeleteManyArgs>(args?: SelectSubset<T, PayoutDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayoutUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payouts
     * const payout = await prisma.payout.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PayoutUpdateManyArgs>(args: SelectSubset<T, PayoutUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Payout.
     * @param {PayoutUpsertArgs} args - Arguments to update or create a Payout.
     * @example
     * // Update or create a Payout
     * const payout = await prisma.payout.upsert({
     *   create: {
     *     // ... data to create a Payout
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payout we want to update
     *   }
     * })
     */
    upsert<T extends PayoutUpsertArgs>(args: SelectSubset<T, PayoutUpsertArgs<ExtArgs>>): Prisma__PayoutClient<$Result.GetResult<Prisma.$PayoutPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payouts that matches the filter.
     * @param {PayoutFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const payout = await prisma.payout.findRaw({
     *   filter: { age: { $gt: 25 } }
     * })
     */
    findRaw(args?: PayoutFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Payout.
     * @param {PayoutAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const payout = await prisma.payout.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: PayoutAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Payouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayoutCountArgs} args - Arguments to filter Payouts to count.
     * @example
     * // Count the number of Payouts
     * const count = await prisma.payout.count({
     *   where: {
     *     // ... the filter for the Payouts we want to count
     *   }
     * })
    **/
    count<T extends PayoutCountArgs>(
      args?: Subset<T, PayoutCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PayoutCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payout.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayoutAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PayoutAggregateArgs>(args: Subset<T, PayoutAggregateArgs>): Prisma.PrismaPromise<GetPayoutAggregateType<T>>

    /**
     * Group by Payout.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PayoutGroupByArgs} args - Group by arguments.
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
      T extends PayoutGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PayoutGroupByArgs['orderBy'] }
        : { orderBy?: PayoutGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PayoutGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPayoutGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payout model
   */
  readonly fields: PayoutFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payout.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PayoutClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    affiliate<T extends AffiliateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AffiliateDefaultArgs<ExtArgs>>): Prisma__AffiliateClient<$Result.GetResult<Prisma.$AffiliatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Payout model
   */
  interface PayoutFieldRefs {
    readonly id: FieldRef<"Payout", 'String'>
    readonly affiliateId: FieldRef<"Payout", 'String'>
    readonly status: FieldRef<"Payout", 'PayoutStatus'>
    readonly currency: FieldRef<"Payout", 'String'>
    readonly amountMinor: FieldRef<"Payout", 'Int'>
    readonly note: FieldRef<"Payout", 'String'>
    readonly commissionIds: FieldRef<"Payout", 'String[]'>
    readonly createdAt: FieldRef<"Payout", 'DateTime'>
    readonly updatedAt: FieldRef<"Payout", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payout findUnique
   */
  export type PayoutFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payout
     */
    select?: PayoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payout
     */
    omit?: PayoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayoutInclude<ExtArgs> | null
    /**
     * Filter, which Payout to fetch.
     */
    where: PayoutWhereUniqueInput
  }

  /**
   * Payout findUniqueOrThrow
   */
  export type PayoutFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payout
     */
    select?: PayoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payout
     */
    omit?: PayoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayoutInclude<ExtArgs> | null
    /**
     * Filter, which Payout to fetch.
     */
    where: PayoutWhereUniqueInput
  }

  /**
   * Payout findFirst
   */
  export type PayoutFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payout
     */
    select?: PayoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payout
     */
    omit?: PayoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayoutInclude<ExtArgs> | null
    /**
     * Filter, which Payout to fetch.
     */
    where?: PayoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payouts to fetch.
     */
    orderBy?: PayoutOrderByWithRelationInput | PayoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payouts.
     */
    cursor?: PayoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payouts.
     */
    distinct?: PayoutScalarFieldEnum | PayoutScalarFieldEnum[]
  }

  /**
   * Payout findFirstOrThrow
   */
  export type PayoutFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payout
     */
    select?: PayoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payout
     */
    omit?: PayoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayoutInclude<ExtArgs> | null
    /**
     * Filter, which Payout to fetch.
     */
    where?: PayoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payouts to fetch.
     */
    orderBy?: PayoutOrderByWithRelationInput | PayoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payouts.
     */
    cursor?: PayoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payouts.
     */
    distinct?: PayoutScalarFieldEnum | PayoutScalarFieldEnum[]
  }

  /**
   * Payout findMany
   */
  export type PayoutFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payout
     */
    select?: PayoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payout
     */
    omit?: PayoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayoutInclude<ExtArgs> | null
    /**
     * Filter, which Payouts to fetch.
     */
    where?: PayoutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payouts to fetch.
     */
    orderBy?: PayoutOrderByWithRelationInput | PayoutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payouts.
     */
    cursor?: PayoutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payouts.
     */
    skip?: number
    distinct?: PayoutScalarFieldEnum | PayoutScalarFieldEnum[]
  }

  /**
   * Payout create
   */
  export type PayoutCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payout
     */
    select?: PayoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payout
     */
    omit?: PayoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayoutInclude<ExtArgs> | null
    /**
     * The data needed to create a Payout.
     */
    data: XOR<PayoutCreateInput, PayoutUncheckedCreateInput>
  }

  /**
   * Payout createMany
   */
  export type PayoutCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payouts.
     */
    data: PayoutCreateManyInput | PayoutCreateManyInput[]
  }

  /**
   * Payout update
   */
  export type PayoutUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payout
     */
    select?: PayoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payout
     */
    omit?: PayoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayoutInclude<ExtArgs> | null
    /**
     * The data needed to update a Payout.
     */
    data: XOR<PayoutUpdateInput, PayoutUncheckedUpdateInput>
    /**
     * Choose, which Payout to update.
     */
    where: PayoutWhereUniqueInput
  }

  /**
   * Payout updateMany
   */
  export type PayoutUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payouts.
     */
    data: XOR<PayoutUpdateManyMutationInput, PayoutUncheckedUpdateManyInput>
    /**
     * Filter which Payouts to update
     */
    where?: PayoutWhereInput
    /**
     * Limit how many Payouts to update.
     */
    limit?: number
  }

  /**
   * Payout upsert
   */
  export type PayoutUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payout
     */
    select?: PayoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payout
     */
    omit?: PayoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayoutInclude<ExtArgs> | null
    /**
     * The filter to search for the Payout to update in case it exists.
     */
    where: PayoutWhereUniqueInput
    /**
     * In case the Payout found by the `where` argument doesn't exist, create a new Payout with this data.
     */
    create: XOR<PayoutCreateInput, PayoutUncheckedCreateInput>
    /**
     * In case the Payout was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PayoutUpdateInput, PayoutUncheckedUpdateInput>
  }

  /**
   * Payout delete
   */
  export type PayoutDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payout
     */
    select?: PayoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payout
     */
    omit?: PayoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayoutInclude<ExtArgs> | null
    /**
     * Filter which Payout to delete.
     */
    where: PayoutWhereUniqueInput
  }

  /**
   * Payout deleteMany
   */
  export type PayoutDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payouts to delete
     */
    where?: PayoutWhereInput
    /**
     * Limit how many Payouts to delete.
     */
    limit?: number
  }

  /**
   * Payout findRaw
   */
  export type PayoutFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Payout aggregateRaw
   */
  export type PayoutAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Payout without action
   */
  export type PayoutDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payout
     */
    select?: PayoutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payout
     */
    omit?: PayoutOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PayoutInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const UserScalarFieldEnum: {
    id: 'id',
    clerkUserId: 'clerkUserId',
    email: 'email',
    password: 'password',
    username: 'username',
    avatar: 'avatar',
    role: 'role',
    isSubscribed: 'isSubscribed',
    paddleCustomerId: 'paddleCustomerId',
    paddleEmail: 'paddleEmail',
    paystackCustomerCode: 'paystackCustomerCode',
    paystackAuthCode: 'paystackAuthCode',
    referredByAffiliateId: 'referredByAffiliateId',
    firstPaidAt: 'firstPaidAt',
    telegramChatId: 'telegramChatId',
    telegramUsername: 'telegramUsername',
    telegramLinkedAt: 'telegramLinkedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SubscriptionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    productName: 'productName',
    paystackSubscriptionCode: 'paystackSubscriptionCode',
    paystackCustomerCode: 'paystackCustomerCode',
    paystackPlanCode: 'paystackPlanCode',
    paystackEmailToken: 'paystackEmailToken',
    status: 'status',
    currency: 'currency',
    unitAmountMinor: 'unitAmountMinor',
    interval: 'interval',
    intervalCount: 'intervalCount',
    currentPeriodStart: 'currentPeriodStart',
    currentPeriodEnd: 'currentPeriodEnd',
    cancelAtPeriodEnd: 'cancelAtPeriodEnd',
    canceledAt: 'canceledAt',
    affiliateId: 'affiliateId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SubscriptionScalarFieldEnum = (typeof SubscriptionScalarFieldEnum)[keyof typeof SubscriptionScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    amount: 'amount',
    method: 'method',
    status: 'status',
    reference: 'reference',
    provider: 'provider',
    createdAt: 'createdAt',
    currency: 'currency',
    fxRateToGBP: 'fxRateToGBP',
    amountMinor: 'amountMinor',
    chargedCurrency: 'chargedCurrency',
    affiliateId: 'affiliateId',
    commissionId: 'commissionId'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const TelegramLinkTokenScalarFieldEnum: {
    id: 'id',
    token: 'token',
    userId: 'userId',
    createdAt: 'createdAt',
    expiresAt: 'expiresAt',
    usedAt: 'usedAt'
  };

  export type TelegramLinkTokenScalarFieldEnum = (typeof TelegramLinkTokenScalarFieldEnum)[keyof typeof TelegramLinkTokenScalarFieldEnum]


  export const TicketScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    subject: 'subject',
    category: 'category',
    priority: 'priority',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TicketScalarFieldEnum = (typeof TicketScalarFieldEnum)[keyof typeof TicketScalarFieldEnum]


  export const TicketMessageScalarFieldEnum: {
    id: 'id',
    ticketId: 'ticketId',
    authorId: 'authorId',
    body: 'body',
    isStaff: 'isStaff',
    createdAt: 'createdAt'
  };

  export type TicketMessageScalarFieldEnum = (typeof TicketMessageScalarFieldEnum)[keyof typeof TicketMessageScalarFieldEnum]


  export const PredictionScalarFieldEnum: {
    id: 'id',
    fixtureId: 'fixtureId',
    leagueId: 'leagueId',
    leagueSlug: 'leagueSlug',
    date: 'date',
    homeTeam: 'homeTeam',
    awayTeam: 'awayTeam',
    predictedHome: 'predictedHome',
    predictedAway: 'predictedAway',
    pick: 'pick',
    impliedOdds: 'impliedOdds',
    status: 'status',
    actualHome: 'actualHome',
    actualAway: 'actualAway',
    outcome: 'outcome',
    exactHit: 'exactHit',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PredictionScalarFieldEnum = (typeof PredictionScalarFieldEnum)[keyof typeof PredictionScalarFieldEnum]


  export const AffiliateScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    email: 'email',
    code: 'code',
    ratePct: 'ratePct',
    flatMinor: 'flatMinor',
    currency: 'currency',
    isActive: 'isActive',
    clicks: 'clicks',
    conversions: 'conversions',
    lifetimeMinor: 'lifetimeMinor',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AffiliateScalarFieldEnum = (typeof AffiliateScalarFieldEnum)[keyof typeof AffiliateScalarFieldEnum]


  export const ReferralClickScalarFieldEnum: {
    id: 'id',
    affiliateId: 'affiliateId',
    ip: 'ip',
    ua: 'ua',
    referrer: 'referrer',
    createdAt: 'createdAt'
  };

  export type ReferralClickScalarFieldEnum = (typeof ReferralClickScalarFieldEnum)[keyof typeof ReferralClickScalarFieldEnum]


  export const CommissionScalarFieldEnum: {
    id: 'id',
    affiliateId: 'affiliateId',
    userId: 'userId',
    paymentId: 'paymentId',
    subscriptionId: 'subscriptionId',
    currency: 'currency',
    amountMinor: 'amountMinor',
    status: 'status',
    reason: 'reason',
    holdUntil: 'holdUntil',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CommissionScalarFieldEnum = (typeof CommissionScalarFieldEnum)[keyof typeof CommissionScalarFieldEnum]


  export const PayoutScalarFieldEnum: {
    id: 'id',
    affiliateId: 'affiliateId',
    status: 'status',
    currency: 'currency',
    amountMinor: 'amountMinor',
    note: 'note',
    commissionIds: 'commissionIds',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PayoutScalarFieldEnum = (typeof PayoutScalarFieldEnum)[keyof typeof PayoutScalarFieldEnum]


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
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'SubscriptionStatus'
   */
  export type EnumSubscriptionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionStatus'>
    


  /**
   * Reference to a field of type 'SubscriptionStatus[]'
   */
  export type ListEnumSubscriptionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SubscriptionStatus[]'>
    


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
   * Reference to a field of type 'TicketCategory'
   */
  export type EnumTicketCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TicketCategory'>
    


  /**
   * Reference to a field of type 'TicketCategory[]'
   */
  export type ListEnumTicketCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TicketCategory[]'>
    


  /**
   * Reference to a field of type 'TicketPriority'
   */
  export type EnumTicketPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TicketPriority'>
    


  /**
   * Reference to a field of type 'TicketPriority[]'
   */
  export type ListEnumTicketPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TicketPriority[]'>
    


  /**
   * Reference to a field of type 'TicketStatus'
   */
  export type EnumTicketStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TicketStatus'>
    


  /**
   * Reference to a field of type 'TicketStatus[]'
   */
  export type ListEnumTicketStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TicketStatus[]'>
    


  /**
   * Reference to a field of type 'CommissionStatus'
   */
  export type EnumCommissionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CommissionStatus'>
    


  /**
   * Reference to a field of type 'CommissionStatus[]'
   */
  export type ListEnumCommissionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CommissionStatus[]'>
    


  /**
   * Reference to a field of type 'PayoutStatus'
   */
  export type EnumPayoutStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PayoutStatus'>
    


  /**
   * Reference to a field of type 'PayoutStatus[]'
   */
  export type ListEnumPayoutStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PayoutStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    clerkUserId?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    username?: StringNullableFilter<"User"> | string | null
    avatar?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    isSubscribed?: BoolFilter<"User"> | boolean
    paddleCustomerId?: StringNullableFilter<"User"> | string | null
    paddleEmail?: StringNullableFilter<"User"> | string | null
    paystackCustomerCode?: StringNullableFilter<"User"> | string | null
    paystackAuthCode?: StringNullableFilter<"User"> | string | null
    referredByAffiliateId?: StringNullableFilter<"User"> | string | null
    firstPaidAt?: DateTimeNullableFilter<"User"> | Date | string | null
    telegramChatId?: StringNullableFilter<"User"> | string | null
    telegramUsername?: StringNullableFilter<"User"> | string | null
    telegramLinkedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    payments?: PaymentListRelationFilter
    telegramLinkTokens?: TelegramLinkTokenListRelationFilter
    subscriptions?: SubscriptionListRelationFilter
    Ticket?: TicketListRelationFilter
    Commission?: CommissionListRelationFilter
    Affiliate?: AffiliateListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    clerkUserId?: SortOrder
    email?: SortOrder
    password?: SortOrder
    username?: SortOrder
    avatar?: SortOrder
    role?: SortOrder
    isSubscribed?: SortOrder
    paddleCustomerId?: SortOrder
    paddleEmail?: SortOrder
    paystackCustomerCode?: SortOrder
    paystackAuthCode?: SortOrder
    referredByAffiliateId?: SortOrder
    firstPaidAt?: SortOrder
    telegramChatId?: SortOrder
    telegramUsername?: SortOrder
    telegramLinkedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    payments?: PaymentOrderByRelationAggregateInput
    telegramLinkTokens?: TelegramLinkTokenOrderByRelationAggregateInput
    subscriptions?: SubscriptionOrderByRelationAggregateInput
    Ticket?: TicketOrderByRelationAggregateInput
    Commission?: CommissionOrderByRelationAggregateInput
    Affiliate?: AffiliateOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    clerkUserId?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringNullableFilter<"User"> | string | null
    username?: StringNullableFilter<"User"> | string | null
    avatar?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    isSubscribed?: BoolFilter<"User"> | boolean
    paddleCustomerId?: StringNullableFilter<"User"> | string | null
    paddleEmail?: StringNullableFilter<"User"> | string | null
    paystackCustomerCode?: StringNullableFilter<"User"> | string | null
    paystackAuthCode?: StringNullableFilter<"User"> | string | null
    referredByAffiliateId?: StringNullableFilter<"User"> | string | null
    firstPaidAt?: DateTimeNullableFilter<"User"> | Date | string | null
    telegramChatId?: StringNullableFilter<"User"> | string | null
    telegramUsername?: StringNullableFilter<"User"> | string | null
    telegramLinkedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    payments?: PaymentListRelationFilter
    telegramLinkTokens?: TelegramLinkTokenListRelationFilter
    subscriptions?: SubscriptionListRelationFilter
    Ticket?: TicketListRelationFilter
    Commission?: CommissionListRelationFilter
    Affiliate?: AffiliateListRelationFilter
  }, "id" | "clerkUserId" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    clerkUserId?: SortOrder
    email?: SortOrder
    password?: SortOrder
    username?: SortOrder
    avatar?: SortOrder
    role?: SortOrder
    isSubscribed?: SortOrder
    paddleCustomerId?: SortOrder
    paddleEmail?: SortOrder
    paystackCustomerCode?: SortOrder
    paystackAuthCode?: SortOrder
    referredByAffiliateId?: SortOrder
    firstPaidAt?: SortOrder
    telegramChatId?: SortOrder
    telegramUsername?: SortOrder
    telegramLinkedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    clerkUserId?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    username?: StringNullableWithAggregatesFilter<"User"> | string | null
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    isSubscribed?: BoolWithAggregatesFilter<"User"> | boolean
    paddleCustomerId?: StringNullableWithAggregatesFilter<"User"> | string | null
    paddleEmail?: StringNullableWithAggregatesFilter<"User"> | string | null
    paystackCustomerCode?: StringNullableWithAggregatesFilter<"User"> | string | null
    paystackAuthCode?: StringNullableWithAggregatesFilter<"User"> | string | null
    referredByAffiliateId?: StringNullableWithAggregatesFilter<"User"> | string | null
    firstPaidAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    telegramChatId?: StringNullableWithAggregatesFilter<"User"> | string | null
    telegramUsername?: StringNullableWithAggregatesFilter<"User"> | string | null
    telegramLinkedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SubscriptionWhereInput = {
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    id?: StringFilter<"Subscription"> | string
    userId?: StringFilter<"Subscription"> | string
    productName?: StringNullableFilter<"Subscription"> | string | null
    paystackSubscriptionCode?: StringNullableFilter<"Subscription"> | string | null
    paystackCustomerCode?: StringNullableFilter<"Subscription"> | string | null
    paystackPlanCode?: StringNullableFilter<"Subscription"> | string | null
    paystackEmailToken?: StringNullableFilter<"Subscription"> | string | null
    status?: EnumSubscriptionStatusFilter<"Subscription"> | $Enums.SubscriptionStatus
    currency?: StringFilter<"Subscription"> | string
    unitAmountMinor?: IntFilter<"Subscription"> | number
    interval?: StringFilter<"Subscription"> | string
    intervalCount?: IntFilter<"Subscription"> | number
    currentPeriodStart?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    currentPeriodEnd?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    cancelAtPeriodEnd?: BoolFilter<"Subscription"> | boolean
    canceledAt?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    affiliateId?: StringNullableFilter<"Subscription"> | string | null
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeFilter<"Subscription"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    Commission?: CommissionListRelationFilter
  }

  export type SubscriptionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    productName?: SortOrder
    paystackSubscriptionCode?: SortOrder
    paystackCustomerCode?: SortOrder
    paystackPlanCode?: SortOrder
    paystackEmailToken?: SortOrder
    status?: SortOrder
    currency?: SortOrder
    unitAmountMinor?: SortOrder
    interval?: SortOrder
    intervalCount?: SortOrder
    currentPeriodStart?: SortOrder
    currentPeriodEnd?: SortOrder
    cancelAtPeriodEnd?: SortOrder
    canceledAt?: SortOrder
    affiliateId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    Commission?: CommissionOrderByRelationAggregateInput
  }

  export type SubscriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: SubscriptionWhereInput | SubscriptionWhereInput[]
    OR?: SubscriptionWhereInput[]
    NOT?: SubscriptionWhereInput | SubscriptionWhereInput[]
    productName?: StringNullableFilter<"Subscription"> | string | null
    paystackSubscriptionCode?: StringNullableFilter<"Subscription"> | string | null
    paystackCustomerCode?: StringNullableFilter<"Subscription"> | string | null
    paystackPlanCode?: StringNullableFilter<"Subscription"> | string | null
    paystackEmailToken?: StringNullableFilter<"Subscription"> | string | null
    status?: EnumSubscriptionStatusFilter<"Subscription"> | $Enums.SubscriptionStatus
    currency?: StringFilter<"Subscription"> | string
    unitAmountMinor?: IntFilter<"Subscription"> | number
    interval?: StringFilter<"Subscription"> | string
    intervalCount?: IntFilter<"Subscription"> | number
    currentPeriodStart?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    currentPeriodEnd?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    cancelAtPeriodEnd?: BoolFilter<"Subscription"> | boolean
    canceledAt?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    affiliateId?: StringNullableFilter<"Subscription"> | string | null
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeFilter<"Subscription"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    Commission?: CommissionListRelationFilter
  }, "id" | "userId">

  export type SubscriptionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    productName?: SortOrder
    paystackSubscriptionCode?: SortOrder
    paystackCustomerCode?: SortOrder
    paystackPlanCode?: SortOrder
    paystackEmailToken?: SortOrder
    status?: SortOrder
    currency?: SortOrder
    unitAmountMinor?: SortOrder
    interval?: SortOrder
    intervalCount?: SortOrder
    currentPeriodStart?: SortOrder
    currentPeriodEnd?: SortOrder
    cancelAtPeriodEnd?: SortOrder
    canceledAt?: SortOrder
    affiliateId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SubscriptionCountOrderByAggregateInput
    _avg?: SubscriptionAvgOrderByAggregateInput
    _max?: SubscriptionMaxOrderByAggregateInput
    _min?: SubscriptionMinOrderByAggregateInput
    _sum?: SubscriptionSumOrderByAggregateInput
  }

  export type SubscriptionScalarWhereWithAggregatesInput = {
    AND?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    OR?: SubscriptionScalarWhereWithAggregatesInput[]
    NOT?: SubscriptionScalarWhereWithAggregatesInput | SubscriptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Subscription"> | string
    userId?: StringWithAggregatesFilter<"Subscription"> | string
    productName?: StringNullableWithAggregatesFilter<"Subscription"> | string | null
    paystackSubscriptionCode?: StringNullableWithAggregatesFilter<"Subscription"> | string | null
    paystackCustomerCode?: StringNullableWithAggregatesFilter<"Subscription"> | string | null
    paystackPlanCode?: StringNullableWithAggregatesFilter<"Subscription"> | string | null
    paystackEmailToken?: StringNullableWithAggregatesFilter<"Subscription"> | string | null
    status?: EnumSubscriptionStatusWithAggregatesFilter<"Subscription"> | $Enums.SubscriptionStatus
    currency?: StringWithAggregatesFilter<"Subscription"> | string
    unitAmountMinor?: IntWithAggregatesFilter<"Subscription"> | number
    interval?: StringWithAggregatesFilter<"Subscription"> | string
    intervalCount?: IntWithAggregatesFilter<"Subscription"> | number
    currentPeriodStart?: DateTimeNullableWithAggregatesFilter<"Subscription"> | Date | string | null
    currentPeriodEnd?: DateTimeNullableWithAggregatesFilter<"Subscription"> | Date | string | null
    cancelAtPeriodEnd?: BoolWithAggregatesFilter<"Subscription"> | boolean
    canceledAt?: DateTimeNullableWithAggregatesFilter<"Subscription"> | Date | string | null
    affiliateId?: StringNullableWithAggregatesFilter<"Subscription"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Subscription"> | Date | string
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: StringFilter<"Payment"> | string
    userId?: StringFilter<"Payment"> | string
    amount?: FloatFilter<"Payment"> | number
    method?: StringFilter<"Payment"> | string
    status?: StringFilter<"Payment"> | string
    reference?: StringFilter<"Payment"> | string
    provider?: StringFilter<"Payment"> | string
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    currency?: StringNullableFilter<"Payment"> | string | null
    fxRateToGBP?: FloatNullableFilter<"Payment"> | number | null
    amountMinor?: IntNullableFilter<"Payment"> | number | null
    chargedCurrency?: StringNullableFilter<"Payment"> | string | null
    affiliateId?: StringNullableFilter<"Payment"> | string | null
    commissionId?: StringNullableFilter<"Payment"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    Commission?: CommissionListRelationFilter
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    status?: SortOrder
    reference?: SortOrder
    provider?: SortOrder
    createdAt?: SortOrder
    currency?: SortOrder
    fxRateToGBP?: SortOrder
    amountMinor?: SortOrder
    chargedCurrency?: SortOrder
    affiliateId?: SortOrder
    commissionId?: SortOrder
    user?: UserOrderByWithRelationInput
    Commission?: CommissionOrderByRelationAggregateInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    userId?: StringFilter<"Payment"> | string
    amount?: FloatFilter<"Payment"> | number
    method?: StringFilter<"Payment"> | string
    status?: StringFilter<"Payment"> | string
    reference?: StringFilter<"Payment"> | string
    provider?: StringFilter<"Payment"> | string
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    currency?: StringNullableFilter<"Payment"> | string | null
    fxRateToGBP?: FloatNullableFilter<"Payment"> | number | null
    amountMinor?: IntNullableFilter<"Payment"> | number | null
    chargedCurrency?: StringNullableFilter<"Payment"> | string | null
    affiliateId?: StringNullableFilter<"Payment"> | string | null
    commissionId?: StringNullableFilter<"Payment"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    Commission?: CommissionListRelationFilter
  }, "id">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    status?: SortOrder
    reference?: SortOrder
    provider?: SortOrder
    createdAt?: SortOrder
    currency?: SortOrder
    fxRateToGBP?: SortOrder
    amountMinor?: SortOrder
    chargedCurrency?: SortOrder
    affiliateId?: SortOrder
    commissionId?: SortOrder
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
    userId?: StringWithAggregatesFilter<"Payment"> | string
    amount?: FloatWithAggregatesFilter<"Payment"> | number
    method?: StringWithAggregatesFilter<"Payment"> | string
    status?: StringWithAggregatesFilter<"Payment"> | string
    reference?: StringWithAggregatesFilter<"Payment"> | string
    provider?: StringWithAggregatesFilter<"Payment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    currency?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    fxRateToGBP?: FloatNullableWithAggregatesFilter<"Payment"> | number | null
    amountMinor?: IntNullableWithAggregatesFilter<"Payment"> | number | null
    chargedCurrency?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    affiliateId?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    commissionId?: StringNullableWithAggregatesFilter<"Payment"> | string | null
  }

  export type TelegramLinkTokenWhereInput = {
    AND?: TelegramLinkTokenWhereInput | TelegramLinkTokenWhereInput[]
    OR?: TelegramLinkTokenWhereInput[]
    NOT?: TelegramLinkTokenWhereInput | TelegramLinkTokenWhereInput[]
    id?: StringFilter<"TelegramLinkToken"> | string
    token?: StringFilter<"TelegramLinkToken"> | string
    userId?: StringFilter<"TelegramLinkToken"> | string
    createdAt?: DateTimeFilter<"TelegramLinkToken"> | Date | string
    expiresAt?: DateTimeFilter<"TelegramLinkToken"> | Date | string
    usedAt?: DateTimeNullableFilter<"TelegramLinkToken"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TelegramLinkTokenOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    usedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type TelegramLinkTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    token?: string
    AND?: TelegramLinkTokenWhereInput | TelegramLinkTokenWhereInput[]
    OR?: TelegramLinkTokenWhereInput[]
    NOT?: TelegramLinkTokenWhereInput | TelegramLinkTokenWhereInput[]
    userId?: StringFilter<"TelegramLinkToken"> | string
    createdAt?: DateTimeFilter<"TelegramLinkToken"> | Date | string
    expiresAt?: DateTimeFilter<"TelegramLinkToken"> | Date | string
    usedAt?: DateTimeNullableFilter<"TelegramLinkToken"> | Date | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "token">

  export type TelegramLinkTokenOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    usedAt?: SortOrder
    _count?: TelegramLinkTokenCountOrderByAggregateInput
    _max?: TelegramLinkTokenMaxOrderByAggregateInput
    _min?: TelegramLinkTokenMinOrderByAggregateInput
  }

  export type TelegramLinkTokenScalarWhereWithAggregatesInput = {
    AND?: TelegramLinkTokenScalarWhereWithAggregatesInput | TelegramLinkTokenScalarWhereWithAggregatesInput[]
    OR?: TelegramLinkTokenScalarWhereWithAggregatesInput[]
    NOT?: TelegramLinkTokenScalarWhereWithAggregatesInput | TelegramLinkTokenScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TelegramLinkToken"> | string
    token?: StringWithAggregatesFilter<"TelegramLinkToken"> | string
    userId?: StringWithAggregatesFilter<"TelegramLinkToken"> | string
    createdAt?: DateTimeWithAggregatesFilter<"TelegramLinkToken"> | Date | string
    expiresAt?: DateTimeWithAggregatesFilter<"TelegramLinkToken"> | Date | string
    usedAt?: DateTimeNullableWithAggregatesFilter<"TelegramLinkToken"> | Date | string | null
  }

  export type TicketWhereInput = {
    AND?: TicketWhereInput | TicketWhereInput[]
    OR?: TicketWhereInput[]
    NOT?: TicketWhereInput | TicketWhereInput[]
    id?: StringFilter<"Ticket"> | string
    userId?: StringFilter<"Ticket"> | string
    subject?: StringFilter<"Ticket"> | string
    category?: EnumTicketCategoryFilter<"Ticket"> | $Enums.TicketCategory
    priority?: EnumTicketPriorityFilter<"Ticket"> | $Enums.TicketPriority
    status?: EnumTicketStatusFilter<"Ticket"> | $Enums.TicketStatus
    createdAt?: DateTimeFilter<"Ticket"> | Date | string
    updatedAt?: DateTimeFilter<"Ticket"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    messages?: TicketMessageListRelationFilter
  }

  export type TicketOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    subject?: SortOrder
    category?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    messages?: TicketMessageOrderByRelationAggregateInput
  }

  export type TicketWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TicketWhereInput | TicketWhereInput[]
    OR?: TicketWhereInput[]
    NOT?: TicketWhereInput | TicketWhereInput[]
    userId?: StringFilter<"Ticket"> | string
    subject?: StringFilter<"Ticket"> | string
    category?: EnumTicketCategoryFilter<"Ticket"> | $Enums.TicketCategory
    priority?: EnumTicketPriorityFilter<"Ticket"> | $Enums.TicketPriority
    status?: EnumTicketStatusFilter<"Ticket"> | $Enums.TicketStatus
    createdAt?: DateTimeFilter<"Ticket"> | Date | string
    updatedAt?: DateTimeFilter<"Ticket"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    messages?: TicketMessageListRelationFilter
  }, "id">

  export type TicketOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    subject?: SortOrder
    category?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TicketCountOrderByAggregateInput
    _max?: TicketMaxOrderByAggregateInput
    _min?: TicketMinOrderByAggregateInput
  }

  export type TicketScalarWhereWithAggregatesInput = {
    AND?: TicketScalarWhereWithAggregatesInput | TicketScalarWhereWithAggregatesInput[]
    OR?: TicketScalarWhereWithAggregatesInput[]
    NOT?: TicketScalarWhereWithAggregatesInput | TicketScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Ticket"> | string
    userId?: StringWithAggregatesFilter<"Ticket"> | string
    subject?: StringWithAggregatesFilter<"Ticket"> | string
    category?: EnumTicketCategoryWithAggregatesFilter<"Ticket"> | $Enums.TicketCategory
    priority?: EnumTicketPriorityWithAggregatesFilter<"Ticket"> | $Enums.TicketPriority
    status?: EnumTicketStatusWithAggregatesFilter<"Ticket"> | $Enums.TicketStatus
    createdAt?: DateTimeWithAggregatesFilter<"Ticket"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Ticket"> | Date | string
  }

  export type TicketMessageWhereInput = {
    AND?: TicketMessageWhereInput | TicketMessageWhereInput[]
    OR?: TicketMessageWhereInput[]
    NOT?: TicketMessageWhereInput | TicketMessageWhereInput[]
    id?: StringFilter<"TicketMessage"> | string
    ticketId?: StringFilter<"TicketMessage"> | string
    authorId?: StringFilter<"TicketMessage"> | string
    body?: StringFilter<"TicketMessage"> | string
    isStaff?: BoolFilter<"TicketMessage"> | boolean
    createdAt?: DateTimeFilter<"TicketMessage"> | Date | string
    ticket?: XOR<TicketScalarRelationFilter, TicketWhereInput>
  }

  export type TicketMessageOrderByWithRelationInput = {
    id?: SortOrder
    ticketId?: SortOrder
    authorId?: SortOrder
    body?: SortOrder
    isStaff?: SortOrder
    createdAt?: SortOrder
    ticket?: TicketOrderByWithRelationInput
  }

  export type TicketMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TicketMessageWhereInput | TicketMessageWhereInput[]
    OR?: TicketMessageWhereInput[]
    NOT?: TicketMessageWhereInput | TicketMessageWhereInput[]
    ticketId?: StringFilter<"TicketMessage"> | string
    authorId?: StringFilter<"TicketMessage"> | string
    body?: StringFilter<"TicketMessage"> | string
    isStaff?: BoolFilter<"TicketMessage"> | boolean
    createdAt?: DateTimeFilter<"TicketMessage"> | Date | string
    ticket?: XOR<TicketScalarRelationFilter, TicketWhereInput>
  }, "id">

  export type TicketMessageOrderByWithAggregationInput = {
    id?: SortOrder
    ticketId?: SortOrder
    authorId?: SortOrder
    body?: SortOrder
    isStaff?: SortOrder
    createdAt?: SortOrder
    _count?: TicketMessageCountOrderByAggregateInput
    _max?: TicketMessageMaxOrderByAggregateInput
    _min?: TicketMessageMinOrderByAggregateInput
  }

  export type TicketMessageScalarWhereWithAggregatesInput = {
    AND?: TicketMessageScalarWhereWithAggregatesInput | TicketMessageScalarWhereWithAggregatesInput[]
    OR?: TicketMessageScalarWhereWithAggregatesInput[]
    NOT?: TicketMessageScalarWhereWithAggregatesInput | TicketMessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TicketMessage"> | string
    ticketId?: StringWithAggregatesFilter<"TicketMessage"> | string
    authorId?: StringWithAggregatesFilter<"TicketMessage"> | string
    body?: StringWithAggregatesFilter<"TicketMessage"> | string
    isStaff?: BoolWithAggregatesFilter<"TicketMessage"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"TicketMessage"> | Date | string
  }

  export type PredictionWhereInput = {
    AND?: PredictionWhereInput | PredictionWhereInput[]
    OR?: PredictionWhereInput[]
    NOT?: PredictionWhereInput | PredictionWhereInput[]
    id?: StringFilter<"Prediction"> | string
    fixtureId?: IntFilter<"Prediction"> | number
    leagueId?: IntFilter<"Prediction"> | number
    leagueSlug?: StringFilter<"Prediction"> | string
    date?: DateTimeFilter<"Prediction"> | Date | string
    homeTeam?: StringFilter<"Prediction"> | string
    awayTeam?: StringFilter<"Prediction"> | string
    predictedHome?: IntFilter<"Prediction"> | number
    predictedAway?: IntFilter<"Prediction"> | number
    pick?: StringFilter<"Prediction"> | string
    impliedOdds?: FloatNullableFilter<"Prediction"> | number | null
    status?: StringNullableFilter<"Prediction"> | string | null
    actualHome?: IntNullableFilter<"Prediction"> | number | null
    actualAway?: IntNullableFilter<"Prediction"> | number | null
    outcome?: StringNullableFilter<"Prediction"> | string | null
    exactHit?: BoolFilter<"Prediction"> | boolean
    createdAt?: DateTimeFilter<"Prediction"> | Date | string
    updatedAt?: DateTimeFilter<"Prediction"> | Date | string
  }

  export type PredictionOrderByWithRelationInput = {
    id?: SortOrder
    fixtureId?: SortOrder
    leagueId?: SortOrder
    leagueSlug?: SortOrder
    date?: SortOrder
    homeTeam?: SortOrder
    awayTeam?: SortOrder
    predictedHome?: SortOrder
    predictedAway?: SortOrder
    pick?: SortOrder
    impliedOdds?: SortOrder
    status?: SortOrder
    actualHome?: SortOrder
    actualAway?: SortOrder
    outcome?: SortOrder
    exactHit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PredictionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    fixtureId?: number
    AND?: PredictionWhereInput | PredictionWhereInput[]
    OR?: PredictionWhereInput[]
    NOT?: PredictionWhereInput | PredictionWhereInput[]
    leagueId?: IntFilter<"Prediction"> | number
    leagueSlug?: StringFilter<"Prediction"> | string
    date?: DateTimeFilter<"Prediction"> | Date | string
    homeTeam?: StringFilter<"Prediction"> | string
    awayTeam?: StringFilter<"Prediction"> | string
    predictedHome?: IntFilter<"Prediction"> | number
    predictedAway?: IntFilter<"Prediction"> | number
    pick?: StringFilter<"Prediction"> | string
    impliedOdds?: FloatNullableFilter<"Prediction"> | number | null
    status?: StringNullableFilter<"Prediction"> | string | null
    actualHome?: IntNullableFilter<"Prediction"> | number | null
    actualAway?: IntNullableFilter<"Prediction"> | number | null
    outcome?: StringNullableFilter<"Prediction"> | string | null
    exactHit?: BoolFilter<"Prediction"> | boolean
    createdAt?: DateTimeFilter<"Prediction"> | Date | string
    updatedAt?: DateTimeFilter<"Prediction"> | Date | string
  }, "id" | "fixtureId">

  export type PredictionOrderByWithAggregationInput = {
    id?: SortOrder
    fixtureId?: SortOrder
    leagueId?: SortOrder
    leagueSlug?: SortOrder
    date?: SortOrder
    homeTeam?: SortOrder
    awayTeam?: SortOrder
    predictedHome?: SortOrder
    predictedAway?: SortOrder
    pick?: SortOrder
    impliedOdds?: SortOrder
    status?: SortOrder
    actualHome?: SortOrder
    actualAway?: SortOrder
    outcome?: SortOrder
    exactHit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PredictionCountOrderByAggregateInput
    _avg?: PredictionAvgOrderByAggregateInput
    _max?: PredictionMaxOrderByAggregateInput
    _min?: PredictionMinOrderByAggregateInput
    _sum?: PredictionSumOrderByAggregateInput
  }

  export type PredictionScalarWhereWithAggregatesInput = {
    AND?: PredictionScalarWhereWithAggregatesInput | PredictionScalarWhereWithAggregatesInput[]
    OR?: PredictionScalarWhereWithAggregatesInput[]
    NOT?: PredictionScalarWhereWithAggregatesInput | PredictionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Prediction"> | string
    fixtureId?: IntWithAggregatesFilter<"Prediction"> | number
    leagueId?: IntWithAggregatesFilter<"Prediction"> | number
    leagueSlug?: StringWithAggregatesFilter<"Prediction"> | string
    date?: DateTimeWithAggregatesFilter<"Prediction"> | Date | string
    homeTeam?: StringWithAggregatesFilter<"Prediction"> | string
    awayTeam?: StringWithAggregatesFilter<"Prediction"> | string
    predictedHome?: IntWithAggregatesFilter<"Prediction"> | number
    predictedAway?: IntWithAggregatesFilter<"Prediction"> | number
    pick?: StringWithAggregatesFilter<"Prediction"> | string
    impliedOdds?: FloatNullableWithAggregatesFilter<"Prediction"> | number | null
    status?: StringNullableWithAggregatesFilter<"Prediction"> | string | null
    actualHome?: IntNullableWithAggregatesFilter<"Prediction"> | number | null
    actualAway?: IntNullableWithAggregatesFilter<"Prediction"> | number | null
    outcome?: StringNullableWithAggregatesFilter<"Prediction"> | string | null
    exactHit?: BoolWithAggregatesFilter<"Prediction"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Prediction"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Prediction"> | Date | string
  }

  export type AffiliateWhereInput = {
    AND?: AffiliateWhereInput | AffiliateWhereInput[]
    OR?: AffiliateWhereInput[]
    NOT?: AffiliateWhereInput | AffiliateWhereInput[]
    id?: StringFilter<"Affiliate"> | string
    userId?: StringNullableFilter<"Affiliate"> | string | null
    name?: StringFilter<"Affiliate"> | string
    email?: StringNullableFilter<"Affiliate"> | string | null
    code?: StringFilter<"Affiliate"> | string
    ratePct?: FloatNullableFilter<"Affiliate"> | number | null
    flatMinor?: IntNullableFilter<"Affiliate"> | number | null
    currency?: StringNullableFilter<"Affiliate"> | string | null
    isActive?: BoolFilter<"Affiliate"> | boolean
    clicks?: IntFilter<"Affiliate"> | number
    conversions?: IntFilter<"Affiliate"> | number
    lifetimeMinor?: IntFilter<"Affiliate"> | number
    createdAt?: DateTimeFilter<"Affiliate"> | Date | string
    updatedAt?: DateTimeFilter<"Affiliate"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    referralClicks?: ReferralClickListRelationFilter
    commissions?: CommissionListRelationFilter
    payouts?: PayoutListRelationFilter
  }

  export type AffiliateOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    code?: SortOrder
    ratePct?: SortOrder
    flatMinor?: SortOrder
    currency?: SortOrder
    isActive?: SortOrder
    clicks?: SortOrder
    conversions?: SortOrder
    lifetimeMinor?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    referralClicks?: ReferralClickOrderByRelationAggregateInput
    commissions?: CommissionOrderByRelationAggregateInput
    payouts?: PayoutOrderByRelationAggregateInput
  }

  export type AffiliateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: AffiliateWhereInput | AffiliateWhereInput[]
    OR?: AffiliateWhereInput[]
    NOT?: AffiliateWhereInput | AffiliateWhereInput[]
    userId?: StringNullableFilter<"Affiliate"> | string | null
    name?: StringFilter<"Affiliate"> | string
    email?: StringNullableFilter<"Affiliate"> | string | null
    ratePct?: FloatNullableFilter<"Affiliate"> | number | null
    flatMinor?: IntNullableFilter<"Affiliate"> | number | null
    currency?: StringNullableFilter<"Affiliate"> | string | null
    isActive?: BoolFilter<"Affiliate"> | boolean
    clicks?: IntFilter<"Affiliate"> | number
    conversions?: IntFilter<"Affiliate"> | number
    lifetimeMinor?: IntFilter<"Affiliate"> | number
    createdAt?: DateTimeFilter<"Affiliate"> | Date | string
    updatedAt?: DateTimeFilter<"Affiliate"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    referralClicks?: ReferralClickListRelationFilter
    commissions?: CommissionListRelationFilter
    payouts?: PayoutListRelationFilter
  }, "id" | "code">

  export type AffiliateOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    code?: SortOrder
    ratePct?: SortOrder
    flatMinor?: SortOrder
    currency?: SortOrder
    isActive?: SortOrder
    clicks?: SortOrder
    conversions?: SortOrder
    lifetimeMinor?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AffiliateCountOrderByAggregateInput
    _avg?: AffiliateAvgOrderByAggregateInput
    _max?: AffiliateMaxOrderByAggregateInput
    _min?: AffiliateMinOrderByAggregateInput
    _sum?: AffiliateSumOrderByAggregateInput
  }

  export type AffiliateScalarWhereWithAggregatesInput = {
    AND?: AffiliateScalarWhereWithAggregatesInput | AffiliateScalarWhereWithAggregatesInput[]
    OR?: AffiliateScalarWhereWithAggregatesInput[]
    NOT?: AffiliateScalarWhereWithAggregatesInput | AffiliateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Affiliate"> | string
    userId?: StringNullableWithAggregatesFilter<"Affiliate"> | string | null
    name?: StringWithAggregatesFilter<"Affiliate"> | string
    email?: StringNullableWithAggregatesFilter<"Affiliate"> | string | null
    code?: StringWithAggregatesFilter<"Affiliate"> | string
    ratePct?: FloatNullableWithAggregatesFilter<"Affiliate"> | number | null
    flatMinor?: IntNullableWithAggregatesFilter<"Affiliate"> | number | null
    currency?: StringNullableWithAggregatesFilter<"Affiliate"> | string | null
    isActive?: BoolWithAggregatesFilter<"Affiliate"> | boolean
    clicks?: IntWithAggregatesFilter<"Affiliate"> | number
    conversions?: IntWithAggregatesFilter<"Affiliate"> | number
    lifetimeMinor?: IntWithAggregatesFilter<"Affiliate"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Affiliate"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Affiliate"> | Date | string
  }

  export type ReferralClickWhereInput = {
    AND?: ReferralClickWhereInput | ReferralClickWhereInput[]
    OR?: ReferralClickWhereInput[]
    NOT?: ReferralClickWhereInput | ReferralClickWhereInput[]
    id?: StringFilter<"ReferralClick"> | string
    affiliateId?: StringFilter<"ReferralClick"> | string
    ip?: StringNullableFilter<"ReferralClick"> | string | null
    ua?: StringNullableFilter<"ReferralClick"> | string | null
    referrer?: StringNullableFilter<"ReferralClick"> | string | null
    createdAt?: DateTimeFilter<"ReferralClick"> | Date | string
    affiliate?: XOR<AffiliateScalarRelationFilter, AffiliateWhereInput>
  }

  export type ReferralClickOrderByWithRelationInput = {
    id?: SortOrder
    affiliateId?: SortOrder
    ip?: SortOrder
    ua?: SortOrder
    referrer?: SortOrder
    createdAt?: SortOrder
    affiliate?: AffiliateOrderByWithRelationInput
  }

  export type ReferralClickWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReferralClickWhereInput | ReferralClickWhereInput[]
    OR?: ReferralClickWhereInput[]
    NOT?: ReferralClickWhereInput | ReferralClickWhereInput[]
    affiliateId?: StringFilter<"ReferralClick"> | string
    ip?: StringNullableFilter<"ReferralClick"> | string | null
    ua?: StringNullableFilter<"ReferralClick"> | string | null
    referrer?: StringNullableFilter<"ReferralClick"> | string | null
    createdAt?: DateTimeFilter<"ReferralClick"> | Date | string
    affiliate?: XOR<AffiliateScalarRelationFilter, AffiliateWhereInput>
  }, "id">

  export type ReferralClickOrderByWithAggregationInput = {
    id?: SortOrder
    affiliateId?: SortOrder
    ip?: SortOrder
    ua?: SortOrder
    referrer?: SortOrder
    createdAt?: SortOrder
    _count?: ReferralClickCountOrderByAggregateInput
    _max?: ReferralClickMaxOrderByAggregateInput
    _min?: ReferralClickMinOrderByAggregateInput
  }

  export type ReferralClickScalarWhereWithAggregatesInput = {
    AND?: ReferralClickScalarWhereWithAggregatesInput | ReferralClickScalarWhereWithAggregatesInput[]
    OR?: ReferralClickScalarWhereWithAggregatesInput[]
    NOT?: ReferralClickScalarWhereWithAggregatesInput | ReferralClickScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ReferralClick"> | string
    affiliateId?: StringWithAggregatesFilter<"ReferralClick"> | string
    ip?: StringNullableWithAggregatesFilter<"ReferralClick"> | string | null
    ua?: StringNullableWithAggregatesFilter<"ReferralClick"> | string | null
    referrer?: StringNullableWithAggregatesFilter<"ReferralClick"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ReferralClick"> | Date | string
  }

  export type CommissionWhereInput = {
    AND?: CommissionWhereInput | CommissionWhereInput[]
    OR?: CommissionWhereInput[]
    NOT?: CommissionWhereInput | CommissionWhereInput[]
    id?: StringFilter<"Commission"> | string
    affiliateId?: StringFilter<"Commission"> | string
    userId?: StringFilter<"Commission"> | string
    paymentId?: StringNullableFilter<"Commission"> | string | null
    subscriptionId?: StringNullableFilter<"Commission"> | string | null
    currency?: StringFilter<"Commission"> | string
    amountMinor?: IntFilter<"Commission"> | number
    status?: EnumCommissionStatusFilter<"Commission"> | $Enums.CommissionStatus
    reason?: StringNullableFilter<"Commission"> | string | null
    holdUntil?: DateTimeNullableFilter<"Commission"> | Date | string | null
    createdAt?: DateTimeFilter<"Commission"> | Date | string
    updatedAt?: DateTimeFilter<"Commission"> | Date | string
    affiliate?: XOR<AffiliateScalarRelationFilter, AffiliateWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    payment?: XOR<PaymentNullableScalarRelationFilter, PaymentWhereInput> | null
    subscription?: XOR<SubscriptionNullableScalarRelationFilter, SubscriptionWhereInput> | null
  }

  export type CommissionOrderByWithRelationInput = {
    id?: SortOrder
    affiliateId?: SortOrder
    userId?: SortOrder
    paymentId?: SortOrder
    subscriptionId?: SortOrder
    currency?: SortOrder
    amountMinor?: SortOrder
    status?: SortOrder
    reason?: SortOrder
    holdUntil?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    affiliate?: AffiliateOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
    payment?: PaymentOrderByWithRelationInput
    subscription?: SubscriptionOrderByWithRelationInput
  }

  export type CommissionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    affiliateId_paymentId_userId?: CommissionAffiliateIdPaymentIdUserIdCompoundUniqueInput
    AND?: CommissionWhereInput | CommissionWhereInput[]
    OR?: CommissionWhereInput[]
    NOT?: CommissionWhereInput | CommissionWhereInput[]
    affiliateId?: StringFilter<"Commission"> | string
    userId?: StringFilter<"Commission"> | string
    paymentId?: StringNullableFilter<"Commission"> | string | null
    subscriptionId?: StringNullableFilter<"Commission"> | string | null
    currency?: StringFilter<"Commission"> | string
    amountMinor?: IntFilter<"Commission"> | number
    status?: EnumCommissionStatusFilter<"Commission"> | $Enums.CommissionStatus
    reason?: StringNullableFilter<"Commission"> | string | null
    holdUntil?: DateTimeNullableFilter<"Commission"> | Date | string | null
    createdAt?: DateTimeFilter<"Commission"> | Date | string
    updatedAt?: DateTimeFilter<"Commission"> | Date | string
    affiliate?: XOR<AffiliateScalarRelationFilter, AffiliateWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    payment?: XOR<PaymentNullableScalarRelationFilter, PaymentWhereInput> | null
    subscription?: XOR<SubscriptionNullableScalarRelationFilter, SubscriptionWhereInput> | null
  }, "id" | "affiliateId_paymentId_userId">

  export type CommissionOrderByWithAggregationInput = {
    id?: SortOrder
    affiliateId?: SortOrder
    userId?: SortOrder
    paymentId?: SortOrder
    subscriptionId?: SortOrder
    currency?: SortOrder
    amountMinor?: SortOrder
    status?: SortOrder
    reason?: SortOrder
    holdUntil?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CommissionCountOrderByAggregateInput
    _avg?: CommissionAvgOrderByAggregateInput
    _max?: CommissionMaxOrderByAggregateInput
    _min?: CommissionMinOrderByAggregateInput
    _sum?: CommissionSumOrderByAggregateInput
  }

  export type CommissionScalarWhereWithAggregatesInput = {
    AND?: CommissionScalarWhereWithAggregatesInput | CommissionScalarWhereWithAggregatesInput[]
    OR?: CommissionScalarWhereWithAggregatesInput[]
    NOT?: CommissionScalarWhereWithAggregatesInput | CommissionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Commission"> | string
    affiliateId?: StringWithAggregatesFilter<"Commission"> | string
    userId?: StringWithAggregatesFilter<"Commission"> | string
    paymentId?: StringNullableWithAggregatesFilter<"Commission"> | string | null
    subscriptionId?: StringNullableWithAggregatesFilter<"Commission"> | string | null
    currency?: StringWithAggregatesFilter<"Commission"> | string
    amountMinor?: IntWithAggregatesFilter<"Commission"> | number
    status?: EnumCommissionStatusWithAggregatesFilter<"Commission"> | $Enums.CommissionStatus
    reason?: StringNullableWithAggregatesFilter<"Commission"> | string | null
    holdUntil?: DateTimeNullableWithAggregatesFilter<"Commission"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Commission"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Commission"> | Date | string
  }

  export type PayoutWhereInput = {
    AND?: PayoutWhereInput | PayoutWhereInput[]
    OR?: PayoutWhereInput[]
    NOT?: PayoutWhereInput | PayoutWhereInput[]
    id?: StringFilter<"Payout"> | string
    affiliateId?: StringFilter<"Payout"> | string
    status?: EnumPayoutStatusFilter<"Payout"> | $Enums.PayoutStatus
    currency?: StringFilter<"Payout"> | string
    amountMinor?: IntFilter<"Payout"> | number
    note?: StringNullableFilter<"Payout"> | string | null
    commissionIds?: StringNullableListFilter<"Payout">
    createdAt?: DateTimeFilter<"Payout"> | Date | string
    updatedAt?: DateTimeFilter<"Payout"> | Date | string
    affiliate?: XOR<AffiliateScalarRelationFilter, AffiliateWhereInput>
  }

  export type PayoutOrderByWithRelationInput = {
    id?: SortOrder
    affiliateId?: SortOrder
    status?: SortOrder
    currency?: SortOrder
    amountMinor?: SortOrder
    note?: SortOrder
    commissionIds?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    affiliate?: AffiliateOrderByWithRelationInput
  }

  export type PayoutWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PayoutWhereInput | PayoutWhereInput[]
    OR?: PayoutWhereInput[]
    NOT?: PayoutWhereInput | PayoutWhereInput[]
    affiliateId?: StringFilter<"Payout"> | string
    status?: EnumPayoutStatusFilter<"Payout"> | $Enums.PayoutStatus
    currency?: StringFilter<"Payout"> | string
    amountMinor?: IntFilter<"Payout"> | number
    note?: StringNullableFilter<"Payout"> | string | null
    commissionIds?: StringNullableListFilter<"Payout">
    createdAt?: DateTimeFilter<"Payout"> | Date | string
    updatedAt?: DateTimeFilter<"Payout"> | Date | string
    affiliate?: XOR<AffiliateScalarRelationFilter, AffiliateWhereInput>
  }, "id">

  export type PayoutOrderByWithAggregationInput = {
    id?: SortOrder
    affiliateId?: SortOrder
    status?: SortOrder
    currency?: SortOrder
    amountMinor?: SortOrder
    note?: SortOrder
    commissionIds?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PayoutCountOrderByAggregateInput
    _avg?: PayoutAvgOrderByAggregateInput
    _max?: PayoutMaxOrderByAggregateInput
    _min?: PayoutMinOrderByAggregateInput
    _sum?: PayoutSumOrderByAggregateInput
  }

  export type PayoutScalarWhereWithAggregatesInput = {
    AND?: PayoutScalarWhereWithAggregatesInput | PayoutScalarWhereWithAggregatesInput[]
    OR?: PayoutScalarWhereWithAggregatesInput[]
    NOT?: PayoutScalarWhereWithAggregatesInput | PayoutScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Payout"> | string
    affiliateId?: StringWithAggregatesFilter<"Payout"> | string
    status?: EnumPayoutStatusWithAggregatesFilter<"Payout"> | $Enums.PayoutStatus
    currency?: StringWithAggregatesFilter<"Payout"> | string
    amountMinor?: IntWithAggregatesFilter<"Payout"> | number
    note?: StringNullableWithAggregatesFilter<"Payout"> | string | null
    commissionIds?: StringNullableListFilter<"Payout">
    createdAt?: DateTimeWithAggregatesFilter<"Payout"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Payout"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    clerkUserId: string
    email: string
    password?: string | null
    username?: string | null
    avatar?: string | null
    role?: $Enums.Role
    isSubscribed?: boolean
    paddleCustomerId?: string | null
    paddleEmail?: string | null
    paystackCustomerCode?: string | null
    paystackAuthCode?: string | null
    referredByAffiliateId?: string | null
    firstPaidAt?: Date | string | null
    telegramChatId?: string | null
    telegramUsername?: string | null
    telegramLinkedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentCreateNestedManyWithoutUserInput
    telegramLinkTokens?: TelegramLinkTokenCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionCreateNestedManyWithoutUserInput
    Ticket?: TicketCreateNestedManyWithoutUserInput
    Commission?: CommissionCreateNestedManyWithoutUserInput
    Affiliate?: AffiliateCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    clerkUserId: string
    email: string
    password?: string | null
    username?: string | null
    avatar?: string | null
    role?: $Enums.Role
    isSubscribed?: boolean
    paddleCustomerId?: string | null
    paddleEmail?: string | null
    paystackCustomerCode?: string | null
    paystackAuthCode?: string | null
    referredByAffiliateId?: string | null
    firstPaidAt?: Date | string | null
    telegramChatId?: string | null
    telegramUsername?: string | null
    telegramLinkedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    telegramLinkTokens?: TelegramLinkTokenUncheckedCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
    Ticket?: TicketUncheckedCreateNestedManyWithoutUserInput
    Commission?: CommissionUncheckedCreateNestedManyWithoutUserInput
    Affiliate?: AffiliateUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isSubscribed?: BoolFieldUpdateOperationsInput | boolean
    paddleCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    paddleEmail?: NullableStringFieldUpdateOperationsInput | string | null
    paystackCustomerCode?: NullableStringFieldUpdateOperationsInput | string | null
    paystackAuthCode?: NullableStringFieldUpdateOperationsInput | string | null
    referredByAffiliateId?: NullableStringFieldUpdateOperationsInput | string | null
    firstPaidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    telegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramUsername?: NullableStringFieldUpdateOperationsInput | string | null
    telegramLinkedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUpdateManyWithoutUserNestedInput
    telegramLinkTokens?: TelegramLinkTokenUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutUserNestedInput
    Ticket?: TicketUpdateManyWithoutUserNestedInput
    Commission?: CommissionUpdateManyWithoutUserNestedInput
    Affiliate?: AffiliateUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isSubscribed?: BoolFieldUpdateOperationsInput | boolean
    paddleCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    paddleEmail?: NullableStringFieldUpdateOperationsInput | string | null
    paystackCustomerCode?: NullableStringFieldUpdateOperationsInput | string | null
    paystackAuthCode?: NullableStringFieldUpdateOperationsInput | string | null
    referredByAffiliateId?: NullableStringFieldUpdateOperationsInput | string | null
    firstPaidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    telegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramUsername?: NullableStringFieldUpdateOperationsInput | string | null
    telegramLinkedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    telegramLinkTokens?: TelegramLinkTokenUncheckedUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
    Ticket?: TicketUncheckedUpdateManyWithoutUserNestedInput
    Commission?: CommissionUncheckedUpdateManyWithoutUserNestedInput
    Affiliate?: AffiliateUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    clerkUserId: string
    email: string
    password?: string | null
    username?: string | null
    avatar?: string | null
    role?: $Enums.Role
    isSubscribed?: boolean
    paddleCustomerId?: string | null
    paddleEmail?: string | null
    paystackCustomerCode?: string | null
    paystackAuthCode?: string | null
    referredByAffiliateId?: string | null
    firstPaidAt?: Date | string | null
    telegramChatId?: string | null
    telegramUsername?: string | null
    telegramLinkedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isSubscribed?: BoolFieldUpdateOperationsInput | boolean
    paddleCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    paddleEmail?: NullableStringFieldUpdateOperationsInput | string | null
    paystackCustomerCode?: NullableStringFieldUpdateOperationsInput | string | null
    paystackAuthCode?: NullableStringFieldUpdateOperationsInput | string | null
    referredByAffiliateId?: NullableStringFieldUpdateOperationsInput | string | null
    firstPaidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    telegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramUsername?: NullableStringFieldUpdateOperationsInput | string | null
    telegramLinkedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isSubscribed?: BoolFieldUpdateOperationsInput | boolean
    paddleCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    paddleEmail?: NullableStringFieldUpdateOperationsInput | string | null
    paystackCustomerCode?: NullableStringFieldUpdateOperationsInput | string | null
    paystackAuthCode?: NullableStringFieldUpdateOperationsInput | string | null
    referredByAffiliateId?: NullableStringFieldUpdateOperationsInput | string | null
    firstPaidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    telegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramUsername?: NullableStringFieldUpdateOperationsInput | string | null
    telegramLinkedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionCreateInput = {
    id?: string
    productName?: string | null
    paystackSubscriptionCode?: string | null
    paystackCustomerCode?: string | null
    paystackPlanCode?: string | null
    paystackEmailToken?: string | null
    status: $Enums.SubscriptionStatus
    currency: string
    unitAmountMinor: number
    interval: string
    intervalCount: number
    currentPeriodStart?: Date | string | null
    currentPeriodEnd?: Date | string | null
    cancelAtPeriodEnd?: boolean
    canceledAt?: Date | string | null
    affiliateId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSubscriptionsInput
    Commission?: CommissionCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionUncheckedCreateInput = {
    id?: string
    userId: string
    productName?: string | null
    paystackSubscriptionCode?: string | null
    paystackCustomerCode?: string | null
    paystackPlanCode?: string | null
    paystackEmailToken?: string | null
    status: $Enums.SubscriptionStatus
    currency: string
    unitAmountMinor: number
    interval: string
    intervalCount: number
    currentPeriodStart?: Date | string | null
    currentPeriodEnd?: Date | string | null
    cancelAtPeriodEnd?: boolean
    canceledAt?: Date | string | null
    affiliateId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Commission?: CommissionUncheckedCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionUpdateInput = {
    productName?: NullableStringFieldUpdateOperationsInput | string | null
    paystackSubscriptionCode?: NullableStringFieldUpdateOperationsInput | string | null
    paystackCustomerCode?: NullableStringFieldUpdateOperationsInput | string | null
    paystackPlanCode?: NullableStringFieldUpdateOperationsInput | string | null
    paystackEmailToken?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    currency?: StringFieldUpdateOperationsInput | string
    unitAmountMinor?: IntFieldUpdateOperationsInput | number
    interval?: StringFieldUpdateOperationsInput | string
    intervalCount?: IntFieldUpdateOperationsInput | number
    currentPeriodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentPeriodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelAtPeriodEnd?: BoolFieldUpdateOperationsInput | boolean
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    affiliateId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSubscriptionsNestedInput
    Commission?: CommissionUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    productName?: NullableStringFieldUpdateOperationsInput | string | null
    paystackSubscriptionCode?: NullableStringFieldUpdateOperationsInput | string | null
    paystackCustomerCode?: NullableStringFieldUpdateOperationsInput | string | null
    paystackPlanCode?: NullableStringFieldUpdateOperationsInput | string | null
    paystackEmailToken?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    currency?: StringFieldUpdateOperationsInput | string
    unitAmountMinor?: IntFieldUpdateOperationsInput | number
    interval?: StringFieldUpdateOperationsInput | string
    intervalCount?: IntFieldUpdateOperationsInput | number
    currentPeriodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentPeriodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelAtPeriodEnd?: BoolFieldUpdateOperationsInput | boolean
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    affiliateId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Commission?: CommissionUncheckedUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionCreateManyInput = {
    id?: string
    userId: string
    productName?: string | null
    paystackSubscriptionCode?: string | null
    paystackCustomerCode?: string | null
    paystackPlanCode?: string | null
    paystackEmailToken?: string | null
    status: $Enums.SubscriptionStatus
    currency: string
    unitAmountMinor: number
    interval: string
    intervalCount: number
    currentPeriodStart?: Date | string | null
    currentPeriodEnd?: Date | string | null
    cancelAtPeriodEnd?: boolean
    canceledAt?: Date | string | null
    affiliateId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionUpdateManyMutationInput = {
    productName?: NullableStringFieldUpdateOperationsInput | string | null
    paystackSubscriptionCode?: NullableStringFieldUpdateOperationsInput | string | null
    paystackCustomerCode?: NullableStringFieldUpdateOperationsInput | string | null
    paystackPlanCode?: NullableStringFieldUpdateOperationsInput | string | null
    paystackEmailToken?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    currency?: StringFieldUpdateOperationsInput | string
    unitAmountMinor?: IntFieldUpdateOperationsInput | number
    interval?: StringFieldUpdateOperationsInput | string
    intervalCount?: IntFieldUpdateOperationsInput | number
    currentPeriodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentPeriodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelAtPeriodEnd?: BoolFieldUpdateOperationsInput | boolean
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    affiliateId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubscriptionUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    productName?: NullableStringFieldUpdateOperationsInput | string | null
    paystackSubscriptionCode?: NullableStringFieldUpdateOperationsInput | string | null
    paystackCustomerCode?: NullableStringFieldUpdateOperationsInput | string | null
    paystackPlanCode?: NullableStringFieldUpdateOperationsInput | string | null
    paystackEmailToken?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    currency?: StringFieldUpdateOperationsInput | string
    unitAmountMinor?: IntFieldUpdateOperationsInput | number
    interval?: StringFieldUpdateOperationsInput | string
    intervalCount?: IntFieldUpdateOperationsInput | number
    currentPeriodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentPeriodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelAtPeriodEnd?: BoolFieldUpdateOperationsInput | boolean
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    affiliateId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateInput = {
    id?: string
    amount: number
    method: string
    status: string
    reference: string
    provider?: string
    createdAt?: Date | string
    currency?: string | null
    fxRateToGBP?: number | null
    amountMinor?: number | null
    chargedCurrency?: string | null
    affiliateId?: string | null
    commissionId?: string | null
    user: UserCreateNestedOneWithoutPaymentsInput
    Commission?: CommissionCreateNestedManyWithoutPaymentInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: string
    userId: string
    amount: number
    method: string
    status: string
    reference: string
    provider?: string
    createdAt?: Date | string
    currency?: string | null
    fxRateToGBP?: number | null
    amountMinor?: number | null
    chargedCurrency?: string | null
    affiliateId?: string | null
    commissionId?: string | null
    Commission?: CommissionUncheckedCreateNestedManyWithoutPaymentInput
  }

  export type PaymentUpdateInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    fxRateToGBP?: NullableFloatFieldUpdateOperationsInput | number | null
    amountMinor?: NullableIntFieldUpdateOperationsInput | number | null
    chargedCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    affiliateId?: NullableStringFieldUpdateOperationsInput | string | null
    commissionId?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutPaymentsNestedInput
    Commission?: CommissionUpdateManyWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    fxRateToGBP?: NullableFloatFieldUpdateOperationsInput | number | null
    amountMinor?: NullableIntFieldUpdateOperationsInput | number | null
    chargedCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    affiliateId?: NullableStringFieldUpdateOperationsInput | string | null
    commissionId?: NullableStringFieldUpdateOperationsInput | string | null
    Commission?: CommissionUncheckedUpdateManyWithoutPaymentNestedInput
  }

  export type PaymentCreateManyInput = {
    id?: string
    userId: string
    amount: number
    method: string
    status: string
    reference: string
    provider?: string
    createdAt?: Date | string
    currency?: string | null
    fxRateToGBP?: number | null
    amountMinor?: number | null
    chargedCurrency?: string | null
    affiliateId?: string | null
    commissionId?: string | null
  }

  export type PaymentUpdateManyMutationInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    fxRateToGBP?: NullableFloatFieldUpdateOperationsInput | number | null
    amountMinor?: NullableIntFieldUpdateOperationsInput | number | null
    chargedCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    affiliateId?: NullableStringFieldUpdateOperationsInput | string | null
    commissionId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PaymentUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    fxRateToGBP?: NullableFloatFieldUpdateOperationsInput | number | null
    amountMinor?: NullableIntFieldUpdateOperationsInput | number | null
    chargedCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    affiliateId?: NullableStringFieldUpdateOperationsInput | string | null
    commissionId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TelegramLinkTokenCreateInput = {
    id?: string
    token: string
    createdAt?: Date | string
    expiresAt: Date | string
    usedAt?: Date | string | null
    user: UserCreateNestedOneWithoutTelegramLinkTokensInput
  }

  export type TelegramLinkTokenUncheckedCreateInput = {
    id?: string
    token: string
    userId: string
    createdAt?: Date | string
    expiresAt: Date | string
    usedAt?: Date | string | null
  }

  export type TelegramLinkTokenUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutTelegramLinkTokensNestedInput
  }

  export type TelegramLinkTokenUncheckedUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TelegramLinkTokenCreateManyInput = {
    id?: string
    token: string
    userId: string
    createdAt?: Date | string
    expiresAt: Date | string
    usedAt?: Date | string | null
  }

  export type TelegramLinkTokenUpdateManyMutationInput = {
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TelegramLinkTokenUncheckedUpdateManyInput = {
    token?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TicketCreateInput = {
    id?: string
    subject: string
    category?: $Enums.TicketCategory
    priority?: $Enums.TicketPriority
    status?: $Enums.TicketStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutTicketInput
    messages?: TicketMessageCreateNestedManyWithoutTicketInput
  }

  export type TicketUncheckedCreateInput = {
    id?: string
    userId: string
    subject: string
    category?: $Enums.TicketCategory
    priority?: $Enums.TicketPriority
    status?: $Enums.TicketStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: TicketMessageUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketUpdateInput = {
    subject?: StringFieldUpdateOperationsInput | string
    category?: EnumTicketCategoryFieldUpdateOperationsInput | $Enums.TicketCategory
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutTicketNestedInput
    messages?: TicketMessageUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    category?: EnumTicketCategoryFieldUpdateOperationsInput | $Enums.TicketCategory
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: TicketMessageUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type TicketCreateManyInput = {
    id?: string
    userId: string
    subject: string
    category?: $Enums.TicketCategory
    priority?: $Enums.TicketPriority
    status?: $Enums.TicketStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TicketUpdateManyMutationInput = {
    subject?: StringFieldUpdateOperationsInput | string
    category?: EnumTicketCategoryFieldUpdateOperationsInput | $Enums.TicketCategory
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    category?: EnumTicketCategoryFieldUpdateOperationsInput | $Enums.TicketCategory
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketMessageCreateInput = {
    id?: string
    authorId: string
    body: string
    isStaff?: boolean
    createdAt?: Date | string
    ticket: TicketCreateNestedOneWithoutMessagesInput
  }

  export type TicketMessageUncheckedCreateInput = {
    id?: string
    ticketId: string
    authorId: string
    body: string
    isStaff?: boolean
    createdAt?: Date | string
  }

  export type TicketMessageUpdateInput = {
    authorId?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    isStaff?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket?: TicketUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type TicketMessageUncheckedUpdateInput = {
    ticketId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    isStaff?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketMessageCreateManyInput = {
    id?: string
    ticketId: string
    authorId: string
    body: string
    isStaff?: boolean
    createdAt?: Date | string
  }

  export type TicketMessageUpdateManyMutationInput = {
    authorId?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    isStaff?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketMessageUncheckedUpdateManyInput = {
    ticketId?: StringFieldUpdateOperationsInput | string
    authorId?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    isStaff?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PredictionCreateInput = {
    id?: string
    fixtureId: number
    leagueId: number
    leagueSlug: string
    date: Date | string
    homeTeam: string
    awayTeam: string
    predictedHome: number
    predictedAway: number
    pick: string
    impliedOdds?: number | null
    status?: string | null
    actualHome?: number | null
    actualAway?: number | null
    outcome?: string | null
    exactHit?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PredictionUncheckedCreateInput = {
    id?: string
    fixtureId: number
    leagueId: number
    leagueSlug: string
    date: Date | string
    homeTeam: string
    awayTeam: string
    predictedHome: number
    predictedAway: number
    pick: string
    impliedOdds?: number | null
    status?: string | null
    actualHome?: number | null
    actualAway?: number | null
    outcome?: string | null
    exactHit?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PredictionUpdateInput = {
    fixtureId?: IntFieldUpdateOperationsInput | number
    leagueId?: IntFieldUpdateOperationsInput | number
    leagueSlug?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    homeTeam?: StringFieldUpdateOperationsInput | string
    awayTeam?: StringFieldUpdateOperationsInput | string
    predictedHome?: IntFieldUpdateOperationsInput | number
    predictedAway?: IntFieldUpdateOperationsInput | number
    pick?: StringFieldUpdateOperationsInput | string
    impliedOdds?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    actualHome?: NullableIntFieldUpdateOperationsInput | number | null
    actualAway?: NullableIntFieldUpdateOperationsInput | number | null
    outcome?: NullableStringFieldUpdateOperationsInput | string | null
    exactHit?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PredictionUncheckedUpdateInput = {
    fixtureId?: IntFieldUpdateOperationsInput | number
    leagueId?: IntFieldUpdateOperationsInput | number
    leagueSlug?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    homeTeam?: StringFieldUpdateOperationsInput | string
    awayTeam?: StringFieldUpdateOperationsInput | string
    predictedHome?: IntFieldUpdateOperationsInput | number
    predictedAway?: IntFieldUpdateOperationsInput | number
    pick?: StringFieldUpdateOperationsInput | string
    impliedOdds?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    actualHome?: NullableIntFieldUpdateOperationsInput | number | null
    actualAway?: NullableIntFieldUpdateOperationsInput | number | null
    outcome?: NullableStringFieldUpdateOperationsInput | string | null
    exactHit?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PredictionCreateManyInput = {
    id?: string
    fixtureId: number
    leagueId: number
    leagueSlug: string
    date: Date | string
    homeTeam: string
    awayTeam: string
    predictedHome: number
    predictedAway: number
    pick: string
    impliedOdds?: number | null
    status?: string | null
    actualHome?: number | null
    actualAway?: number | null
    outcome?: string | null
    exactHit?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PredictionUpdateManyMutationInput = {
    fixtureId?: IntFieldUpdateOperationsInput | number
    leagueId?: IntFieldUpdateOperationsInput | number
    leagueSlug?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    homeTeam?: StringFieldUpdateOperationsInput | string
    awayTeam?: StringFieldUpdateOperationsInput | string
    predictedHome?: IntFieldUpdateOperationsInput | number
    predictedAway?: IntFieldUpdateOperationsInput | number
    pick?: StringFieldUpdateOperationsInput | string
    impliedOdds?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    actualHome?: NullableIntFieldUpdateOperationsInput | number | null
    actualAway?: NullableIntFieldUpdateOperationsInput | number | null
    outcome?: NullableStringFieldUpdateOperationsInput | string | null
    exactHit?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PredictionUncheckedUpdateManyInput = {
    fixtureId?: IntFieldUpdateOperationsInput | number
    leagueId?: IntFieldUpdateOperationsInput | number
    leagueSlug?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    homeTeam?: StringFieldUpdateOperationsInput | string
    awayTeam?: StringFieldUpdateOperationsInput | string
    predictedHome?: IntFieldUpdateOperationsInput | number
    predictedAway?: IntFieldUpdateOperationsInput | number
    pick?: StringFieldUpdateOperationsInput | string
    impliedOdds?: NullableFloatFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    actualHome?: NullableIntFieldUpdateOperationsInput | number | null
    actualAway?: NullableIntFieldUpdateOperationsInput | number | null
    outcome?: NullableStringFieldUpdateOperationsInput | string | null
    exactHit?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AffiliateCreateInput = {
    id?: string
    name: string
    email?: string | null
    code: string
    ratePct?: number | null
    flatMinor?: number | null
    currency?: string | null
    isActive?: boolean
    clicks?: number
    conversions?: number
    lifetimeMinor?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutAffiliateInput
    referralClicks?: ReferralClickCreateNestedManyWithoutAffiliateInput
    commissions?: CommissionCreateNestedManyWithoutAffiliateInput
    payouts?: PayoutCreateNestedManyWithoutAffiliateInput
  }

  export type AffiliateUncheckedCreateInput = {
    id?: string
    userId?: string | null
    name: string
    email?: string | null
    code: string
    ratePct?: number | null
    flatMinor?: number | null
    currency?: string | null
    isActive?: boolean
    clicks?: number
    conversions?: number
    lifetimeMinor?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    referralClicks?: ReferralClickUncheckedCreateNestedManyWithoutAffiliateInput
    commissions?: CommissionUncheckedCreateNestedManyWithoutAffiliateInput
    payouts?: PayoutUncheckedCreateNestedManyWithoutAffiliateInput
  }

  export type AffiliateUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    code?: StringFieldUpdateOperationsInput | string
    ratePct?: NullableFloatFieldUpdateOperationsInput | number | null
    flatMinor?: NullableIntFieldUpdateOperationsInput | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    clicks?: IntFieldUpdateOperationsInput | number
    conversions?: IntFieldUpdateOperationsInput | number
    lifetimeMinor?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutAffiliateNestedInput
    referralClicks?: ReferralClickUpdateManyWithoutAffiliateNestedInput
    commissions?: CommissionUpdateManyWithoutAffiliateNestedInput
    payouts?: PayoutUpdateManyWithoutAffiliateNestedInput
  }

  export type AffiliateUncheckedUpdateInput = {
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    code?: StringFieldUpdateOperationsInput | string
    ratePct?: NullableFloatFieldUpdateOperationsInput | number | null
    flatMinor?: NullableIntFieldUpdateOperationsInput | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    clicks?: IntFieldUpdateOperationsInput | number
    conversions?: IntFieldUpdateOperationsInput | number
    lifetimeMinor?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referralClicks?: ReferralClickUncheckedUpdateManyWithoutAffiliateNestedInput
    commissions?: CommissionUncheckedUpdateManyWithoutAffiliateNestedInput
    payouts?: PayoutUncheckedUpdateManyWithoutAffiliateNestedInput
  }

  export type AffiliateCreateManyInput = {
    id?: string
    userId?: string | null
    name: string
    email?: string | null
    code: string
    ratePct?: number | null
    flatMinor?: number | null
    currency?: string | null
    isActive?: boolean
    clicks?: number
    conversions?: number
    lifetimeMinor?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AffiliateUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    code?: StringFieldUpdateOperationsInput | string
    ratePct?: NullableFloatFieldUpdateOperationsInput | number | null
    flatMinor?: NullableIntFieldUpdateOperationsInput | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    clicks?: IntFieldUpdateOperationsInput | number
    conversions?: IntFieldUpdateOperationsInput | number
    lifetimeMinor?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AffiliateUncheckedUpdateManyInput = {
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    code?: StringFieldUpdateOperationsInput | string
    ratePct?: NullableFloatFieldUpdateOperationsInput | number | null
    flatMinor?: NullableIntFieldUpdateOperationsInput | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    clicks?: IntFieldUpdateOperationsInput | number
    conversions?: IntFieldUpdateOperationsInput | number
    lifetimeMinor?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferralClickCreateInput = {
    id?: string
    ip?: string | null
    ua?: string | null
    referrer?: string | null
    createdAt?: Date | string
    affiliate: AffiliateCreateNestedOneWithoutReferralClicksInput
  }

  export type ReferralClickUncheckedCreateInput = {
    id?: string
    affiliateId: string
    ip?: string | null
    ua?: string | null
    referrer?: string | null
    createdAt?: Date | string
  }

  export type ReferralClickUpdateInput = {
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    ua?: NullableStringFieldUpdateOperationsInput | string | null
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    affiliate?: AffiliateUpdateOneRequiredWithoutReferralClicksNestedInput
  }

  export type ReferralClickUncheckedUpdateInput = {
    affiliateId?: StringFieldUpdateOperationsInput | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    ua?: NullableStringFieldUpdateOperationsInput | string | null
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferralClickCreateManyInput = {
    id?: string
    affiliateId: string
    ip?: string | null
    ua?: string | null
    referrer?: string | null
    createdAt?: Date | string
  }

  export type ReferralClickUpdateManyMutationInput = {
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    ua?: NullableStringFieldUpdateOperationsInput | string | null
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferralClickUncheckedUpdateManyInput = {
    affiliateId?: StringFieldUpdateOperationsInput | string
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    ua?: NullableStringFieldUpdateOperationsInput | string | null
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommissionCreateInput = {
    id?: string
    currency: string
    amountMinor: number
    status?: $Enums.CommissionStatus
    reason?: string | null
    holdUntil?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    affiliate: AffiliateCreateNestedOneWithoutCommissionsInput
    user: UserCreateNestedOneWithoutCommissionInput
    payment?: PaymentCreateNestedOneWithoutCommissionInput
    subscription?: SubscriptionCreateNestedOneWithoutCommissionInput
  }

  export type CommissionUncheckedCreateInput = {
    id?: string
    affiliateId: string
    userId: string
    paymentId?: string | null
    subscriptionId?: string | null
    currency: string
    amountMinor: number
    status?: $Enums.CommissionStatus
    reason?: string | null
    holdUntil?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommissionUpdateInput = {
    currency?: StringFieldUpdateOperationsInput | string
    amountMinor?: IntFieldUpdateOperationsInput | number
    status?: EnumCommissionStatusFieldUpdateOperationsInput | $Enums.CommissionStatus
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    holdUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    affiliate?: AffiliateUpdateOneRequiredWithoutCommissionsNestedInput
    user?: UserUpdateOneRequiredWithoutCommissionNestedInput
    payment?: PaymentUpdateOneWithoutCommissionNestedInput
    subscription?: SubscriptionUpdateOneWithoutCommissionNestedInput
  }

  export type CommissionUncheckedUpdateInput = {
    affiliateId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    amountMinor?: IntFieldUpdateOperationsInput | number
    status?: EnumCommissionStatusFieldUpdateOperationsInput | $Enums.CommissionStatus
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    holdUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommissionCreateManyInput = {
    id?: string
    affiliateId: string
    userId: string
    paymentId?: string | null
    subscriptionId?: string | null
    currency: string
    amountMinor: number
    status?: $Enums.CommissionStatus
    reason?: string | null
    holdUntil?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommissionUpdateManyMutationInput = {
    currency?: StringFieldUpdateOperationsInput | string
    amountMinor?: IntFieldUpdateOperationsInput | number
    status?: EnumCommissionStatusFieldUpdateOperationsInput | $Enums.CommissionStatus
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    holdUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommissionUncheckedUpdateManyInput = {
    affiliateId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    amountMinor?: IntFieldUpdateOperationsInput | number
    status?: EnumCommissionStatusFieldUpdateOperationsInput | $Enums.CommissionStatus
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    holdUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayoutCreateInput = {
    id?: string
    status?: $Enums.PayoutStatus
    currency: string
    amountMinor: number
    note?: string | null
    commissionIds?: PayoutCreatecommissionIdsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    affiliate: AffiliateCreateNestedOneWithoutPayoutsInput
  }

  export type PayoutUncheckedCreateInput = {
    id?: string
    affiliateId: string
    status?: $Enums.PayoutStatus
    currency: string
    amountMinor: number
    note?: string | null
    commissionIds?: PayoutCreatecommissionIdsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PayoutUpdateInput = {
    status?: EnumPayoutStatusFieldUpdateOperationsInput | $Enums.PayoutStatus
    currency?: StringFieldUpdateOperationsInput | string
    amountMinor?: IntFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    commissionIds?: PayoutUpdatecommissionIdsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    affiliate?: AffiliateUpdateOneRequiredWithoutPayoutsNestedInput
  }

  export type PayoutUncheckedUpdateInput = {
    affiliateId?: StringFieldUpdateOperationsInput | string
    status?: EnumPayoutStatusFieldUpdateOperationsInput | $Enums.PayoutStatus
    currency?: StringFieldUpdateOperationsInput | string
    amountMinor?: IntFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    commissionIds?: PayoutUpdatecommissionIdsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayoutCreateManyInput = {
    id?: string
    affiliateId: string
    status?: $Enums.PayoutStatus
    currency: string
    amountMinor: number
    note?: string | null
    commissionIds?: PayoutCreatecommissionIdsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PayoutUpdateManyMutationInput = {
    status?: EnumPayoutStatusFieldUpdateOperationsInput | $Enums.PayoutStatus
    currency?: StringFieldUpdateOperationsInput | string
    amountMinor?: IntFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    commissionIds?: PayoutUpdatecommissionIdsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayoutUncheckedUpdateManyInput = {
    affiliateId?: StringFieldUpdateOperationsInput | string
    status?: EnumPayoutStatusFieldUpdateOperationsInput | $Enums.PayoutStatus
    currency?: StringFieldUpdateOperationsInput | string
    amountMinor?: IntFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    commissionIds?: PayoutUpdatecommissionIdsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
    isSet?: boolean
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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
    isSet?: boolean
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

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type TelegramLinkTokenListRelationFilter = {
    every?: TelegramLinkTokenWhereInput
    some?: TelegramLinkTokenWhereInput
    none?: TelegramLinkTokenWhereInput
  }

  export type SubscriptionListRelationFilter = {
    every?: SubscriptionWhereInput
    some?: SubscriptionWhereInput
    none?: SubscriptionWhereInput
  }

  export type TicketListRelationFilter = {
    every?: TicketWhereInput
    some?: TicketWhereInput
    none?: TicketWhereInput
  }

  export type CommissionListRelationFilter = {
    every?: CommissionWhereInput
    some?: CommissionWhereInput
    none?: CommissionWhereInput
  }

  export type AffiliateListRelationFilter = {
    every?: AffiliateWhereInput
    some?: AffiliateWhereInput
    none?: AffiliateWhereInput
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TelegramLinkTokenOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubscriptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TicketOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CommissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AffiliateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    clerkUserId?: SortOrder
    email?: SortOrder
    password?: SortOrder
    username?: SortOrder
    avatar?: SortOrder
    role?: SortOrder
    isSubscribed?: SortOrder
    paddleCustomerId?: SortOrder
    paddleEmail?: SortOrder
    paystackCustomerCode?: SortOrder
    paystackAuthCode?: SortOrder
    referredByAffiliateId?: SortOrder
    firstPaidAt?: SortOrder
    telegramChatId?: SortOrder
    telegramUsername?: SortOrder
    telegramLinkedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    clerkUserId?: SortOrder
    email?: SortOrder
    password?: SortOrder
    username?: SortOrder
    avatar?: SortOrder
    role?: SortOrder
    isSubscribed?: SortOrder
    paddleCustomerId?: SortOrder
    paddleEmail?: SortOrder
    paystackCustomerCode?: SortOrder
    paystackAuthCode?: SortOrder
    referredByAffiliateId?: SortOrder
    firstPaidAt?: SortOrder
    telegramChatId?: SortOrder
    telegramUsername?: SortOrder
    telegramLinkedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    clerkUserId?: SortOrder
    email?: SortOrder
    password?: SortOrder
    username?: SortOrder
    avatar?: SortOrder
    role?: SortOrder
    isSubscribed?: SortOrder
    paddleCustomerId?: SortOrder
    paddleEmail?: SortOrder
    paystackCustomerCode?: SortOrder
    paystackAuthCode?: SortOrder
    referredByAffiliateId?: SortOrder
    firstPaidAt?: SortOrder
    telegramChatId?: SortOrder
    telegramUsername?: SortOrder
    telegramLinkedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    isSet?: boolean
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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
    isSet?: boolean
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

  export type EnumSubscriptionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusFilter<$PrismaModel> | $Enums.SubscriptionStatus
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SubscriptionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productName?: SortOrder
    paystackSubscriptionCode?: SortOrder
    paystackCustomerCode?: SortOrder
    paystackPlanCode?: SortOrder
    paystackEmailToken?: SortOrder
    status?: SortOrder
    currency?: SortOrder
    unitAmountMinor?: SortOrder
    interval?: SortOrder
    intervalCount?: SortOrder
    currentPeriodStart?: SortOrder
    currentPeriodEnd?: SortOrder
    cancelAtPeriodEnd?: SortOrder
    canceledAt?: SortOrder
    affiliateId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionAvgOrderByAggregateInput = {
    unitAmountMinor?: SortOrder
    intervalCount?: SortOrder
  }

  export type SubscriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productName?: SortOrder
    paystackSubscriptionCode?: SortOrder
    paystackCustomerCode?: SortOrder
    paystackPlanCode?: SortOrder
    paystackEmailToken?: SortOrder
    status?: SortOrder
    currency?: SortOrder
    unitAmountMinor?: SortOrder
    interval?: SortOrder
    intervalCount?: SortOrder
    currentPeriodStart?: SortOrder
    currentPeriodEnd?: SortOrder
    cancelAtPeriodEnd?: SortOrder
    canceledAt?: SortOrder
    affiliateId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    productName?: SortOrder
    paystackSubscriptionCode?: SortOrder
    paystackCustomerCode?: SortOrder
    paystackPlanCode?: SortOrder
    paystackEmailToken?: SortOrder
    status?: SortOrder
    currency?: SortOrder
    unitAmountMinor?: SortOrder
    interval?: SortOrder
    intervalCount?: SortOrder
    currentPeriodStart?: SortOrder
    currentPeriodEnd?: SortOrder
    cancelAtPeriodEnd?: SortOrder
    canceledAt?: SortOrder
    affiliateId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubscriptionSumOrderByAggregateInput = {
    unitAmountMinor?: SortOrder
    intervalCount?: SortOrder
  }

  export type EnumSubscriptionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
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

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
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
    isSet?: boolean
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    status?: SortOrder
    reference?: SortOrder
    provider?: SortOrder
    createdAt?: SortOrder
    currency?: SortOrder
    fxRateToGBP?: SortOrder
    amountMinor?: SortOrder
    chargedCurrency?: SortOrder
    affiliateId?: SortOrder
    commissionId?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    amount?: SortOrder
    fxRateToGBP?: SortOrder
    amountMinor?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    status?: SortOrder
    reference?: SortOrder
    provider?: SortOrder
    createdAt?: SortOrder
    currency?: SortOrder
    fxRateToGBP?: SortOrder
    amountMinor?: SortOrder
    chargedCurrency?: SortOrder
    affiliateId?: SortOrder
    commissionId?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    status?: SortOrder
    reference?: SortOrder
    provider?: SortOrder
    createdAt?: SortOrder
    currency?: SortOrder
    fxRateToGBP?: SortOrder
    amountMinor?: SortOrder
    chargedCurrency?: SortOrder
    affiliateId?: SortOrder
    commissionId?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    amount?: SortOrder
    fxRateToGBP?: SortOrder
    amountMinor?: SortOrder
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

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
    isSet?: boolean
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
    isSet?: boolean
  }

  export type TelegramLinkTokenCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    usedAt?: SortOrder
  }

  export type TelegramLinkTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    usedAt?: SortOrder
  }

  export type TelegramLinkTokenMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    expiresAt?: SortOrder
    usedAt?: SortOrder
  }

  export type EnumTicketCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketCategory | EnumTicketCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.TicketCategory[] | ListEnumTicketCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketCategory[] | ListEnumTicketCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketCategoryFilter<$PrismaModel> | $Enums.TicketCategory
  }

  export type EnumTicketPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketPriority | EnumTicketPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.TicketPriority[] | ListEnumTicketPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketPriority[] | ListEnumTicketPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketPriorityFilter<$PrismaModel> | $Enums.TicketPriority
  }

  export type EnumTicketStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketStatus | EnumTicketStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketStatusFilter<$PrismaModel> | $Enums.TicketStatus
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type TicketMessageListRelationFilter = {
    every?: TicketMessageWhereInput
    some?: TicketMessageWhereInput
    none?: TicketMessageWhereInput
  }

  export type TicketMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TicketCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    subject?: SortOrder
    category?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TicketMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    subject?: SortOrder
    category?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TicketMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    subject?: SortOrder
    category?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumTicketCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketCategory | EnumTicketCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.TicketCategory[] | ListEnumTicketCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketCategory[] | ListEnumTicketCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketCategoryWithAggregatesFilter<$PrismaModel> | $Enums.TicketCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTicketCategoryFilter<$PrismaModel>
    _max?: NestedEnumTicketCategoryFilter<$PrismaModel>
  }

  export type EnumTicketPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketPriority | EnumTicketPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.TicketPriority[] | ListEnumTicketPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketPriority[] | ListEnumTicketPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketPriorityWithAggregatesFilter<$PrismaModel> | $Enums.TicketPriority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTicketPriorityFilter<$PrismaModel>
    _max?: NestedEnumTicketPriorityFilter<$PrismaModel>
  }

  export type EnumTicketStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketStatus | EnumTicketStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketStatusWithAggregatesFilter<$PrismaModel> | $Enums.TicketStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTicketStatusFilter<$PrismaModel>
    _max?: NestedEnumTicketStatusFilter<$PrismaModel>
  }

  export type TicketScalarRelationFilter = {
    is?: TicketWhereInput
    isNot?: TicketWhereInput
  }

  export type TicketMessageCountOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    authorId?: SortOrder
    body?: SortOrder
    isStaff?: SortOrder
    createdAt?: SortOrder
  }

  export type TicketMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    authorId?: SortOrder
    body?: SortOrder
    isStaff?: SortOrder
    createdAt?: SortOrder
  }

  export type TicketMessageMinOrderByAggregateInput = {
    id?: SortOrder
    ticketId?: SortOrder
    authorId?: SortOrder
    body?: SortOrder
    isStaff?: SortOrder
    createdAt?: SortOrder
  }

  export type PredictionCountOrderByAggregateInput = {
    id?: SortOrder
    fixtureId?: SortOrder
    leagueId?: SortOrder
    leagueSlug?: SortOrder
    date?: SortOrder
    homeTeam?: SortOrder
    awayTeam?: SortOrder
    predictedHome?: SortOrder
    predictedAway?: SortOrder
    pick?: SortOrder
    impliedOdds?: SortOrder
    status?: SortOrder
    actualHome?: SortOrder
    actualAway?: SortOrder
    outcome?: SortOrder
    exactHit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PredictionAvgOrderByAggregateInput = {
    fixtureId?: SortOrder
    leagueId?: SortOrder
    predictedHome?: SortOrder
    predictedAway?: SortOrder
    impliedOdds?: SortOrder
    actualHome?: SortOrder
    actualAway?: SortOrder
  }

  export type PredictionMaxOrderByAggregateInput = {
    id?: SortOrder
    fixtureId?: SortOrder
    leagueId?: SortOrder
    leagueSlug?: SortOrder
    date?: SortOrder
    homeTeam?: SortOrder
    awayTeam?: SortOrder
    predictedHome?: SortOrder
    predictedAway?: SortOrder
    pick?: SortOrder
    impliedOdds?: SortOrder
    status?: SortOrder
    actualHome?: SortOrder
    actualAway?: SortOrder
    outcome?: SortOrder
    exactHit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PredictionMinOrderByAggregateInput = {
    id?: SortOrder
    fixtureId?: SortOrder
    leagueId?: SortOrder
    leagueSlug?: SortOrder
    date?: SortOrder
    homeTeam?: SortOrder
    awayTeam?: SortOrder
    predictedHome?: SortOrder
    predictedAway?: SortOrder
    pick?: SortOrder
    impliedOdds?: SortOrder
    status?: SortOrder
    actualHome?: SortOrder
    actualAway?: SortOrder
    outcome?: SortOrder
    exactHit?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PredictionSumOrderByAggregateInput = {
    fixtureId?: SortOrder
    leagueId?: SortOrder
    predictedHome?: SortOrder
    predictedAway?: SortOrder
    impliedOdds?: SortOrder
    actualHome?: SortOrder
    actualAway?: SortOrder
  }

  export type ReferralClickListRelationFilter = {
    every?: ReferralClickWhereInput
    some?: ReferralClickWhereInput
    none?: ReferralClickWhereInput
  }

  export type PayoutListRelationFilter = {
    every?: PayoutWhereInput
    some?: PayoutWhereInput
    none?: PayoutWhereInput
  }

  export type ReferralClickOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PayoutOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AffiliateCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    code?: SortOrder
    ratePct?: SortOrder
    flatMinor?: SortOrder
    currency?: SortOrder
    isActive?: SortOrder
    clicks?: SortOrder
    conversions?: SortOrder
    lifetimeMinor?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AffiliateAvgOrderByAggregateInput = {
    ratePct?: SortOrder
    flatMinor?: SortOrder
    clicks?: SortOrder
    conversions?: SortOrder
    lifetimeMinor?: SortOrder
  }

  export type AffiliateMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    code?: SortOrder
    ratePct?: SortOrder
    flatMinor?: SortOrder
    currency?: SortOrder
    isActive?: SortOrder
    clicks?: SortOrder
    conversions?: SortOrder
    lifetimeMinor?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AffiliateMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    code?: SortOrder
    ratePct?: SortOrder
    flatMinor?: SortOrder
    currency?: SortOrder
    isActive?: SortOrder
    clicks?: SortOrder
    conversions?: SortOrder
    lifetimeMinor?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AffiliateSumOrderByAggregateInput = {
    ratePct?: SortOrder
    flatMinor?: SortOrder
    clicks?: SortOrder
    conversions?: SortOrder
    lifetimeMinor?: SortOrder
  }

  export type AffiliateScalarRelationFilter = {
    is?: AffiliateWhereInput
    isNot?: AffiliateWhereInput
  }

  export type ReferralClickCountOrderByAggregateInput = {
    id?: SortOrder
    affiliateId?: SortOrder
    ip?: SortOrder
    ua?: SortOrder
    referrer?: SortOrder
    createdAt?: SortOrder
  }

  export type ReferralClickMaxOrderByAggregateInput = {
    id?: SortOrder
    affiliateId?: SortOrder
    ip?: SortOrder
    ua?: SortOrder
    referrer?: SortOrder
    createdAt?: SortOrder
  }

  export type ReferralClickMinOrderByAggregateInput = {
    id?: SortOrder
    affiliateId?: SortOrder
    ip?: SortOrder
    ua?: SortOrder
    referrer?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumCommissionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CommissionStatus | EnumCommissionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CommissionStatus[] | ListEnumCommissionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CommissionStatus[] | ListEnumCommissionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCommissionStatusFilter<$PrismaModel> | $Enums.CommissionStatus
  }

  export type PaymentNullableScalarRelationFilter = {
    is?: PaymentWhereInput | null
    isNot?: PaymentWhereInput | null
  }

  export type SubscriptionNullableScalarRelationFilter = {
    is?: SubscriptionWhereInput | null
    isNot?: SubscriptionWhereInput | null
  }

  export type CommissionAffiliateIdPaymentIdUserIdCompoundUniqueInput = {
    affiliateId: string
    paymentId: string
    userId: string
  }

  export type CommissionCountOrderByAggregateInput = {
    id?: SortOrder
    affiliateId?: SortOrder
    userId?: SortOrder
    paymentId?: SortOrder
    subscriptionId?: SortOrder
    currency?: SortOrder
    amountMinor?: SortOrder
    status?: SortOrder
    reason?: SortOrder
    holdUntil?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommissionAvgOrderByAggregateInput = {
    amountMinor?: SortOrder
  }

  export type CommissionMaxOrderByAggregateInput = {
    id?: SortOrder
    affiliateId?: SortOrder
    userId?: SortOrder
    paymentId?: SortOrder
    subscriptionId?: SortOrder
    currency?: SortOrder
    amountMinor?: SortOrder
    status?: SortOrder
    reason?: SortOrder
    holdUntil?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommissionMinOrderByAggregateInput = {
    id?: SortOrder
    affiliateId?: SortOrder
    userId?: SortOrder
    paymentId?: SortOrder
    subscriptionId?: SortOrder
    currency?: SortOrder
    amountMinor?: SortOrder
    status?: SortOrder
    reason?: SortOrder
    holdUntil?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CommissionSumOrderByAggregateInput = {
    amountMinor?: SortOrder
  }

  export type EnumCommissionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CommissionStatus | EnumCommissionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CommissionStatus[] | ListEnumCommissionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CommissionStatus[] | ListEnumCommissionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCommissionStatusWithAggregatesFilter<$PrismaModel> | $Enums.CommissionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCommissionStatusFilter<$PrismaModel>
    _max?: NestedEnumCommissionStatusFilter<$PrismaModel>
  }

  export type EnumPayoutStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PayoutStatus | EnumPayoutStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PayoutStatus[] | ListEnumPayoutStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PayoutStatus[] | ListEnumPayoutStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPayoutStatusFilter<$PrismaModel> | $Enums.PayoutStatus
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type PayoutCountOrderByAggregateInput = {
    id?: SortOrder
    affiliateId?: SortOrder
    status?: SortOrder
    currency?: SortOrder
    amountMinor?: SortOrder
    note?: SortOrder
    commissionIds?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PayoutAvgOrderByAggregateInput = {
    amountMinor?: SortOrder
  }

  export type PayoutMaxOrderByAggregateInput = {
    id?: SortOrder
    affiliateId?: SortOrder
    status?: SortOrder
    currency?: SortOrder
    amountMinor?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PayoutMinOrderByAggregateInput = {
    id?: SortOrder
    affiliateId?: SortOrder
    status?: SortOrder
    currency?: SortOrder
    amountMinor?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PayoutSumOrderByAggregateInput = {
    amountMinor?: SortOrder
  }

  export type EnumPayoutStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PayoutStatus | EnumPayoutStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PayoutStatus[] | ListEnumPayoutStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PayoutStatus[] | ListEnumPayoutStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPayoutStatusWithAggregatesFilter<$PrismaModel> | $Enums.PayoutStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPayoutStatusFilter<$PrismaModel>
    _max?: NestedEnumPayoutStatusFilter<$PrismaModel>
  }

  export type PaymentCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type TelegramLinkTokenCreateNestedManyWithoutUserInput = {
    create?: XOR<TelegramLinkTokenCreateWithoutUserInput, TelegramLinkTokenUncheckedCreateWithoutUserInput> | TelegramLinkTokenCreateWithoutUserInput[] | TelegramLinkTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TelegramLinkTokenCreateOrConnectWithoutUserInput | TelegramLinkTokenCreateOrConnectWithoutUserInput[]
    createMany?: TelegramLinkTokenCreateManyUserInputEnvelope
    connect?: TelegramLinkTokenWhereUniqueInput | TelegramLinkTokenWhereUniqueInput[]
  }

  export type SubscriptionCreateNestedManyWithoutUserInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput> | SubscriptionCreateWithoutUserInput[] | SubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput | SubscriptionCreateOrConnectWithoutUserInput[]
    createMany?: SubscriptionCreateManyUserInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type TicketCreateNestedManyWithoutUserInput = {
    create?: XOR<TicketCreateWithoutUserInput, TicketUncheckedCreateWithoutUserInput> | TicketCreateWithoutUserInput[] | TicketUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutUserInput | TicketCreateOrConnectWithoutUserInput[]
    createMany?: TicketCreateManyUserInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type CommissionCreateNestedManyWithoutUserInput = {
    create?: XOR<CommissionCreateWithoutUserInput, CommissionUncheckedCreateWithoutUserInput> | CommissionCreateWithoutUserInput[] | CommissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommissionCreateOrConnectWithoutUserInput | CommissionCreateOrConnectWithoutUserInput[]
    createMany?: CommissionCreateManyUserInputEnvelope
    connect?: CommissionWhereUniqueInput | CommissionWhereUniqueInput[]
  }

  export type AffiliateCreateNestedManyWithoutUserInput = {
    create?: XOR<AffiliateCreateWithoutUserInput, AffiliateUncheckedCreateWithoutUserInput> | AffiliateCreateWithoutUserInput[] | AffiliateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AffiliateCreateOrConnectWithoutUserInput | AffiliateCreateOrConnectWithoutUserInput[]
    createMany?: AffiliateCreateManyUserInputEnvelope
    connect?: AffiliateWhereUniqueInput | AffiliateWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type TelegramLinkTokenUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TelegramLinkTokenCreateWithoutUserInput, TelegramLinkTokenUncheckedCreateWithoutUserInput> | TelegramLinkTokenCreateWithoutUserInput[] | TelegramLinkTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TelegramLinkTokenCreateOrConnectWithoutUserInput | TelegramLinkTokenCreateOrConnectWithoutUserInput[]
    createMany?: TelegramLinkTokenCreateManyUserInputEnvelope
    connect?: TelegramLinkTokenWhereUniqueInput | TelegramLinkTokenWhereUniqueInput[]
  }

  export type SubscriptionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput> | SubscriptionCreateWithoutUserInput[] | SubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput | SubscriptionCreateOrConnectWithoutUserInput[]
    createMany?: SubscriptionCreateManyUserInputEnvelope
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
  }

  export type TicketUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TicketCreateWithoutUserInput, TicketUncheckedCreateWithoutUserInput> | TicketCreateWithoutUserInput[] | TicketUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutUserInput | TicketCreateOrConnectWithoutUserInput[]
    createMany?: TicketCreateManyUserInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type CommissionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<CommissionCreateWithoutUserInput, CommissionUncheckedCreateWithoutUserInput> | CommissionCreateWithoutUserInput[] | CommissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommissionCreateOrConnectWithoutUserInput | CommissionCreateOrConnectWithoutUserInput[]
    createMany?: CommissionCreateManyUserInputEnvelope
    connect?: CommissionWhereUniqueInput | CommissionWhereUniqueInput[]
  }

  export type AffiliateUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AffiliateCreateWithoutUserInput, AffiliateUncheckedCreateWithoutUserInput> | AffiliateCreateWithoutUserInput[] | AffiliateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AffiliateCreateOrConnectWithoutUserInput | AffiliateCreateOrConnectWithoutUserInput[]
    createMany?: AffiliateCreateManyUserInputEnvelope
    connect?: AffiliateWhereUniqueInput | AffiliateWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
    unset?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PaymentUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutUserInput | PaymentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutUserInput | PaymentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutUserInput | PaymentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type TelegramLinkTokenUpdateManyWithoutUserNestedInput = {
    create?: XOR<TelegramLinkTokenCreateWithoutUserInput, TelegramLinkTokenUncheckedCreateWithoutUserInput> | TelegramLinkTokenCreateWithoutUserInput[] | TelegramLinkTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TelegramLinkTokenCreateOrConnectWithoutUserInput | TelegramLinkTokenCreateOrConnectWithoutUserInput[]
    upsert?: TelegramLinkTokenUpsertWithWhereUniqueWithoutUserInput | TelegramLinkTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TelegramLinkTokenCreateManyUserInputEnvelope
    set?: TelegramLinkTokenWhereUniqueInput | TelegramLinkTokenWhereUniqueInput[]
    disconnect?: TelegramLinkTokenWhereUniqueInput | TelegramLinkTokenWhereUniqueInput[]
    delete?: TelegramLinkTokenWhereUniqueInput | TelegramLinkTokenWhereUniqueInput[]
    connect?: TelegramLinkTokenWhereUniqueInput | TelegramLinkTokenWhereUniqueInput[]
    update?: TelegramLinkTokenUpdateWithWhereUniqueWithoutUserInput | TelegramLinkTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TelegramLinkTokenUpdateManyWithWhereWithoutUserInput | TelegramLinkTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TelegramLinkTokenScalarWhereInput | TelegramLinkTokenScalarWhereInput[]
  }

  export type SubscriptionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput> | SubscriptionCreateWithoutUserInput[] | SubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput | SubscriptionCreateOrConnectWithoutUserInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutUserInput | SubscriptionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SubscriptionCreateManyUserInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutUserInput | SubscriptionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutUserInput | SubscriptionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type TicketUpdateManyWithoutUserNestedInput = {
    create?: XOR<TicketCreateWithoutUserInput, TicketUncheckedCreateWithoutUserInput> | TicketCreateWithoutUserInput[] | TicketUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutUserInput | TicketCreateOrConnectWithoutUserInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutUserInput | TicketUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TicketCreateManyUserInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutUserInput | TicketUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutUserInput | TicketUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type CommissionUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommissionCreateWithoutUserInput, CommissionUncheckedCreateWithoutUserInput> | CommissionCreateWithoutUserInput[] | CommissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommissionCreateOrConnectWithoutUserInput | CommissionCreateOrConnectWithoutUserInput[]
    upsert?: CommissionUpsertWithWhereUniqueWithoutUserInput | CommissionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommissionCreateManyUserInputEnvelope
    set?: CommissionWhereUniqueInput | CommissionWhereUniqueInput[]
    disconnect?: CommissionWhereUniqueInput | CommissionWhereUniqueInput[]
    delete?: CommissionWhereUniqueInput | CommissionWhereUniqueInput[]
    connect?: CommissionWhereUniqueInput | CommissionWhereUniqueInput[]
    update?: CommissionUpdateWithWhereUniqueWithoutUserInput | CommissionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommissionUpdateManyWithWhereWithoutUserInput | CommissionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommissionScalarWhereInput | CommissionScalarWhereInput[]
  }

  export type AffiliateUpdateManyWithoutUserNestedInput = {
    create?: XOR<AffiliateCreateWithoutUserInput, AffiliateUncheckedCreateWithoutUserInput> | AffiliateCreateWithoutUserInput[] | AffiliateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AffiliateCreateOrConnectWithoutUserInput | AffiliateCreateOrConnectWithoutUserInput[]
    upsert?: AffiliateUpsertWithWhereUniqueWithoutUserInput | AffiliateUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AffiliateCreateManyUserInputEnvelope
    set?: AffiliateWhereUniqueInput | AffiliateWhereUniqueInput[]
    disconnect?: AffiliateWhereUniqueInput | AffiliateWhereUniqueInput[]
    delete?: AffiliateWhereUniqueInput | AffiliateWhereUniqueInput[]
    connect?: AffiliateWhereUniqueInput | AffiliateWhereUniqueInput[]
    update?: AffiliateUpdateWithWhereUniqueWithoutUserInput | AffiliateUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AffiliateUpdateManyWithWhereWithoutUserInput | AffiliateUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AffiliateScalarWhereInput | AffiliateScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutUserInput | PaymentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutUserInput | PaymentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutUserInput | PaymentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type TelegramLinkTokenUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TelegramLinkTokenCreateWithoutUserInput, TelegramLinkTokenUncheckedCreateWithoutUserInput> | TelegramLinkTokenCreateWithoutUserInput[] | TelegramLinkTokenUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TelegramLinkTokenCreateOrConnectWithoutUserInput | TelegramLinkTokenCreateOrConnectWithoutUserInput[]
    upsert?: TelegramLinkTokenUpsertWithWhereUniqueWithoutUserInput | TelegramLinkTokenUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TelegramLinkTokenCreateManyUserInputEnvelope
    set?: TelegramLinkTokenWhereUniqueInput | TelegramLinkTokenWhereUniqueInput[]
    disconnect?: TelegramLinkTokenWhereUniqueInput | TelegramLinkTokenWhereUniqueInput[]
    delete?: TelegramLinkTokenWhereUniqueInput | TelegramLinkTokenWhereUniqueInput[]
    connect?: TelegramLinkTokenWhereUniqueInput | TelegramLinkTokenWhereUniqueInput[]
    update?: TelegramLinkTokenUpdateWithWhereUniqueWithoutUserInput | TelegramLinkTokenUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TelegramLinkTokenUpdateManyWithWhereWithoutUserInput | TelegramLinkTokenUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TelegramLinkTokenScalarWhereInput | TelegramLinkTokenScalarWhereInput[]
  }

  export type SubscriptionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput> | SubscriptionCreateWithoutUserInput[] | SubscriptionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SubscriptionCreateOrConnectWithoutUserInput | SubscriptionCreateOrConnectWithoutUserInput[]
    upsert?: SubscriptionUpsertWithWhereUniqueWithoutUserInput | SubscriptionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SubscriptionCreateManyUserInputEnvelope
    set?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    disconnect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    delete?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    connect?: SubscriptionWhereUniqueInput | SubscriptionWhereUniqueInput[]
    update?: SubscriptionUpdateWithWhereUniqueWithoutUserInput | SubscriptionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SubscriptionUpdateManyWithWhereWithoutUserInput | SubscriptionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
  }

  export type TicketUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TicketCreateWithoutUserInput, TicketUncheckedCreateWithoutUserInput> | TicketCreateWithoutUserInput[] | TicketUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutUserInput | TicketCreateOrConnectWithoutUserInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutUserInput | TicketUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TicketCreateManyUserInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutUserInput | TicketUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutUserInput | TicketUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type CommissionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<CommissionCreateWithoutUserInput, CommissionUncheckedCreateWithoutUserInput> | CommissionCreateWithoutUserInput[] | CommissionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: CommissionCreateOrConnectWithoutUserInput | CommissionCreateOrConnectWithoutUserInput[]
    upsert?: CommissionUpsertWithWhereUniqueWithoutUserInput | CommissionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: CommissionCreateManyUserInputEnvelope
    set?: CommissionWhereUniqueInput | CommissionWhereUniqueInput[]
    disconnect?: CommissionWhereUniqueInput | CommissionWhereUniqueInput[]
    delete?: CommissionWhereUniqueInput | CommissionWhereUniqueInput[]
    connect?: CommissionWhereUniqueInput | CommissionWhereUniqueInput[]
    update?: CommissionUpdateWithWhereUniqueWithoutUserInput | CommissionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: CommissionUpdateManyWithWhereWithoutUserInput | CommissionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: CommissionScalarWhereInput | CommissionScalarWhereInput[]
  }

  export type AffiliateUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AffiliateCreateWithoutUserInput, AffiliateUncheckedCreateWithoutUserInput> | AffiliateCreateWithoutUserInput[] | AffiliateUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AffiliateCreateOrConnectWithoutUserInput | AffiliateCreateOrConnectWithoutUserInput[]
    upsert?: AffiliateUpsertWithWhereUniqueWithoutUserInput | AffiliateUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AffiliateCreateManyUserInputEnvelope
    set?: AffiliateWhereUniqueInput | AffiliateWhereUniqueInput[]
    disconnect?: AffiliateWhereUniqueInput | AffiliateWhereUniqueInput[]
    delete?: AffiliateWhereUniqueInput | AffiliateWhereUniqueInput[]
    connect?: AffiliateWhereUniqueInput | AffiliateWhereUniqueInput[]
    update?: AffiliateUpdateWithWhereUniqueWithoutUserInput | AffiliateUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AffiliateUpdateManyWithWhereWithoutUserInput | AffiliateUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AffiliateScalarWhereInput | AffiliateScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutSubscriptionsInput = {
    create?: XOR<UserCreateWithoutSubscriptionsInput, UserUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubscriptionsInput
    connect?: UserWhereUniqueInput
  }

  export type CommissionCreateNestedManyWithoutSubscriptionInput = {
    create?: XOR<CommissionCreateWithoutSubscriptionInput, CommissionUncheckedCreateWithoutSubscriptionInput> | CommissionCreateWithoutSubscriptionInput[] | CommissionUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: CommissionCreateOrConnectWithoutSubscriptionInput | CommissionCreateOrConnectWithoutSubscriptionInput[]
    createMany?: CommissionCreateManySubscriptionInputEnvelope
    connect?: CommissionWhereUniqueInput | CommissionWhereUniqueInput[]
  }

  export type CommissionUncheckedCreateNestedManyWithoutSubscriptionInput = {
    create?: XOR<CommissionCreateWithoutSubscriptionInput, CommissionUncheckedCreateWithoutSubscriptionInput> | CommissionCreateWithoutSubscriptionInput[] | CommissionUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: CommissionCreateOrConnectWithoutSubscriptionInput | CommissionCreateOrConnectWithoutSubscriptionInput[]
    createMany?: CommissionCreateManySubscriptionInputEnvelope
    connect?: CommissionWhereUniqueInput | CommissionWhereUniqueInput[]
  }

  export type EnumSubscriptionStatusFieldUpdateOperationsInput = {
    set?: $Enums.SubscriptionStatus
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutSubscriptionsNestedInput = {
    create?: XOR<UserCreateWithoutSubscriptionsInput, UserUncheckedCreateWithoutSubscriptionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSubscriptionsInput
    upsert?: UserUpsertWithoutSubscriptionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSubscriptionsInput, UserUpdateWithoutSubscriptionsInput>, UserUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type CommissionUpdateManyWithoutSubscriptionNestedInput = {
    create?: XOR<CommissionCreateWithoutSubscriptionInput, CommissionUncheckedCreateWithoutSubscriptionInput> | CommissionCreateWithoutSubscriptionInput[] | CommissionUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: CommissionCreateOrConnectWithoutSubscriptionInput | CommissionCreateOrConnectWithoutSubscriptionInput[]
    upsert?: CommissionUpsertWithWhereUniqueWithoutSubscriptionInput | CommissionUpsertWithWhereUniqueWithoutSubscriptionInput[]
    createMany?: CommissionCreateManySubscriptionInputEnvelope
    set?: CommissionWhereUniqueInput | CommissionWhereUniqueInput[]
    disconnect?: CommissionWhereUniqueInput | CommissionWhereUniqueInput[]
    delete?: CommissionWhereUniqueInput | CommissionWhereUniqueInput[]
    connect?: CommissionWhereUniqueInput | CommissionWhereUniqueInput[]
    update?: CommissionUpdateWithWhereUniqueWithoutSubscriptionInput | CommissionUpdateWithWhereUniqueWithoutSubscriptionInput[]
    updateMany?: CommissionUpdateManyWithWhereWithoutSubscriptionInput | CommissionUpdateManyWithWhereWithoutSubscriptionInput[]
    deleteMany?: CommissionScalarWhereInput | CommissionScalarWhereInput[]
  }

  export type CommissionUncheckedUpdateManyWithoutSubscriptionNestedInput = {
    create?: XOR<CommissionCreateWithoutSubscriptionInput, CommissionUncheckedCreateWithoutSubscriptionInput> | CommissionCreateWithoutSubscriptionInput[] | CommissionUncheckedCreateWithoutSubscriptionInput[]
    connectOrCreate?: CommissionCreateOrConnectWithoutSubscriptionInput | CommissionCreateOrConnectWithoutSubscriptionInput[]
    upsert?: CommissionUpsertWithWhereUniqueWithoutSubscriptionInput | CommissionUpsertWithWhereUniqueWithoutSubscriptionInput[]
    createMany?: CommissionCreateManySubscriptionInputEnvelope
    set?: CommissionWhereUniqueInput | CommissionWhereUniqueInput[]
    disconnect?: CommissionWhereUniqueInput | CommissionWhereUniqueInput[]
    delete?: CommissionWhereUniqueInput | CommissionWhereUniqueInput[]
    connect?: CommissionWhereUniqueInput | CommissionWhereUniqueInput[]
    update?: CommissionUpdateWithWhereUniqueWithoutSubscriptionInput | CommissionUpdateWithWhereUniqueWithoutSubscriptionInput[]
    updateMany?: CommissionUpdateManyWithWhereWithoutSubscriptionInput | CommissionUpdateManyWithWhereWithoutSubscriptionInput[]
    deleteMany?: CommissionScalarWhereInput | CommissionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentsInput
    connect?: UserWhereUniqueInput
  }

  export type CommissionCreateNestedManyWithoutPaymentInput = {
    create?: XOR<CommissionCreateWithoutPaymentInput, CommissionUncheckedCreateWithoutPaymentInput> | CommissionCreateWithoutPaymentInput[] | CommissionUncheckedCreateWithoutPaymentInput[]
    connectOrCreate?: CommissionCreateOrConnectWithoutPaymentInput | CommissionCreateOrConnectWithoutPaymentInput[]
    createMany?: CommissionCreateManyPaymentInputEnvelope
    connect?: CommissionWhereUniqueInput | CommissionWhereUniqueInput[]
  }

  export type CommissionUncheckedCreateNestedManyWithoutPaymentInput = {
    create?: XOR<CommissionCreateWithoutPaymentInput, CommissionUncheckedCreateWithoutPaymentInput> | CommissionCreateWithoutPaymentInput[] | CommissionUncheckedCreateWithoutPaymentInput[]
    connectOrCreate?: CommissionCreateOrConnectWithoutPaymentInput | CommissionCreateOrConnectWithoutPaymentInput[]
    createMany?: CommissionCreateManyPaymentInputEnvelope
    connect?: CommissionWhereUniqueInput | CommissionWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
    unset?: boolean
  }

  export type UserUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentsInput
    upsert?: UserUpsertWithoutPaymentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPaymentsInput, UserUpdateWithoutPaymentsInput>, UserUncheckedUpdateWithoutPaymentsInput>
  }

  export type CommissionUpdateManyWithoutPaymentNestedInput = {
    create?: XOR<CommissionCreateWithoutPaymentInput, CommissionUncheckedCreateWithoutPaymentInput> | CommissionCreateWithoutPaymentInput[] | CommissionUncheckedCreateWithoutPaymentInput[]
    connectOrCreate?: CommissionCreateOrConnectWithoutPaymentInput | CommissionCreateOrConnectWithoutPaymentInput[]
    upsert?: CommissionUpsertWithWhereUniqueWithoutPaymentInput | CommissionUpsertWithWhereUniqueWithoutPaymentInput[]
    createMany?: CommissionCreateManyPaymentInputEnvelope
    set?: CommissionWhereUniqueInput | CommissionWhereUniqueInput[]
    disconnect?: CommissionWhereUniqueInput | CommissionWhereUniqueInput[]
    delete?: CommissionWhereUniqueInput | CommissionWhereUniqueInput[]
    connect?: CommissionWhereUniqueInput | CommissionWhereUniqueInput[]
    update?: CommissionUpdateWithWhereUniqueWithoutPaymentInput | CommissionUpdateWithWhereUniqueWithoutPaymentInput[]
    updateMany?: CommissionUpdateManyWithWhereWithoutPaymentInput | CommissionUpdateManyWithWhereWithoutPaymentInput[]
    deleteMany?: CommissionScalarWhereInput | CommissionScalarWhereInput[]
  }

  export type CommissionUncheckedUpdateManyWithoutPaymentNestedInput = {
    create?: XOR<CommissionCreateWithoutPaymentInput, CommissionUncheckedCreateWithoutPaymentInput> | CommissionCreateWithoutPaymentInput[] | CommissionUncheckedCreateWithoutPaymentInput[]
    connectOrCreate?: CommissionCreateOrConnectWithoutPaymentInput | CommissionCreateOrConnectWithoutPaymentInput[]
    upsert?: CommissionUpsertWithWhereUniqueWithoutPaymentInput | CommissionUpsertWithWhereUniqueWithoutPaymentInput[]
    createMany?: CommissionCreateManyPaymentInputEnvelope
    set?: CommissionWhereUniqueInput | CommissionWhereUniqueInput[]
    disconnect?: CommissionWhereUniqueInput | CommissionWhereUniqueInput[]
    delete?: CommissionWhereUniqueInput | CommissionWhereUniqueInput[]
    connect?: CommissionWhereUniqueInput | CommissionWhereUniqueInput[]
    update?: CommissionUpdateWithWhereUniqueWithoutPaymentInput | CommissionUpdateWithWhereUniqueWithoutPaymentInput[]
    updateMany?: CommissionUpdateManyWithWhereWithoutPaymentInput | CommissionUpdateManyWithWhereWithoutPaymentInput[]
    deleteMany?: CommissionScalarWhereInput | CommissionScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTelegramLinkTokensInput = {
    create?: XOR<UserCreateWithoutTelegramLinkTokensInput, UserUncheckedCreateWithoutTelegramLinkTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutTelegramLinkTokensInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutTelegramLinkTokensNestedInput = {
    create?: XOR<UserCreateWithoutTelegramLinkTokensInput, UserUncheckedCreateWithoutTelegramLinkTokensInput>
    connectOrCreate?: UserCreateOrConnectWithoutTelegramLinkTokensInput
    upsert?: UserUpsertWithoutTelegramLinkTokensInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTelegramLinkTokensInput, UserUpdateWithoutTelegramLinkTokensInput>, UserUncheckedUpdateWithoutTelegramLinkTokensInput>
  }

  export type UserCreateNestedOneWithoutTicketInput = {
    create?: XOR<UserCreateWithoutTicketInput, UserUncheckedCreateWithoutTicketInput>
    connectOrCreate?: UserCreateOrConnectWithoutTicketInput
    connect?: UserWhereUniqueInput
  }

  export type TicketMessageCreateNestedManyWithoutTicketInput = {
    create?: XOR<TicketMessageCreateWithoutTicketInput, TicketMessageUncheckedCreateWithoutTicketInput> | TicketMessageCreateWithoutTicketInput[] | TicketMessageUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TicketMessageCreateOrConnectWithoutTicketInput | TicketMessageCreateOrConnectWithoutTicketInput[]
    createMany?: TicketMessageCreateManyTicketInputEnvelope
    connect?: TicketMessageWhereUniqueInput | TicketMessageWhereUniqueInput[]
  }

  export type TicketMessageUncheckedCreateNestedManyWithoutTicketInput = {
    create?: XOR<TicketMessageCreateWithoutTicketInput, TicketMessageUncheckedCreateWithoutTicketInput> | TicketMessageCreateWithoutTicketInput[] | TicketMessageUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TicketMessageCreateOrConnectWithoutTicketInput | TicketMessageCreateOrConnectWithoutTicketInput[]
    createMany?: TicketMessageCreateManyTicketInputEnvelope
    connect?: TicketMessageWhereUniqueInput | TicketMessageWhereUniqueInput[]
  }

  export type EnumTicketCategoryFieldUpdateOperationsInput = {
    set?: $Enums.TicketCategory
  }

  export type EnumTicketPriorityFieldUpdateOperationsInput = {
    set?: $Enums.TicketPriority
  }

  export type EnumTicketStatusFieldUpdateOperationsInput = {
    set?: $Enums.TicketStatus
  }

  export type UserUpdateOneWithoutTicketNestedInput = {
    create?: XOR<UserCreateWithoutTicketInput, UserUncheckedCreateWithoutTicketInput>
    connectOrCreate?: UserCreateOrConnectWithoutTicketInput
    upsert?: UserUpsertWithoutTicketInput
    disconnect?: boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTicketInput, UserUpdateWithoutTicketInput>, UserUncheckedUpdateWithoutTicketInput>
  }

  export type TicketMessageUpdateManyWithoutTicketNestedInput = {
    create?: XOR<TicketMessageCreateWithoutTicketInput, TicketMessageUncheckedCreateWithoutTicketInput> | TicketMessageCreateWithoutTicketInput[] | TicketMessageUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TicketMessageCreateOrConnectWithoutTicketInput | TicketMessageCreateOrConnectWithoutTicketInput[]
    upsert?: TicketMessageUpsertWithWhereUniqueWithoutTicketInput | TicketMessageUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: TicketMessageCreateManyTicketInputEnvelope
    set?: TicketMessageWhereUniqueInput | TicketMessageWhereUniqueInput[]
    disconnect?: TicketMessageWhereUniqueInput | TicketMessageWhereUniqueInput[]
    delete?: TicketMessageWhereUniqueInput | TicketMessageWhereUniqueInput[]
    connect?: TicketMessageWhereUniqueInput | TicketMessageWhereUniqueInput[]
    update?: TicketMessageUpdateWithWhereUniqueWithoutTicketInput | TicketMessageUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: TicketMessageUpdateManyWithWhereWithoutTicketInput | TicketMessageUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: TicketMessageScalarWhereInput | TicketMessageScalarWhereInput[]
  }

  export type TicketMessageUncheckedUpdateManyWithoutTicketNestedInput = {
    create?: XOR<TicketMessageCreateWithoutTicketInput, TicketMessageUncheckedCreateWithoutTicketInput> | TicketMessageCreateWithoutTicketInput[] | TicketMessageUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: TicketMessageCreateOrConnectWithoutTicketInput | TicketMessageCreateOrConnectWithoutTicketInput[]
    upsert?: TicketMessageUpsertWithWhereUniqueWithoutTicketInput | TicketMessageUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: TicketMessageCreateManyTicketInputEnvelope
    set?: TicketMessageWhereUniqueInput | TicketMessageWhereUniqueInput[]
    disconnect?: TicketMessageWhereUniqueInput | TicketMessageWhereUniqueInput[]
    delete?: TicketMessageWhereUniqueInput | TicketMessageWhereUniqueInput[]
    connect?: TicketMessageWhereUniqueInput | TicketMessageWhereUniqueInput[]
    update?: TicketMessageUpdateWithWhereUniqueWithoutTicketInput | TicketMessageUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: TicketMessageUpdateManyWithWhereWithoutTicketInput | TicketMessageUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: TicketMessageScalarWhereInput | TicketMessageScalarWhereInput[]
  }

  export type TicketCreateNestedOneWithoutMessagesInput = {
    create?: XOR<TicketCreateWithoutMessagesInput, TicketUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: TicketCreateOrConnectWithoutMessagesInput
    connect?: TicketWhereUniqueInput
  }

  export type TicketUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<TicketCreateWithoutMessagesInput, TicketUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: TicketCreateOrConnectWithoutMessagesInput
    upsert?: TicketUpsertWithoutMessagesInput
    connect?: TicketWhereUniqueInput
    update?: XOR<XOR<TicketUpdateToOneWithWhereWithoutMessagesInput, TicketUpdateWithoutMessagesInput>, TicketUncheckedUpdateWithoutMessagesInput>
  }

  export type UserCreateNestedOneWithoutAffiliateInput = {
    create?: XOR<UserCreateWithoutAffiliateInput, UserUncheckedCreateWithoutAffiliateInput>
    connectOrCreate?: UserCreateOrConnectWithoutAffiliateInput
    connect?: UserWhereUniqueInput
  }

  export type ReferralClickCreateNestedManyWithoutAffiliateInput = {
    create?: XOR<ReferralClickCreateWithoutAffiliateInput, ReferralClickUncheckedCreateWithoutAffiliateInput> | ReferralClickCreateWithoutAffiliateInput[] | ReferralClickUncheckedCreateWithoutAffiliateInput[]
    connectOrCreate?: ReferralClickCreateOrConnectWithoutAffiliateInput | ReferralClickCreateOrConnectWithoutAffiliateInput[]
    createMany?: ReferralClickCreateManyAffiliateInputEnvelope
    connect?: ReferralClickWhereUniqueInput | ReferralClickWhereUniqueInput[]
  }

  export type CommissionCreateNestedManyWithoutAffiliateInput = {
    create?: XOR<CommissionCreateWithoutAffiliateInput, CommissionUncheckedCreateWithoutAffiliateInput> | CommissionCreateWithoutAffiliateInput[] | CommissionUncheckedCreateWithoutAffiliateInput[]
    connectOrCreate?: CommissionCreateOrConnectWithoutAffiliateInput | CommissionCreateOrConnectWithoutAffiliateInput[]
    createMany?: CommissionCreateManyAffiliateInputEnvelope
    connect?: CommissionWhereUniqueInput | CommissionWhereUniqueInput[]
  }

  export type PayoutCreateNestedManyWithoutAffiliateInput = {
    create?: XOR<PayoutCreateWithoutAffiliateInput, PayoutUncheckedCreateWithoutAffiliateInput> | PayoutCreateWithoutAffiliateInput[] | PayoutUncheckedCreateWithoutAffiliateInput[]
    connectOrCreate?: PayoutCreateOrConnectWithoutAffiliateInput | PayoutCreateOrConnectWithoutAffiliateInput[]
    createMany?: PayoutCreateManyAffiliateInputEnvelope
    connect?: PayoutWhereUniqueInput | PayoutWhereUniqueInput[]
  }

  export type ReferralClickUncheckedCreateNestedManyWithoutAffiliateInput = {
    create?: XOR<ReferralClickCreateWithoutAffiliateInput, ReferralClickUncheckedCreateWithoutAffiliateInput> | ReferralClickCreateWithoutAffiliateInput[] | ReferralClickUncheckedCreateWithoutAffiliateInput[]
    connectOrCreate?: ReferralClickCreateOrConnectWithoutAffiliateInput | ReferralClickCreateOrConnectWithoutAffiliateInput[]
    createMany?: ReferralClickCreateManyAffiliateInputEnvelope
    connect?: ReferralClickWhereUniqueInput | ReferralClickWhereUniqueInput[]
  }

  export type CommissionUncheckedCreateNestedManyWithoutAffiliateInput = {
    create?: XOR<CommissionCreateWithoutAffiliateInput, CommissionUncheckedCreateWithoutAffiliateInput> | CommissionCreateWithoutAffiliateInput[] | CommissionUncheckedCreateWithoutAffiliateInput[]
    connectOrCreate?: CommissionCreateOrConnectWithoutAffiliateInput | CommissionCreateOrConnectWithoutAffiliateInput[]
    createMany?: CommissionCreateManyAffiliateInputEnvelope
    connect?: CommissionWhereUniqueInput | CommissionWhereUniqueInput[]
  }

  export type PayoutUncheckedCreateNestedManyWithoutAffiliateInput = {
    create?: XOR<PayoutCreateWithoutAffiliateInput, PayoutUncheckedCreateWithoutAffiliateInput> | PayoutCreateWithoutAffiliateInput[] | PayoutUncheckedCreateWithoutAffiliateInput[]
    connectOrCreate?: PayoutCreateOrConnectWithoutAffiliateInput | PayoutCreateOrConnectWithoutAffiliateInput[]
    createMany?: PayoutCreateManyAffiliateInputEnvelope
    connect?: PayoutWhereUniqueInput | PayoutWhereUniqueInput[]
  }

  export type UserUpdateOneWithoutAffiliateNestedInput = {
    create?: XOR<UserCreateWithoutAffiliateInput, UserUncheckedCreateWithoutAffiliateInput>
    connectOrCreate?: UserCreateOrConnectWithoutAffiliateInput
    upsert?: UserUpsertWithoutAffiliateInput
    disconnect?: boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAffiliateInput, UserUpdateWithoutAffiliateInput>, UserUncheckedUpdateWithoutAffiliateInput>
  }

  export type ReferralClickUpdateManyWithoutAffiliateNestedInput = {
    create?: XOR<ReferralClickCreateWithoutAffiliateInput, ReferralClickUncheckedCreateWithoutAffiliateInput> | ReferralClickCreateWithoutAffiliateInput[] | ReferralClickUncheckedCreateWithoutAffiliateInput[]
    connectOrCreate?: ReferralClickCreateOrConnectWithoutAffiliateInput | ReferralClickCreateOrConnectWithoutAffiliateInput[]
    upsert?: ReferralClickUpsertWithWhereUniqueWithoutAffiliateInput | ReferralClickUpsertWithWhereUniqueWithoutAffiliateInput[]
    createMany?: ReferralClickCreateManyAffiliateInputEnvelope
    set?: ReferralClickWhereUniqueInput | ReferralClickWhereUniqueInput[]
    disconnect?: ReferralClickWhereUniqueInput | ReferralClickWhereUniqueInput[]
    delete?: ReferralClickWhereUniqueInput | ReferralClickWhereUniqueInput[]
    connect?: ReferralClickWhereUniqueInput | ReferralClickWhereUniqueInput[]
    update?: ReferralClickUpdateWithWhereUniqueWithoutAffiliateInput | ReferralClickUpdateWithWhereUniqueWithoutAffiliateInput[]
    updateMany?: ReferralClickUpdateManyWithWhereWithoutAffiliateInput | ReferralClickUpdateManyWithWhereWithoutAffiliateInput[]
    deleteMany?: ReferralClickScalarWhereInput | ReferralClickScalarWhereInput[]
  }

  export type CommissionUpdateManyWithoutAffiliateNestedInput = {
    create?: XOR<CommissionCreateWithoutAffiliateInput, CommissionUncheckedCreateWithoutAffiliateInput> | CommissionCreateWithoutAffiliateInput[] | CommissionUncheckedCreateWithoutAffiliateInput[]
    connectOrCreate?: CommissionCreateOrConnectWithoutAffiliateInput | CommissionCreateOrConnectWithoutAffiliateInput[]
    upsert?: CommissionUpsertWithWhereUniqueWithoutAffiliateInput | CommissionUpsertWithWhereUniqueWithoutAffiliateInput[]
    createMany?: CommissionCreateManyAffiliateInputEnvelope
    set?: CommissionWhereUniqueInput | CommissionWhereUniqueInput[]
    disconnect?: CommissionWhereUniqueInput | CommissionWhereUniqueInput[]
    delete?: CommissionWhereUniqueInput | CommissionWhereUniqueInput[]
    connect?: CommissionWhereUniqueInput | CommissionWhereUniqueInput[]
    update?: CommissionUpdateWithWhereUniqueWithoutAffiliateInput | CommissionUpdateWithWhereUniqueWithoutAffiliateInput[]
    updateMany?: CommissionUpdateManyWithWhereWithoutAffiliateInput | CommissionUpdateManyWithWhereWithoutAffiliateInput[]
    deleteMany?: CommissionScalarWhereInput | CommissionScalarWhereInput[]
  }

  export type PayoutUpdateManyWithoutAffiliateNestedInput = {
    create?: XOR<PayoutCreateWithoutAffiliateInput, PayoutUncheckedCreateWithoutAffiliateInput> | PayoutCreateWithoutAffiliateInput[] | PayoutUncheckedCreateWithoutAffiliateInput[]
    connectOrCreate?: PayoutCreateOrConnectWithoutAffiliateInput | PayoutCreateOrConnectWithoutAffiliateInput[]
    upsert?: PayoutUpsertWithWhereUniqueWithoutAffiliateInput | PayoutUpsertWithWhereUniqueWithoutAffiliateInput[]
    createMany?: PayoutCreateManyAffiliateInputEnvelope
    set?: PayoutWhereUniqueInput | PayoutWhereUniqueInput[]
    disconnect?: PayoutWhereUniqueInput | PayoutWhereUniqueInput[]
    delete?: PayoutWhereUniqueInput | PayoutWhereUniqueInput[]
    connect?: PayoutWhereUniqueInput | PayoutWhereUniqueInput[]
    update?: PayoutUpdateWithWhereUniqueWithoutAffiliateInput | PayoutUpdateWithWhereUniqueWithoutAffiliateInput[]
    updateMany?: PayoutUpdateManyWithWhereWithoutAffiliateInput | PayoutUpdateManyWithWhereWithoutAffiliateInput[]
    deleteMany?: PayoutScalarWhereInput | PayoutScalarWhereInput[]
  }

  export type ReferralClickUncheckedUpdateManyWithoutAffiliateNestedInput = {
    create?: XOR<ReferralClickCreateWithoutAffiliateInput, ReferralClickUncheckedCreateWithoutAffiliateInput> | ReferralClickCreateWithoutAffiliateInput[] | ReferralClickUncheckedCreateWithoutAffiliateInput[]
    connectOrCreate?: ReferralClickCreateOrConnectWithoutAffiliateInput | ReferralClickCreateOrConnectWithoutAffiliateInput[]
    upsert?: ReferralClickUpsertWithWhereUniqueWithoutAffiliateInput | ReferralClickUpsertWithWhereUniqueWithoutAffiliateInput[]
    createMany?: ReferralClickCreateManyAffiliateInputEnvelope
    set?: ReferralClickWhereUniqueInput | ReferralClickWhereUniqueInput[]
    disconnect?: ReferralClickWhereUniqueInput | ReferralClickWhereUniqueInput[]
    delete?: ReferralClickWhereUniqueInput | ReferralClickWhereUniqueInput[]
    connect?: ReferralClickWhereUniqueInput | ReferralClickWhereUniqueInput[]
    update?: ReferralClickUpdateWithWhereUniqueWithoutAffiliateInput | ReferralClickUpdateWithWhereUniqueWithoutAffiliateInput[]
    updateMany?: ReferralClickUpdateManyWithWhereWithoutAffiliateInput | ReferralClickUpdateManyWithWhereWithoutAffiliateInput[]
    deleteMany?: ReferralClickScalarWhereInput | ReferralClickScalarWhereInput[]
  }

  export type CommissionUncheckedUpdateManyWithoutAffiliateNestedInput = {
    create?: XOR<CommissionCreateWithoutAffiliateInput, CommissionUncheckedCreateWithoutAffiliateInput> | CommissionCreateWithoutAffiliateInput[] | CommissionUncheckedCreateWithoutAffiliateInput[]
    connectOrCreate?: CommissionCreateOrConnectWithoutAffiliateInput | CommissionCreateOrConnectWithoutAffiliateInput[]
    upsert?: CommissionUpsertWithWhereUniqueWithoutAffiliateInput | CommissionUpsertWithWhereUniqueWithoutAffiliateInput[]
    createMany?: CommissionCreateManyAffiliateInputEnvelope
    set?: CommissionWhereUniqueInput | CommissionWhereUniqueInput[]
    disconnect?: CommissionWhereUniqueInput | CommissionWhereUniqueInput[]
    delete?: CommissionWhereUniqueInput | CommissionWhereUniqueInput[]
    connect?: CommissionWhereUniqueInput | CommissionWhereUniqueInput[]
    update?: CommissionUpdateWithWhereUniqueWithoutAffiliateInput | CommissionUpdateWithWhereUniqueWithoutAffiliateInput[]
    updateMany?: CommissionUpdateManyWithWhereWithoutAffiliateInput | CommissionUpdateManyWithWhereWithoutAffiliateInput[]
    deleteMany?: CommissionScalarWhereInput | CommissionScalarWhereInput[]
  }

  export type PayoutUncheckedUpdateManyWithoutAffiliateNestedInput = {
    create?: XOR<PayoutCreateWithoutAffiliateInput, PayoutUncheckedCreateWithoutAffiliateInput> | PayoutCreateWithoutAffiliateInput[] | PayoutUncheckedCreateWithoutAffiliateInput[]
    connectOrCreate?: PayoutCreateOrConnectWithoutAffiliateInput | PayoutCreateOrConnectWithoutAffiliateInput[]
    upsert?: PayoutUpsertWithWhereUniqueWithoutAffiliateInput | PayoutUpsertWithWhereUniqueWithoutAffiliateInput[]
    createMany?: PayoutCreateManyAffiliateInputEnvelope
    set?: PayoutWhereUniqueInput | PayoutWhereUniqueInput[]
    disconnect?: PayoutWhereUniqueInput | PayoutWhereUniqueInput[]
    delete?: PayoutWhereUniqueInput | PayoutWhereUniqueInput[]
    connect?: PayoutWhereUniqueInput | PayoutWhereUniqueInput[]
    update?: PayoutUpdateWithWhereUniqueWithoutAffiliateInput | PayoutUpdateWithWhereUniqueWithoutAffiliateInput[]
    updateMany?: PayoutUpdateManyWithWhereWithoutAffiliateInput | PayoutUpdateManyWithWhereWithoutAffiliateInput[]
    deleteMany?: PayoutScalarWhereInput | PayoutScalarWhereInput[]
  }

  export type AffiliateCreateNestedOneWithoutReferralClicksInput = {
    create?: XOR<AffiliateCreateWithoutReferralClicksInput, AffiliateUncheckedCreateWithoutReferralClicksInput>
    connectOrCreate?: AffiliateCreateOrConnectWithoutReferralClicksInput
    connect?: AffiliateWhereUniqueInput
  }

  export type AffiliateUpdateOneRequiredWithoutReferralClicksNestedInput = {
    create?: XOR<AffiliateCreateWithoutReferralClicksInput, AffiliateUncheckedCreateWithoutReferralClicksInput>
    connectOrCreate?: AffiliateCreateOrConnectWithoutReferralClicksInput
    upsert?: AffiliateUpsertWithoutReferralClicksInput
    connect?: AffiliateWhereUniqueInput
    update?: XOR<XOR<AffiliateUpdateToOneWithWhereWithoutReferralClicksInput, AffiliateUpdateWithoutReferralClicksInput>, AffiliateUncheckedUpdateWithoutReferralClicksInput>
  }

  export type AffiliateCreateNestedOneWithoutCommissionsInput = {
    create?: XOR<AffiliateCreateWithoutCommissionsInput, AffiliateUncheckedCreateWithoutCommissionsInput>
    connectOrCreate?: AffiliateCreateOrConnectWithoutCommissionsInput
    connect?: AffiliateWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCommissionInput = {
    create?: XOR<UserCreateWithoutCommissionInput, UserUncheckedCreateWithoutCommissionInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommissionInput
    connect?: UserWhereUniqueInput
  }

  export type PaymentCreateNestedOneWithoutCommissionInput = {
    create?: XOR<PaymentCreateWithoutCommissionInput, PaymentUncheckedCreateWithoutCommissionInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutCommissionInput
    connect?: PaymentWhereUniqueInput
  }

  export type SubscriptionCreateNestedOneWithoutCommissionInput = {
    create?: XOR<SubscriptionCreateWithoutCommissionInput, SubscriptionUncheckedCreateWithoutCommissionInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutCommissionInput
    connect?: SubscriptionWhereUniqueInput
  }

  export type EnumCommissionStatusFieldUpdateOperationsInput = {
    set?: $Enums.CommissionStatus
  }

  export type AffiliateUpdateOneRequiredWithoutCommissionsNestedInput = {
    create?: XOR<AffiliateCreateWithoutCommissionsInput, AffiliateUncheckedCreateWithoutCommissionsInput>
    connectOrCreate?: AffiliateCreateOrConnectWithoutCommissionsInput
    upsert?: AffiliateUpsertWithoutCommissionsInput
    connect?: AffiliateWhereUniqueInput
    update?: XOR<XOR<AffiliateUpdateToOneWithWhereWithoutCommissionsInput, AffiliateUpdateWithoutCommissionsInput>, AffiliateUncheckedUpdateWithoutCommissionsInput>
  }

  export type UserUpdateOneRequiredWithoutCommissionNestedInput = {
    create?: XOR<UserCreateWithoutCommissionInput, UserUncheckedCreateWithoutCommissionInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommissionInput
    upsert?: UserUpsertWithoutCommissionInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommissionInput, UserUpdateWithoutCommissionInput>, UserUncheckedUpdateWithoutCommissionInput>
  }

  export type PaymentUpdateOneWithoutCommissionNestedInput = {
    create?: XOR<PaymentCreateWithoutCommissionInput, PaymentUncheckedCreateWithoutCommissionInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutCommissionInput
    upsert?: PaymentUpsertWithoutCommissionInput
    disconnect?: boolean
    delete?: PaymentWhereInput | boolean
    connect?: PaymentWhereUniqueInput
    update?: XOR<XOR<PaymentUpdateToOneWithWhereWithoutCommissionInput, PaymentUpdateWithoutCommissionInput>, PaymentUncheckedUpdateWithoutCommissionInput>
  }

  export type SubscriptionUpdateOneWithoutCommissionNestedInput = {
    create?: XOR<SubscriptionCreateWithoutCommissionInput, SubscriptionUncheckedCreateWithoutCommissionInput>
    connectOrCreate?: SubscriptionCreateOrConnectWithoutCommissionInput
    upsert?: SubscriptionUpsertWithoutCommissionInput
    disconnect?: boolean
    delete?: SubscriptionWhereInput | boolean
    connect?: SubscriptionWhereUniqueInput
    update?: XOR<XOR<SubscriptionUpdateToOneWithWhereWithoutCommissionInput, SubscriptionUpdateWithoutCommissionInput>, SubscriptionUncheckedUpdateWithoutCommissionInput>
  }

  export type PayoutCreatecommissionIdsInput = {
    set: string[]
  }

  export type AffiliateCreateNestedOneWithoutPayoutsInput = {
    create?: XOR<AffiliateCreateWithoutPayoutsInput, AffiliateUncheckedCreateWithoutPayoutsInput>
    connectOrCreate?: AffiliateCreateOrConnectWithoutPayoutsInput
    connect?: AffiliateWhereUniqueInput
  }

  export type EnumPayoutStatusFieldUpdateOperationsInput = {
    set?: $Enums.PayoutStatus
  }

  export type PayoutUpdatecommissionIdsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type AffiliateUpdateOneRequiredWithoutPayoutsNestedInput = {
    create?: XOR<AffiliateCreateWithoutPayoutsInput, AffiliateUncheckedCreateWithoutPayoutsInput>
    connectOrCreate?: AffiliateCreateOrConnectWithoutPayoutsInput
    upsert?: AffiliateUpsertWithoutPayoutsInput
    connect?: AffiliateWhereUniqueInput
    update?: XOR<XOR<AffiliateUpdateToOneWithWhereWithoutPayoutsInput, AffiliateUpdateWithoutPayoutsInput>, AffiliateUncheckedUpdateWithoutPayoutsInput>
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
    isSet?: boolean
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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
    isSet?: boolean
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
    isSet?: boolean
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
    isSet?: boolean
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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
    isSet?: boolean
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

  export type NestedEnumSubscriptionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusFilter<$PrismaModel> | $Enums.SubscriptionStatus
  }

  export type NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SubscriptionStatus | EnumSubscriptionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SubscriptionStatus[] | ListEnumSubscriptionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSubscriptionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SubscriptionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
    _max?: NestedEnumSubscriptionStatusFilter<$PrismaModel>
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

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
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

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
    isSet?: boolean
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
    isSet?: boolean
  }

  export type NestedEnumTicketCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketCategory | EnumTicketCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.TicketCategory[] | ListEnumTicketCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketCategory[] | ListEnumTicketCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketCategoryFilter<$PrismaModel> | $Enums.TicketCategory
  }

  export type NestedEnumTicketPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketPriority | EnumTicketPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.TicketPriority[] | ListEnumTicketPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketPriority[] | ListEnumTicketPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketPriorityFilter<$PrismaModel> | $Enums.TicketPriority
  }

  export type NestedEnumTicketStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketStatus | EnumTicketStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketStatusFilter<$PrismaModel> | $Enums.TicketStatus
  }

  export type NestedEnumTicketCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketCategory | EnumTicketCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.TicketCategory[] | ListEnumTicketCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketCategory[] | ListEnumTicketCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketCategoryWithAggregatesFilter<$PrismaModel> | $Enums.TicketCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTicketCategoryFilter<$PrismaModel>
    _max?: NestedEnumTicketCategoryFilter<$PrismaModel>
  }

  export type NestedEnumTicketPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketPriority | EnumTicketPriorityFieldRefInput<$PrismaModel>
    in?: $Enums.TicketPriority[] | ListEnumTicketPriorityFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketPriority[] | ListEnumTicketPriorityFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketPriorityWithAggregatesFilter<$PrismaModel> | $Enums.TicketPriority
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTicketPriorityFilter<$PrismaModel>
    _max?: NestedEnumTicketPriorityFilter<$PrismaModel>
  }

  export type NestedEnumTicketStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TicketStatus | EnumTicketStatusFieldRefInput<$PrismaModel>
    in?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.TicketStatus[] | ListEnumTicketStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumTicketStatusWithAggregatesFilter<$PrismaModel> | $Enums.TicketStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTicketStatusFilter<$PrismaModel>
    _max?: NestedEnumTicketStatusFilter<$PrismaModel>
  }

  export type NestedEnumCommissionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.CommissionStatus | EnumCommissionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CommissionStatus[] | ListEnumCommissionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CommissionStatus[] | ListEnumCommissionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCommissionStatusFilter<$PrismaModel> | $Enums.CommissionStatus
  }

  export type NestedEnumCommissionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CommissionStatus | EnumCommissionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.CommissionStatus[] | ListEnumCommissionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.CommissionStatus[] | ListEnumCommissionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumCommissionStatusWithAggregatesFilter<$PrismaModel> | $Enums.CommissionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCommissionStatusFilter<$PrismaModel>
    _max?: NestedEnumCommissionStatusFilter<$PrismaModel>
  }

  export type NestedEnumPayoutStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PayoutStatus | EnumPayoutStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PayoutStatus[] | ListEnumPayoutStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PayoutStatus[] | ListEnumPayoutStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPayoutStatusFilter<$PrismaModel> | $Enums.PayoutStatus
  }

  export type NestedEnumPayoutStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PayoutStatus | EnumPayoutStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PayoutStatus[] | ListEnumPayoutStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PayoutStatus[] | ListEnumPayoutStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPayoutStatusWithAggregatesFilter<$PrismaModel> | $Enums.PayoutStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPayoutStatusFilter<$PrismaModel>
    _max?: NestedEnumPayoutStatusFilter<$PrismaModel>
  }

  export type PaymentCreateWithoutUserInput = {
    id?: string
    amount: number
    method: string
    status: string
    reference: string
    provider?: string
    createdAt?: Date | string
    currency?: string | null
    fxRateToGBP?: number | null
    amountMinor?: number | null
    chargedCurrency?: string | null
    affiliateId?: string | null
    commissionId?: string | null
    Commission?: CommissionCreateNestedManyWithoutPaymentInput
  }

  export type PaymentUncheckedCreateWithoutUserInput = {
    id?: string
    amount: number
    method: string
    status: string
    reference: string
    provider?: string
    createdAt?: Date | string
    currency?: string | null
    fxRateToGBP?: number | null
    amountMinor?: number | null
    chargedCurrency?: string | null
    affiliateId?: string | null
    commissionId?: string | null
    Commission?: CommissionUncheckedCreateNestedManyWithoutPaymentInput
  }

  export type PaymentCreateOrConnectWithoutUserInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput>
  }

  export type PaymentCreateManyUserInputEnvelope = {
    data: PaymentCreateManyUserInput | PaymentCreateManyUserInput[]
  }

  export type TelegramLinkTokenCreateWithoutUserInput = {
    id?: string
    token: string
    createdAt?: Date | string
    expiresAt: Date | string
    usedAt?: Date | string | null
  }

  export type TelegramLinkTokenUncheckedCreateWithoutUserInput = {
    id?: string
    token: string
    createdAt?: Date | string
    expiresAt: Date | string
    usedAt?: Date | string | null
  }

  export type TelegramLinkTokenCreateOrConnectWithoutUserInput = {
    where: TelegramLinkTokenWhereUniqueInput
    create: XOR<TelegramLinkTokenCreateWithoutUserInput, TelegramLinkTokenUncheckedCreateWithoutUserInput>
  }

  export type TelegramLinkTokenCreateManyUserInputEnvelope = {
    data: TelegramLinkTokenCreateManyUserInput | TelegramLinkTokenCreateManyUserInput[]
  }

  export type SubscriptionCreateWithoutUserInput = {
    id?: string
    productName?: string | null
    paystackSubscriptionCode?: string | null
    paystackCustomerCode?: string | null
    paystackPlanCode?: string | null
    paystackEmailToken?: string | null
    status: $Enums.SubscriptionStatus
    currency: string
    unitAmountMinor: number
    interval: string
    intervalCount: number
    currentPeriodStart?: Date | string | null
    currentPeriodEnd?: Date | string | null
    cancelAtPeriodEnd?: boolean
    canceledAt?: Date | string | null
    affiliateId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Commission?: CommissionCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionUncheckedCreateWithoutUserInput = {
    id?: string
    productName?: string | null
    paystackSubscriptionCode?: string | null
    paystackCustomerCode?: string | null
    paystackPlanCode?: string | null
    paystackEmailToken?: string | null
    status: $Enums.SubscriptionStatus
    currency: string
    unitAmountMinor: number
    interval: string
    intervalCount: number
    currentPeriodStart?: Date | string | null
    currentPeriodEnd?: Date | string | null
    cancelAtPeriodEnd?: boolean
    canceledAt?: Date | string | null
    affiliateId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Commission?: CommissionUncheckedCreateNestedManyWithoutSubscriptionInput
  }

  export type SubscriptionCreateOrConnectWithoutUserInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
  }

  export type SubscriptionCreateManyUserInputEnvelope = {
    data: SubscriptionCreateManyUserInput | SubscriptionCreateManyUserInput[]
  }

  export type TicketCreateWithoutUserInput = {
    id?: string
    subject: string
    category?: $Enums.TicketCategory
    priority?: $Enums.TicketPriority
    status?: $Enums.TicketStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: TicketMessageCreateNestedManyWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutUserInput = {
    id?: string
    subject: string
    category?: $Enums.TicketCategory
    priority?: $Enums.TicketPriority
    status?: $Enums.TicketStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    messages?: TicketMessageUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutUserInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutUserInput, TicketUncheckedCreateWithoutUserInput>
  }

  export type TicketCreateManyUserInputEnvelope = {
    data: TicketCreateManyUserInput | TicketCreateManyUserInput[]
  }

  export type CommissionCreateWithoutUserInput = {
    id?: string
    currency: string
    amountMinor: number
    status?: $Enums.CommissionStatus
    reason?: string | null
    holdUntil?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    affiliate: AffiliateCreateNestedOneWithoutCommissionsInput
    payment?: PaymentCreateNestedOneWithoutCommissionInput
    subscription?: SubscriptionCreateNestedOneWithoutCommissionInput
  }

  export type CommissionUncheckedCreateWithoutUserInput = {
    id?: string
    affiliateId: string
    paymentId?: string | null
    subscriptionId?: string | null
    currency: string
    amountMinor: number
    status?: $Enums.CommissionStatus
    reason?: string | null
    holdUntil?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommissionCreateOrConnectWithoutUserInput = {
    where: CommissionWhereUniqueInput
    create: XOR<CommissionCreateWithoutUserInput, CommissionUncheckedCreateWithoutUserInput>
  }

  export type CommissionCreateManyUserInputEnvelope = {
    data: CommissionCreateManyUserInput | CommissionCreateManyUserInput[]
  }

  export type AffiliateCreateWithoutUserInput = {
    id?: string
    name: string
    email?: string | null
    code: string
    ratePct?: number | null
    flatMinor?: number | null
    currency?: string | null
    isActive?: boolean
    clicks?: number
    conversions?: number
    lifetimeMinor?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    referralClicks?: ReferralClickCreateNestedManyWithoutAffiliateInput
    commissions?: CommissionCreateNestedManyWithoutAffiliateInput
    payouts?: PayoutCreateNestedManyWithoutAffiliateInput
  }

  export type AffiliateUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    email?: string | null
    code: string
    ratePct?: number | null
    flatMinor?: number | null
    currency?: string | null
    isActive?: boolean
    clicks?: number
    conversions?: number
    lifetimeMinor?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    referralClicks?: ReferralClickUncheckedCreateNestedManyWithoutAffiliateInput
    commissions?: CommissionUncheckedCreateNestedManyWithoutAffiliateInput
    payouts?: PayoutUncheckedCreateNestedManyWithoutAffiliateInput
  }

  export type AffiliateCreateOrConnectWithoutUserInput = {
    where: AffiliateWhereUniqueInput
    create: XOR<AffiliateCreateWithoutUserInput, AffiliateUncheckedCreateWithoutUserInput>
  }

  export type AffiliateCreateManyUserInputEnvelope = {
    data: AffiliateCreateManyUserInput | AffiliateCreateManyUserInput[]
  }

  export type PaymentUpsertWithWhereUniqueWithoutUserInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutUserInput, PaymentUncheckedUpdateWithoutUserInput>
    create: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutUserInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutUserInput, PaymentUncheckedUpdateWithoutUserInput>
  }

  export type PaymentUpdateManyWithWhereWithoutUserInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutUserInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    id?: StringFilter<"Payment"> | string
    userId?: StringFilter<"Payment"> | string
    amount?: FloatFilter<"Payment"> | number
    method?: StringFilter<"Payment"> | string
    status?: StringFilter<"Payment"> | string
    reference?: StringFilter<"Payment"> | string
    provider?: StringFilter<"Payment"> | string
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    currency?: StringNullableFilter<"Payment"> | string | null
    fxRateToGBP?: FloatNullableFilter<"Payment"> | number | null
    amountMinor?: IntNullableFilter<"Payment"> | number | null
    chargedCurrency?: StringNullableFilter<"Payment"> | string | null
    affiliateId?: StringNullableFilter<"Payment"> | string | null
    commissionId?: StringNullableFilter<"Payment"> | string | null
  }

  export type TelegramLinkTokenUpsertWithWhereUniqueWithoutUserInput = {
    where: TelegramLinkTokenWhereUniqueInput
    update: XOR<TelegramLinkTokenUpdateWithoutUserInput, TelegramLinkTokenUncheckedUpdateWithoutUserInput>
    create: XOR<TelegramLinkTokenCreateWithoutUserInput, TelegramLinkTokenUncheckedCreateWithoutUserInput>
  }

  export type TelegramLinkTokenUpdateWithWhereUniqueWithoutUserInput = {
    where: TelegramLinkTokenWhereUniqueInput
    data: XOR<TelegramLinkTokenUpdateWithoutUserInput, TelegramLinkTokenUncheckedUpdateWithoutUserInput>
  }

  export type TelegramLinkTokenUpdateManyWithWhereWithoutUserInput = {
    where: TelegramLinkTokenScalarWhereInput
    data: XOR<TelegramLinkTokenUpdateManyMutationInput, TelegramLinkTokenUncheckedUpdateManyWithoutUserInput>
  }

  export type TelegramLinkTokenScalarWhereInput = {
    AND?: TelegramLinkTokenScalarWhereInput | TelegramLinkTokenScalarWhereInput[]
    OR?: TelegramLinkTokenScalarWhereInput[]
    NOT?: TelegramLinkTokenScalarWhereInput | TelegramLinkTokenScalarWhereInput[]
    id?: StringFilter<"TelegramLinkToken"> | string
    token?: StringFilter<"TelegramLinkToken"> | string
    userId?: StringFilter<"TelegramLinkToken"> | string
    createdAt?: DateTimeFilter<"TelegramLinkToken"> | Date | string
    expiresAt?: DateTimeFilter<"TelegramLinkToken"> | Date | string
    usedAt?: DateTimeNullableFilter<"TelegramLinkToken"> | Date | string | null
  }

  export type SubscriptionUpsertWithWhereUniqueWithoutUserInput = {
    where: SubscriptionWhereUniqueInput
    update: XOR<SubscriptionUpdateWithoutUserInput, SubscriptionUncheckedUpdateWithoutUserInput>
    create: XOR<SubscriptionCreateWithoutUserInput, SubscriptionUncheckedCreateWithoutUserInput>
  }

  export type SubscriptionUpdateWithWhereUniqueWithoutUserInput = {
    where: SubscriptionWhereUniqueInput
    data: XOR<SubscriptionUpdateWithoutUserInput, SubscriptionUncheckedUpdateWithoutUserInput>
  }

  export type SubscriptionUpdateManyWithWhereWithoutUserInput = {
    where: SubscriptionScalarWhereInput
    data: XOR<SubscriptionUpdateManyMutationInput, SubscriptionUncheckedUpdateManyWithoutUserInput>
  }

  export type SubscriptionScalarWhereInput = {
    AND?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
    OR?: SubscriptionScalarWhereInput[]
    NOT?: SubscriptionScalarWhereInput | SubscriptionScalarWhereInput[]
    id?: StringFilter<"Subscription"> | string
    userId?: StringFilter<"Subscription"> | string
    productName?: StringNullableFilter<"Subscription"> | string | null
    paystackSubscriptionCode?: StringNullableFilter<"Subscription"> | string | null
    paystackCustomerCode?: StringNullableFilter<"Subscription"> | string | null
    paystackPlanCode?: StringNullableFilter<"Subscription"> | string | null
    paystackEmailToken?: StringNullableFilter<"Subscription"> | string | null
    status?: EnumSubscriptionStatusFilter<"Subscription"> | $Enums.SubscriptionStatus
    currency?: StringFilter<"Subscription"> | string
    unitAmountMinor?: IntFilter<"Subscription"> | number
    interval?: StringFilter<"Subscription"> | string
    intervalCount?: IntFilter<"Subscription"> | number
    currentPeriodStart?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    currentPeriodEnd?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    cancelAtPeriodEnd?: BoolFilter<"Subscription"> | boolean
    canceledAt?: DateTimeNullableFilter<"Subscription"> | Date | string | null
    affiliateId?: StringNullableFilter<"Subscription"> | string | null
    createdAt?: DateTimeFilter<"Subscription"> | Date | string
    updatedAt?: DateTimeFilter<"Subscription"> | Date | string
  }

  export type TicketUpsertWithWhereUniqueWithoutUserInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutUserInput, TicketUncheckedUpdateWithoutUserInput>
    create: XOR<TicketCreateWithoutUserInput, TicketUncheckedCreateWithoutUserInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutUserInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutUserInput, TicketUncheckedUpdateWithoutUserInput>
  }

  export type TicketUpdateManyWithWhereWithoutUserInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutUserInput>
  }

  export type TicketScalarWhereInput = {
    AND?: TicketScalarWhereInput | TicketScalarWhereInput[]
    OR?: TicketScalarWhereInput[]
    NOT?: TicketScalarWhereInput | TicketScalarWhereInput[]
    id?: StringFilter<"Ticket"> | string
    userId?: StringFilter<"Ticket"> | string
    subject?: StringFilter<"Ticket"> | string
    category?: EnumTicketCategoryFilter<"Ticket"> | $Enums.TicketCategory
    priority?: EnumTicketPriorityFilter<"Ticket"> | $Enums.TicketPriority
    status?: EnumTicketStatusFilter<"Ticket"> | $Enums.TicketStatus
    createdAt?: DateTimeFilter<"Ticket"> | Date | string
    updatedAt?: DateTimeFilter<"Ticket"> | Date | string
  }

  export type CommissionUpsertWithWhereUniqueWithoutUserInput = {
    where: CommissionWhereUniqueInput
    update: XOR<CommissionUpdateWithoutUserInput, CommissionUncheckedUpdateWithoutUserInput>
    create: XOR<CommissionCreateWithoutUserInput, CommissionUncheckedCreateWithoutUserInput>
  }

  export type CommissionUpdateWithWhereUniqueWithoutUserInput = {
    where: CommissionWhereUniqueInput
    data: XOR<CommissionUpdateWithoutUserInput, CommissionUncheckedUpdateWithoutUserInput>
  }

  export type CommissionUpdateManyWithWhereWithoutUserInput = {
    where: CommissionScalarWhereInput
    data: XOR<CommissionUpdateManyMutationInput, CommissionUncheckedUpdateManyWithoutUserInput>
  }

  export type CommissionScalarWhereInput = {
    AND?: CommissionScalarWhereInput | CommissionScalarWhereInput[]
    OR?: CommissionScalarWhereInput[]
    NOT?: CommissionScalarWhereInput | CommissionScalarWhereInput[]
    id?: StringFilter<"Commission"> | string
    affiliateId?: StringFilter<"Commission"> | string
    userId?: StringFilter<"Commission"> | string
    paymentId?: StringNullableFilter<"Commission"> | string | null
    subscriptionId?: StringNullableFilter<"Commission"> | string | null
    currency?: StringFilter<"Commission"> | string
    amountMinor?: IntFilter<"Commission"> | number
    status?: EnumCommissionStatusFilter<"Commission"> | $Enums.CommissionStatus
    reason?: StringNullableFilter<"Commission"> | string | null
    holdUntil?: DateTimeNullableFilter<"Commission"> | Date | string | null
    createdAt?: DateTimeFilter<"Commission"> | Date | string
    updatedAt?: DateTimeFilter<"Commission"> | Date | string
  }

  export type AffiliateUpsertWithWhereUniqueWithoutUserInput = {
    where: AffiliateWhereUniqueInput
    update: XOR<AffiliateUpdateWithoutUserInput, AffiliateUncheckedUpdateWithoutUserInput>
    create: XOR<AffiliateCreateWithoutUserInput, AffiliateUncheckedCreateWithoutUserInput>
  }

  export type AffiliateUpdateWithWhereUniqueWithoutUserInput = {
    where: AffiliateWhereUniqueInput
    data: XOR<AffiliateUpdateWithoutUserInput, AffiliateUncheckedUpdateWithoutUserInput>
  }

  export type AffiliateUpdateManyWithWhereWithoutUserInput = {
    where: AffiliateScalarWhereInput
    data: XOR<AffiliateUpdateManyMutationInput, AffiliateUncheckedUpdateManyWithoutUserInput>
  }

  export type AffiliateScalarWhereInput = {
    AND?: AffiliateScalarWhereInput | AffiliateScalarWhereInput[]
    OR?: AffiliateScalarWhereInput[]
    NOT?: AffiliateScalarWhereInput | AffiliateScalarWhereInput[]
    id?: StringFilter<"Affiliate"> | string
    userId?: StringNullableFilter<"Affiliate"> | string | null
    name?: StringFilter<"Affiliate"> | string
    email?: StringNullableFilter<"Affiliate"> | string | null
    code?: StringFilter<"Affiliate"> | string
    ratePct?: FloatNullableFilter<"Affiliate"> | number | null
    flatMinor?: IntNullableFilter<"Affiliate"> | number | null
    currency?: StringNullableFilter<"Affiliate"> | string | null
    isActive?: BoolFilter<"Affiliate"> | boolean
    clicks?: IntFilter<"Affiliate"> | number
    conversions?: IntFilter<"Affiliate"> | number
    lifetimeMinor?: IntFilter<"Affiliate"> | number
    createdAt?: DateTimeFilter<"Affiliate"> | Date | string
    updatedAt?: DateTimeFilter<"Affiliate"> | Date | string
  }

  export type UserCreateWithoutSubscriptionsInput = {
    id?: string
    clerkUserId: string
    email: string
    password?: string | null
    username?: string | null
    avatar?: string | null
    role?: $Enums.Role
    isSubscribed?: boolean
    paddleCustomerId?: string | null
    paddleEmail?: string | null
    paystackCustomerCode?: string | null
    paystackAuthCode?: string | null
    referredByAffiliateId?: string | null
    firstPaidAt?: Date | string | null
    telegramChatId?: string | null
    telegramUsername?: string | null
    telegramLinkedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentCreateNestedManyWithoutUserInput
    telegramLinkTokens?: TelegramLinkTokenCreateNestedManyWithoutUserInput
    Ticket?: TicketCreateNestedManyWithoutUserInput
    Commission?: CommissionCreateNestedManyWithoutUserInput
    Affiliate?: AffiliateCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSubscriptionsInput = {
    id?: string
    clerkUserId: string
    email: string
    password?: string | null
    username?: string | null
    avatar?: string | null
    role?: $Enums.Role
    isSubscribed?: boolean
    paddleCustomerId?: string | null
    paddleEmail?: string | null
    paystackCustomerCode?: string | null
    paystackAuthCode?: string | null
    referredByAffiliateId?: string | null
    firstPaidAt?: Date | string | null
    telegramChatId?: string | null
    telegramUsername?: string | null
    telegramLinkedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    telegramLinkTokens?: TelegramLinkTokenUncheckedCreateNestedManyWithoutUserInput
    Ticket?: TicketUncheckedCreateNestedManyWithoutUserInput
    Commission?: CommissionUncheckedCreateNestedManyWithoutUserInput
    Affiliate?: AffiliateUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSubscriptionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSubscriptionsInput, UserUncheckedCreateWithoutSubscriptionsInput>
  }

  export type CommissionCreateWithoutSubscriptionInput = {
    id?: string
    currency: string
    amountMinor: number
    status?: $Enums.CommissionStatus
    reason?: string | null
    holdUntil?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    affiliate: AffiliateCreateNestedOneWithoutCommissionsInput
    user: UserCreateNestedOneWithoutCommissionInput
    payment?: PaymentCreateNestedOneWithoutCommissionInput
  }

  export type CommissionUncheckedCreateWithoutSubscriptionInput = {
    id?: string
    affiliateId: string
    userId: string
    paymentId?: string | null
    currency: string
    amountMinor: number
    status?: $Enums.CommissionStatus
    reason?: string | null
    holdUntil?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommissionCreateOrConnectWithoutSubscriptionInput = {
    where: CommissionWhereUniqueInput
    create: XOR<CommissionCreateWithoutSubscriptionInput, CommissionUncheckedCreateWithoutSubscriptionInput>
  }

  export type CommissionCreateManySubscriptionInputEnvelope = {
    data: CommissionCreateManySubscriptionInput | CommissionCreateManySubscriptionInput[]
  }

  export type UserUpsertWithoutSubscriptionsInput = {
    update: XOR<UserUpdateWithoutSubscriptionsInput, UserUncheckedUpdateWithoutSubscriptionsInput>
    create: XOR<UserCreateWithoutSubscriptionsInput, UserUncheckedCreateWithoutSubscriptionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSubscriptionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSubscriptionsInput, UserUncheckedUpdateWithoutSubscriptionsInput>
  }

  export type UserUpdateWithoutSubscriptionsInput = {
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isSubscribed?: BoolFieldUpdateOperationsInput | boolean
    paddleCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    paddleEmail?: NullableStringFieldUpdateOperationsInput | string | null
    paystackCustomerCode?: NullableStringFieldUpdateOperationsInput | string | null
    paystackAuthCode?: NullableStringFieldUpdateOperationsInput | string | null
    referredByAffiliateId?: NullableStringFieldUpdateOperationsInput | string | null
    firstPaidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    telegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramUsername?: NullableStringFieldUpdateOperationsInput | string | null
    telegramLinkedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUpdateManyWithoutUserNestedInput
    telegramLinkTokens?: TelegramLinkTokenUpdateManyWithoutUserNestedInput
    Ticket?: TicketUpdateManyWithoutUserNestedInput
    Commission?: CommissionUpdateManyWithoutUserNestedInput
    Affiliate?: AffiliateUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSubscriptionsInput = {
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isSubscribed?: BoolFieldUpdateOperationsInput | boolean
    paddleCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    paddleEmail?: NullableStringFieldUpdateOperationsInput | string | null
    paystackCustomerCode?: NullableStringFieldUpdateOperationsInput | string | null
    paystackAuthCode?: NullableStringFieldUpdateOperationsInput | string | null
    referredByAffiliateId?: NullableStringFieldUpdateOperationsInput | string | null
    firstPaidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    telegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramUsername?: NullableStringFieldUpdateOperationsInput | string | null
    telegramLinkedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    telegramLinkTokens?: TelegramLinkTokenUncheckedUpdateManyWithoutUserNestedInput
    Ticket?: TicketUncheckedUpdateManyWithoutUserNestedInput
    Commission?: CommissionUncheckedUpdateManyWithoutUserNestedInput
    Affiliate?: AffiliateUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CommissionUpsertWithWhereUniqueWithoutSubscriptionInput = {
    where: CommissionWhereUniqueInput
    update: XOR<CommissionUpdateWithoutSubscriptionInput, CommissionUncheckedUpdateWithoutSubscriptionInput>
    create: XOR<CommissionCreateWithoutSubscriptionInput, CommissionUncheckedCreateWithoutSubscriptionInput>
  }

  export type CommissionUpdateWithWhereUniqueWithoutSubscriptionInput = {
    where: CommissionWhereUniqueInput
    data: XOR<CommissionUpdateWithoutSubscriptionInput, CommissionUncheckedUpdateWithoutSubscriptionInput>
  }

  export type CommissionUpdateManyWithWhereWithoutSubscriptionInput = {
    where: CommissionScalarWhereInput
    data: XOR<CommissionUpdateManyMutationInput, CommissionUncheckedUpdateManyWithoutSubscriptionInput>
  }

  export type UserCreateWithoutPaymentsInput = {
    id?: string
    clerkUserId: string
    email: string
    password?: string | null
    username?: string | null
    avatar?: string | null
    role?: $Enums.Role
    isSubscribed?: boolean
    paddleCustomerId?: string | null
    paddleEmail?: string | null
    paystackCustomerCode?: string | null
    paystackAuthCode?: string | null
    referredByAffiliateId?: string | null
    firstPaidAt?: Date | string | null
    telegramChatId?: string | null
    telegramUsername?: string | null
    telegramLinkedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    telegramLinkTokens?: TelegramLinkTokenCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionCreateNestedManyWithoutUserInput
    Ticket?: TicketCreateNestedManyWithoutUserInput
    Commission?: CommissionCreateNestedManyWithoutUserInput
    Affiliate?: AffiliateCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPaymentsInput = {
    id?: string
    clerkUserId: string
    email: string
    password?: string | null
    username?: string | null
    avatar?: string | null
    role?: $Enums.Role
    isSubscribed?: boolean
    paddleCustomerId?: string | null
    paddleEmail?: string | null
    paystackCustomerCode?: string | null
    paystackAuthCode?: string | null
    referredByAffiliateId?: string | null
    firstPaidAt?: Date | string | null
    telegramChatId?: string | null
    telegramUsername?: string | null
    telegramLinkedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    telegramLinkTokens?: TelegramLinkTokenUncheckedCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
    Ticket?: TicketUncheckedCreateNestedManyWithoutUserInput
    Commission?: CommissionUncheckedCreateNestedManyWithoutUserInput
    Affiliate?: AffiliateUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPaymentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
  }

  export type CommissionCreateWithoutPaymentInput = {
    id?: string
    currency: string
    amountMinor: number
    status?: $Enums.CommissionStatus
    reason?: string | null
    holdUntil?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    affiliate: AffiliateCreateNestedOneWithoutCommissionsInput
    user: UserCreateNestedOneWithoutCommissionInput
    subscription?: SubscriptionCreateNestedOneWithoutCommissionInput
  }

  export type CommissionUncheckedCreateWithoutPaymentInput = {
    id?: string
    affiliateId: string
    userId: string
    subscriptionId?: string | null
    currency: string
    amountMinor: number
    status?: $Enums.CommissionStatus
    reason?: string | null
    holdUntil?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommissionCreateOrConnectWithoutPaymentInput = {
    where: CommissionWhereUniqueInput
    create: XOR<CommissionCreateWithoutPaymentInput, CommissionUncheckedCreateWithoutPaymentInput>
  }

  export type CommissionCreateManyPaymentInputEnvelope = {
    data: CommissionCreateManyPaymentInput | CommissionCreateManyPaymentInput[]
  }

  export type UserUpsertWithoutPaymentsInput = {
    update: XOR<UserUpdateWithoutPaymentsInput, UserUncheckedUpdateWithoutPaymentsInput>
    create: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPaymentsInput, UserUncheckedUpdateWithoutPaymentsInput>
  }

  export type UserUpdateWithoutPaymentsInput = {
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isSubscribed?: BoolFieldUpdateOperationsInput | boolean
    paddleCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    paddleEmail?: NullableStringFieldUpdateOperationsInput | string | null
    paystackCustomerCode?: NullableStringFieldUpdateOperationsInput | string | null
    paystackAuthCode?: NullableStringFieldUpdateOperationsInput | string | null
    referredByAffiliateId?: NullableStringFieldUpdateOperationsInput | string | null
    firstPaidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    telegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramUsername?: NullableStringFieldUpdateOperationsInput | string | null
    telegramLinkedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    telegramLinkTokens?: TelegramLinkTokenUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutUserNestedInput
    Ticket?: TicketUpdateManyWithoutUserNestedInput
    Commission?: CommissionUpdateManyWithoutUserNestedInput
    Affiliate?: AffiliateUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPaymentsInput = {
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isSubscribed?: BoolFieldUpdateOperationsInput | boolean
    paddleCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    paddleEmail?: NullableStringFieldUpdateOperationsInput | string | null
    paystackCustomerCode?: NullableStringFieldUpdateOperationsInput | string | null
    paystackAuthCode?: NullableStringFieldUpdateOperationsInput | string | null
    referredByAffiliateId?: NullableStringFieldUpdateOperationsInput | string | null
    firstPaidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    telegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramUsername?: NullableStringFieldUpdateOperationsInput | string | null
    telegramLinkedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    telegramLinkTokens?: TelegramLinkTokenUncheckedUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
    Ticket?: TicketUncheckedUpdateManyWithoutUserNestedInput
    Commission?: CommissionUncheckedUpdateManyWithoutUserNestedInput
    Affiliate?: AffiliateUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CommissionUpsertWithWhereUniqueWithoutPaymentInput = {
    where: CommissionWhereUniqueInput
    update: XOR<CommissionUpdateWithoutPaymentInput, CommissionUncheckedUpdateWithoutPaymentInput>
    create: XOR<CommissionCreateWithoutPaymentInput, CommissionUncheckedCreateWithoutPaymentInput>
  }

  export type CommissionUpdateWithWhereUniqueWithoutPaymentInput = {
    where: CommissionWhereUniqueInput
    data: XOR<CommissionUpdateWithoutPaymentInput, CommissionUncheckedUpdateWithoutPaymentInput>
  }

  export type CommissionUpdateManyWithWhereWithoutPaymentInput = {
    where: CommissionScalarWhereInput
    data: XOR<CommissionUpdateManyMutationInput, CommissionUncheckedUpdateManyWithoutPaymentInput>
  }

  export type UserCreateWithoutTelegramLinkTokensInput = {
    id?: string
    clerkUserId: string
    email: string
    password?: string | null
    username?: string | null
    avatar?: string | null
    role?: $Enums.Role
    isSubscribed?: boolean
    paddleCustomerId?: string | null
    paddleEmail?: string | null
    paystackCustomerCode?: string | null
    paystackAuthCode?: string | null
    referredByAffiliateId?: string | null
    firstPaidAt?: Date | string | null
    telegramChatId?: string | null
    telegramUsername?: string | null
    telegramLinkedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionCreateNestedManyWithoutUserInput
    Ticket?: TicketCreateNestedManyWithoutUserInput
    Commission?: CommissionCreateNestedManyWithoutUserInput
    Affiliate?: AffiliateCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTelegramLinkTokensInput = {
    id?: string
    clerkUserId: string
    email: string
    password?: string | null
    username?: string | null
    avatar?: string | null
    role?: $Enums.Role
    isSubscribed?: boolean
    paddleCustomerId?: string | null
    paddleEmail?: string | null
    paystackCustomerCode?: string | null
    paystackAuthCode?: string | null
    referredByAffiliateId?: string | null
    firstPaidAt?: Date | string | null
    telegramChatId?: string | null
    telegramUsername?: string | null
    telegramLinkedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
    Ticket?: TicketUncheckedCreateNestedManyWithoutUserInput
    Commission?: CommissionUncheckedCreateNestedManyWithoutUserInput
    Affiliate?: AffiliateUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTelegramLinkTokensInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTelegramLinkTokensInput, UserUncheckedCreateWithoutTelegramLinkTokensInput>
  }

  export type UserUpsertWithoutTelegramLinkTokensInput = {
    update: XOR<UserUpdateWithoutTelegramLinkTokensInput, UserUncheckedUpdateWithoutTelegramLinkTokensInput>
    create: XOR<UserCreateWithoutTelegramLinkTokensInput, UserUncheckedCreateWithoutTelegramLinkTokensInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTelegramLinkTokensInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTelegramLinkTokensInput, UserUncheckedUpdateWithoutTelegramLinkTokensInput>
  }

  export type UserUpdateWithoutTelegramLinkTokensInput = {
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isSubscribed?: BoolFieldUpdateOperationsInput | boolean
    paddleCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    paddleEmail?: NullableStringFieldUpdateOperationsInput | string | null
    paystackCustomerCode?: NullableStringFieldUpdateOperationsInput | string | null
    paystackAuthCode?: NullableStringFieldUpdateOperationsInput | string | null
    referredByAffiliateId?: NullableStringFieldUpdateOperationsInput | string | null
    firstPaidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    telegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramUsername?: NullableStringFieldUpdateOperationsInput | string | null
    telegramLinkedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutUserNestedInput
    Ticket?: TicketUpdateManyWithoutUserNestedInput
    Commission?: CommissionUpdateManyWithoutUserNestedInput
    Affiliate?: AffiliateUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTelegramLinkTokensInput = {
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isSubscribed?: BoolFieldUpdateOperationsInput | boolean
    paddleCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    paddleEmail?: NullableStringFieldUpdateOperationsInput | string | null
    paystackCustomerCode?: NullableStringFieldUpdateOperationsInput | string | null
    paystackAuthCode?: NullableStringFieldUpdateOperationsInput | string | null
    referredByAffiliateId?: NullableStringFieldUpdateOperationsInput | string | null
    firstPaidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    telegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramUsername?: NullableStringFieldUpdateOperationsInput | string | null
    telegramLinkedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
    Ticket?: TicketUncheckedUpdateManyWithoutUserNestedInput
    Commission?: CommissionUncheckedUpdateManyWithoutUserNestedInput
    Affiliate?: AffiliateUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutTicketInput = {
    id?: string
    clerkUserId: string
    email: string
    password?: string | null
    username?: string | null
    avatar?: string | null
    role?: $Enums.Role
    isSubscribed?: boolean
    paddleCustomerId?: string | null
    paddleEmail?: string | null
    paystackCustomerCode?: string | null
    paystackAuthCode?: string | null
    referredByAffiliateId?: string | null
    firstPaidAt?: Date | string | null
    telegramChatId?: string | null
    telegramUsername?: string | null
    telegramLinkedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentCreateNestedManyWithoutUserInput
    telegramLinkTokens?: TelegramLinkTokenCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionCreateNestedManyWithoutUserInput
    Commission?: CommissionCreateNestedManyWithoutUserInput
    Affiliate?: AffiliateCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTicketInput = {
    id?: string
    clerkUserId: string
    email: string
    password?: string | null
    username?: string | null
    avatar?: string | null
    role?: $Enums.Role
    isSubscribed?: boolean
    paddleCustomerId?: string | null
    paddleEmail?: string | null
    paystackCustomerCode?: string | null
    paystackAuthCode?: string | null
    referredByAffiliateId?: string | null
    firstPaidAt?: Date | string | null
    telegramChatId?: string | null
    telegramUsername?: string | null
    telegramLinkedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    telegramLinkTokens?: TelegramLinkTokenUncheckedCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
    Commission?: CommissionUncheckedCreateNestedManyWithoutUserInput
    Affiliate?: AffiliateUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTicketInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTicketInput, UserUncheckedCreateWithoutTicketInput>
  }

  export type TicketMessageCreateWithoutTicketInput = {
    id?: string
    authorId: string
    body: string
    isStaff?: boolean
    createdAt?: Date | string
  }

  export type TicketMessageUncheckedCreateWithoutTicketInput = {
    id?: string
    authorId: string
    body: string
    isStaff?: boolean
    createdAt?: Date | string
  }

  export type TicketMessageCreateOrConnectWithoutTicketInput = {
    where: TicketMessageWhereUniqueInput
    create: XOR<TicketMessageCreateWithoutTicketInput, TicketMessageUncheckedCreateWithoutTicketInput>
  }

  export type TicketMessageCreateManyTicketInputEnvelope = {
    data: TicketMessageCreateManyTicketInput | TicketMessageCreateManyTicketInput[]
  }

  export type UserUpsertWithoutTicketInput = {
    update: XOR<UserUpdateWithoutTicketInput, UserUncheckedUpdateWithoutTicketInput>
    create: XOR<UserCreateWithoutTicketInput, UserUncheckedCreateWithoutTicketInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTicketInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTicketInput, UserUncheckedUpdateWithoutTicketInput>
  }

  export type UserUpdateWithoutTicketInput = {
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isSubscribed?: BoolFieldUpdateOperationsInput | boolean
    paddleCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    paddleEmail?: NullableStringFieldUpdateOperationsInput | string | null
    paystackCustomerCode?: NullableStringFieldUpdateOperationsInput | string | null
    paystackAuthCode?: NullableStringFieldUpdateOperationsInput | string | null
    referredByAffiliateId?: NullableStringFieldUpdateOperationsInput | string | null
    firstPaidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    telegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramUsername?: NullableStringFieldUpdateOperationsInput | string | null
    telegramLinkedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUpdateManyWithoutUserNestedInput
    telegramLinkTokens?: TelegramLinkTokenUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutUserNestedInput
    Commission?: CommissionUpdateManyWithoutUserNestedInput
    Affiliate?: AffiliateUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTicketInput = {
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isSubscribed?: BoolFieldUpdateOperationsInput | boolean
    paddleCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    paddleEmail?: NullableStringFieldUpdateOperationsInput | string | null
    paystackCustomerCode?: NullableStringFieldUpdateOperationsInput | string | null
    paystackAuthCode?: NullableStringFieldUpdateOperationsInput | string | null
    referredByAffiliateId?: NullableStringFieldUpdateOperationsInput | string | null
    firstPaidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    telegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramUsername?: NullableStringFieldUpdateOperationsInput | string | null
    telegramLinkedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    telegramLinkTokens?: TelegramLinkTokenUncheckedUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
    Commission?: CommissionUncheckedUpdateManyWithoutUserNestedInput
    Affiliate?: AffiliateUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TicketMessageUpsertWithWhereUniqueWithoutTicketInput = {
    where: TicketMessageWhereUniqueInput
    update: XOR<TicketMessageUpdateWithoutTicketInput, TicketMessageUncheckedUpdateWithoutTicketInput>
    create: XOR<TicketMessageCreateWithoutTicketInput, TicketMessageUncheckedCreateWithoutTicketInput>
  }

  export type TicketMessageUpdateWithWhereUniqueWithoutTicketInput = {
    where: TicketMessageWhereUniqueInput
    data: XOR<TicketMessageUpdateWithoutTicketInput, TicketMessageUncheckedUpdateWithoutTicketInput>
  }

  export type TicketMessageUpdateManyWithWhereWithoutTicketInput = {
    where: TicketMessageScalarWhereInput
    data: XOR<TicketMessageUpdateManyMutationInput, TicketMessageUncheckedUpdateManyWithoutTicketInput>
  }

  export type TicketMessageScalarWhereInput = {
    AND?: TicketMessageScalarWhereInput | TicketMessageScalarWhereInput[]
    OR?: TicketMessageScalarWhereInput[]
    NOT?: TicketMessageScalarWhereInput | TicketMessageScalarWhereInput[]
    id?: StringFilter<"TicketMessage"> | string
    ticketId?: StringFilter<"TicketMessage"> | string
    authorId?: StringFilter<"TicketMessage"> | string
    body?: StringFilter<"TicketMessage"> | string
    isStaff?: BoolFilter<"TicketMessage"> | boolean
    createdAt?: DateTimeFilter<"TicketMessage"> | Date | string
  }

  export type TicketCreateWithoutMessagesInput = {
    id?: string
    subject: string
    category?: $Enums.TicketCategory
    priority?: $Enums.TicketPriority
    status?: $Enums.TicketStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutMessagesInput = {
    id?: string
    userId: string
    subject: string
    category?: $Enums.TicketCategory
    priority?: $Enums.TicketPriority
    status?: $Enums.TicketStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TicketCreateOrConnectWithoutMessagesInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutMessagesInput, TicketUncheckedCreateWithoutMessagesInput>
  }

  export type TicketUpsertWithoutMessagesInput = {
    update: XOR<TicketUpdateWithoutMessagesInput, TicketUncheckedUpdateWithoutMessagesInput>
    create: XOR<TicketCreateWithoutMessagesInput, TicketUncheckedCreateWithoutMessagesInput>
    where?: TicketWhereInput
  }

  export type TicketUpdateToOneWithWhereWithoutMessagesInput = {
    where?: TicketWhereInput
    data: XOR<TicketUpdateWithoutMessagesInput, TicketUncheckedUpdateWithoutMessagesInput>
  }

  export type TicketUpdateWithoutMessagesInput = {
    subject?: StringFieldUpdateOperationsInput | string
    category?: EnumTicketCategoryFieldUpdateOperationsInput | $Enums.TicketCategory
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutMessagesInput = {
    userId?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    category?: EnumTicketCategoryFieldUpdateOperationsInput | $Enums.TicketCategory
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutAffiliateInput = {
    id?: string
    clerkUserId: string
    email: string
    password?: string | null
    username?: string | null
    avatar?: string | null
    role?: $Enums.Role
    isSubscribed?: boolean
    paddleCustomerId?: string | null
    paddleEmail?: string | null
    paystackCustomerCode?: string | null
    paystackAuthCode?: string | null
    referredByAffiliateId?: string | null
    firstPaidAt?: Date | string | null
    telegramChatId?: string | null
    telegramUsername?: string | null
    telegramLinkedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentCreateNestedManyWithoutUserInput
    telegramLinkTokens?: TelegramLinkTokenCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionCreateNestedManyWithoutUserInput
    Ticket?: TicketCreateNestedManyWithoutUserInput
    Commission?: CommissionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAffiliateInput = {
    id?: string
    clerkUserId: string
    email: string
    password?: string | null
    username?: string | null
    avatar?: string | null
    role?: $Enums.Role
    isSubscribed?: boolean
    paddleCustomerId?: string | null
    paddleEmail?: string | null
    paystackCustomerCode?: string | null
    paystackAuthCode?: string | null
    referredByAffiliateId?: string | null
    firstPaidAt?: Date | string | null
    telegramChatId?: string | null
    telegramUsername?: string | null
    telegramLinkedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    telegramLinkTokens?: TelegramLinkTokenUncheckedCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
    Ticket?: TicketUncheckedCreateNestedManyWithoutUserInput
    Commission?: CommissionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAffiliateInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAffiliateInput, UserUncheckedCreateWithoutAffiliateInput>
  }

  export type ReferralClickCreateWithoutAffiliateInput = {
    id?: string
    ip?: string | null
    ua?: string | null
    referrer?: string | null
    createdAt?: Date | string
  }

  export type ReferralClickUncheckedCreateWithoutAffiliateInput = {
    id?: string
    ip?: string | null
    ua?: string | null
    referrer?: string | null
    createdAt?: Date | string
  }

  export type ReferralClickCreateOrConnectWithoutAffiliateInput = {
    where: ReferralClickWhereUniqueInput
    create: XOR<ReferralClickCreateWithoutAffiliateInput, ReferralClickUncheckedCreateWithoutAffiliateInput>
  }

  export type ReferralClickCreateManyAffiliateInputEnvelope = {
    data: ReferralClickCreateManyAffiliateInput | ReferralClickCreateManyAffiliateInput[]
  }

  export type CommissionCreateWithoutAffiliateInput = {
    id?: string
    currency: string
    amountMinor: number
    status?: $Enums.CommissionStatus
    reason?: string | null
    holdUntil?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutCommissionInput
    payment?: PaymentCreateNestedOneWithoutCommissionInput
    subscription?: SubscriptionCreateNestedOneWithoutCommissionInput
  }

  export type CommissionUncheckedCreateWithoutAffiliateInput = {
    id?: string
    userId: string
    paymentId?: string | null
    subscriptionId?: string | null
    currency: string
    amountMinor: number
    status?: $Enums.CommissionStatus
    reason?: string | null
    holdUntil?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommissionCreateOrConnectWithoutAffiliateInput = {
    where: CommissionWhereUniqueInput
    create: XOR<CommissionCreateWithoutAffiliateInput, CommissionUncheckedCreateWithoutAffiliateInput>
  }

  export type CommissionCreateManyAffiliateInputEnvelope = {
    data: CommissionCreateManyAffiliateInput | CommissionCreateManyAffiliateInput[]
  }

  export type PayoutCreateWithoutAffiliateInput = {
    id?: string
    status?: $Enums.PayoutStatus
    currency: string
    amountMinor: number
    note?: string | null
    commissionIds?: PayoutCreatecommissionIdsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PayoutUncheckedCreateWithoutAffiliateInput = {
    id?: string
    status?: $Enums.PayoutStatus
    currency: string
    amountMinor: number
    note?: string | null
    commissionIds?: PayoutCreatecommissionIdsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PayoutCreateOrConnectWithoutAffiliateInput = {
    where: PayoutWhereUniqueInput
    create: XOR<PayoutCreateWithoutAffiliateInput, PayoutUncheckedCreateWithoutAffiliateInput>
  }

  export type PayoutCreateManyAffiliateInputEnvelope = {
    data: PayoutCreateManyAffiliateInput | PayoutCreateManyAffiliateInput[]
  }

  export type UserUpsertWithoutAffiliateInput = {
    update: XOR<UserUpdateWithoutAffiliateInput, UserUncheckedUpdateWithoutAffiliateInput>
    create: XOR<UserCreateWithoutAffiliateInput, UserUncheckedCreateWithoutAffiliateInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAffiliateInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAffiliateInput, UserUncheckedUpdateWithoutAffiliateInput>
  }

  export type UserUpdateWithoutAffiliateInput = {
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isSubscribed?: BoolFieldUpdateOperationsInput | boolean
    paddleCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    paddleEmail?: NullableStringFieldUpdateOperationsInput | string | null
    paystackCustomerCode?: NullableStringFieldUpdateOperationsInput | string | null
    paystackAuthCode?: NullableStringFieldUpdateOperationsInput | string | null
    referredByAffiliateId?: NullableStringFieldUpdateOperationsInput | string | null
    firstPaidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    telegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramUsername?: NullableStringFieldUpdateOperationsInput | string | null
    telegramLinkedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUpdateManyWithoutUserNestedInput
    telegramLinkTokens?: TelegramLinkTokenUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutUserNestedInput
    Ticket?: TicketUpdateManyWithoutUserNestedInput
    Commission?: CommissionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAffiliateInput = {
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isSubscribed?: BoolFieldUpdateOperationsInput | boolean
    paddleCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    paddleEmail?: NullableStringFieldUpdateOperationsInput | string | null
    paystackCustomerCode?: NullableStringFieldUpdateOperationsInput | string | null
    paystackAuthCode?: NullableStringFieldUpdateOperationsInput | string | null
    referredByAffiliateId?: NullableStringFieldUpdateOperationsInput | string | null
    firstPaidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    telegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramUsername?: NullableStringFieldUpdateOperationsInput | string | null
    telegramLinkedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    telegramLinkTokens?: TelegramLinkTokenUncheckedUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
    Ticket?: TicketUncheckedUpdateManyWithoutUserNestedInput
    Commission?: CommissionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ReferralClickUpsertWithWhereUniqueWithoutAffiliateInput = {
    where: ReferralClickWhereUniqueInput
    update: XOR<ReferralClickUpdateWithoutAffiliateInput, ReferralClickUncheckedUpdateWithoutAffiliateInput>
    create: XOR<ReferralClickCreateWithoutAffiliateInput, ReferralClickUncheckedCreateWithoutAffiliateInput>
  }

  export type ReferralClickUpdateWithWhereUniqueWithoutAffiliateInput = {
    where: ReferralClickWhereUniqueInput
    data: XOR<ReferralClickUpdateWithoutAffiliateInput, ReferralClickUncheckedUpdateWithoutAffiliateInput>
  }

  export type ReferralClickUpdateManyWithWhereWithoutAffiliateInput = {
    where: ReferralClickScalarWhereInput
    data: XOR<ReferralClickUpdateManyMutationInput, ReferralClickUncheckedUpdateManyWithoutAffiliateInput>
  }

  export type ReferralClickScalarWhereInput = {
    AND?: ReferralClickScalarWhereInput | ReferralClickScalarWhereInput[]
    OR?: ReferralClickScalarWhereInput[]
    NOT?: ReferralClickScalarWhereInput | ReferralClickScalarWhereInput[]
    id?: StringFilter<"ReferralClick"> | string
    affiliateId?: StringFilter<"ReferralClick"> | string
    ip?: StringNullableFilter<"ReferralClick"> | string | null
    ua?: StringNullableFilter<"ReferralClick"> | string | null
    referrer?: StringNullableFilter<"ReferralClick"> | string | null
    createdAt?: DateTimeFilter<"ReferralClick"> | Date | string
  }

  export type CommissionUpsertWithWhereUniqueWithoutAffiliateInput = {
    where: CommissionWhereUniqueInput
    update: XOR<CommissionUpdateWithoutAffiliateInput, CommissionUncheckedUpdateWithoutAffiliateInput>
    create: XOR<CommissionCreateWithoutAffiliateInput, CommissionUncheckedCreateWithoutAffiliateInput>
  }

  export type CommissionUpdateWithWhereUniqueWithoutAffiliateInput = {
    where: CommissionWhereUniqueInput
    data: XOR<CommissionUpdateWithoutAffiliateInput, CommissionUncheckedUpdateWithoutAffiliateInput>
  }

  export type CommissionUpdateManyWithWhereWithoutAffiliateInput = {
    where: CommissionScalarWhereInput
    data: XOR<CommissionUpdateManyMutationInput, CommissionUncheckedUpdateManyWithoutAffiliateInput>
  }

  export type PayoutUpsertWithWhereUniqueWithoutAffiliateInput = {
    where: PayoutWhereUniqueInput
    update: XOR<PayoutUpdateWithoutAffiliateInput, PayoutUncheckedUpdateWithoutAffiliateInput>
    create: XOR<PayoutCreateWithoutAffiliateInput, PayoutUncheckedCreateWithoutAffiliateInput>
  }

  export type PayoutUpdateWithWhereUniqueWithoutAffiliateInput = {
    where: PayoutWhereUniqueInput
    data: XOR<PayoutUpdateWithoutAffiliateInput, PayoutUncheckedUpdateWithoutAffiliateInput>
  }

  export type PayoutUpdateManyWithWhereWithoutAffiliateInput = {
    where: PayoutScalarWhereInput
    data: XOR<PayoutUpdateManyMutationInput, PayoutUncheckedUpdateManyWithoutAffiliateInput>
  }

  export type PayoutScalarWhereInput = {
    AND?: PayoutScalarWhereInput | PayoutScalarWhereInput[]
    OR?: PayoutScalarWhereInput[]
    NOT?: PayoutScalarWhereInput | PayoutScalarWhereInput[]
    id?: StringFilter<"Payout"> | string
    affiliateId?: StringFilter<"Payout"> | string
    status?: EnumPayoutStatusFilter<"Payout"> | $Enums.PayoutStatus
    currency?: StringFilter<"Payout"> | string
    amountMinor?: IntFilter<"Payout"> | number
    note?: StringNullableFilter<"Payout"> | string | null
    commissionIds?: StringNullableListFilter<"Payout">
    createdAt?: DateTimeFilter<"Payout"> | Date | string
    updatedAt?: DateTimeFilter<"Payout"> | Date | string
  }

  export type AffiliateCreateWithoutReferralClicksInput = {
    id?: string
    name: string
    email?: string | null
    code: string
    ratePct?: number | null
    flatMinor?: number | null
    currency?: string | null
    isActive?: boolean
    clicks?: number
    conversions?: number
    lifetimeMinor?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutAffiliateInput
    commissions?: CommissionCreateNestedManyWithoutAffiliateInput
    payouts?: PayoutCreateNestedManyWithoutAffiliateInput
  }

  export type AffiliateUncheckedCreateWithoutReferralClicksInput = {
    id?: string
    userId?: string | null
    name: string
    email?: string | null
    code: string
    ratePct?: number | null
    flatMinor?: number | null
    currency?: string | null
    isActive?: boolean
    clicks?: number
    conversions?: number
    lifetimeMinor?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    commissions?: CommissionUncheckedCreateNestedManyWithoutAffiliateInput
    payouts?: PayoutUncheckedCreateNestedManyWithoutAffiliateInput
  }

  export type AffiliateCreateOrConnectWithoutReferralClicksInput = {
    where: AffiliateWhereUniqueInput
    create: XOR<AffiliateCreateWithoutReferralClicksInput, AffiliateUncheckedCreateWithoutReferralClicksInput>
  }

  export type AffiliateUpsertWithoutReferralClicksInput = {
    update: XOR<AffiliateUpdateWithoutReferralClicksInput, AffiliateUncheckedUpdateWithoutReferralClicksInput>
    create: XOR<AffiliateCreateWithoutReferralClicksInput, AffiliateUncheckedCreateWithoutReferralClicksInput>
    where?: AffiliateWhereInput
  }

  export type AffiliateUpdateToOneWithWhereWithoutReferralClicksInput = {
    where?: AffiliateWhereInput
    data: XOR<AffiliateUpdateWithoutReferralClicksInput, AffiliateUncheckedUpdateWithoutReferralClicksInput>
  }

  export type AffiliateUpdateWithoutReferralClicksInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    code?: StringFieldUpdateOperationsInput | string
    ratePct?: NullableFloatFieldUpdateOperationsInput | number | null
    flatMinor?: NullableIntFieldUpdateOperationsInput | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    clicks?: IntFieldUpdateOperationsInput | number
    conversions?: IntFieldUpdateOperationsInput | number
    lifetimeMinor?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutAffiliateNestedInput
    commissions?: CommissionUpdateManyWithoutAffiliateNestedInput
    payouts?: PayoutUpdateManyWithoutAffiliateNestedInput
  }

  export type AffiliateUncheckedUpdateWithoutReferralClicksInput = {
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    code?: StringFieldUpdateOperationsInput | string
    ratePct?: NullableFloatFieldUpdateOperationsInput | number | null
    flatMinor?: NullableIntFieldUpdateOperationsInput | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    clicks?: IntFieldUpdateOperationsInput | number
    conversions?: IntFieldUpdateOperationsInput | number
    lifetimeMinor?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commissions?: CommissionUncheckedUpdateManyWithoutAffiliateNestedInput
    payouts?: PayoutUncheckedUpdateManyWithoutAffiliateNestedInput
  }

  export type AffiliateCreateWithoutCommissionsInput = {
    id?: string
    name: string
    email?: string | null
    code: string
    ratePct?: number | null
    flatMinor?: number | null
    currency?: string | null
    isActive?: boolean
    clicks?: number
    conversions?: number
    lifetimeMinor?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutAffiliateInput
    referralClicks?: ReferralClickCreateNestedManyWithoutAffiliateInput
    payouts?: PayoutCreateNestedManyWithoutAffiliateInput
  }

  export type AffiliateUncheckedCreateWithoutCommissionsInput = {
    id?: string
    userId?: string | null
    name: string
    email?: string | null
    code: string
    ratePct?: number | null
    flatMinor?: number | null
    currency?: string | null
    isActive?: boolean
    clicks?: number
    conversions?: number
    lifetimeMinor?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    referralClicks?: ReferralClickUncheckedCreateNestedManyWithoutAffiliateInput
    payouts?: PayoutUncheckedCreateNestedManyWithoutAffiliateInput
  }

  export type AffiliateCreateOrConnectWithoutCommissionsInput = {
    where: AffiliateWhereUniqueInput
    create: XOR<AffiliateCreateWithoutCommissionsInput, AffiliateUncheckedCreateWithoutCommissionsInput>
  }

  export type UserCreateWithoutCommissionInput = {
    id?: string
    clerkUserId: string
    email: string
    password?: string | null
    username?: string | null
    avatar?: string | null
    role?: $Enums.Role
    isSubscribed?: boolean
    paddleCustomerId?: string | null
    paddleEmail?: string | null
    paystackCustomerCode?: string | null
    paystackAuthCode?: string | null
    referredByAffiliateId?: string | null
    firstPaidAt?: Date | string | null
    telegramChatId?: string | null
    telegramUsername?: string | null
    telegramLinkedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentCreateNestedManyWithoutUserInput
    telegramLinkTokens?: TelegramLinkTokenCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionCreateNestedManyWithoutUserInput
    Ticket?: TicketCreateNestedManyWithoutUserInput
    Affiliate?: AffiliateCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCommissionInput = {
    id?: string
    clerkUserId: string
    email: string
    password?: string | null
    username?: string | null
    avatar?: string | null
    role?: $Enums.Role
    isSubscribed?: boolean
    paddleCustomerId?: string | null
    paddleEmail?: string | null
    paystackCustomerCode?: string | null
    paystackAuthCode?: string | null
    referredByAffiliateId?: string | null
    firstPaidAt?: Date | string | null
    telegramChatId?: string | null
    telegramUsername?: string | null
    telegramLinkedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    telegramLinkTokens?: TelegramLinkTokenUncheckedCreateNestedManyWithoutUserInput
    subscriptions?: SubscriptionUncheckedCreateNestedManyWithoutUserInput
    Ticket?: TicketUncheckedCreateNestedManyWithoutUserInput
    Affiliate?: AffiliateUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCommissionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommissionInput, UserUncheckedCreateWithoutCommissionInput>
  }

  export type PaymentCreateWithoutCommissionInput = {
    id?: string
    amount: number
    method: string
    status: string
    reference: string
    provider?: string
    createdAt?: Date | string
    currency?: string | null
    fxRateToGBP?: number | null
    amountMinor?: number | null
    chargedCurrency?: string | null
    affiliateId?: string | null
    commissionId?: string | null
    user: UserCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateWithoutCommissionInput = {
    id?: string
    userId: string
    amount: number
    method: string
    status: string
    reference: string
    provider?: string
    createdAt?: Date | string
    currency?: string | null
    fxRateToGBP?: number | null
    amountMinor?: number | null
    chargedCurrency?: string | null
    affiliateId?: string | null
    commissionId?: string | null
  }

  export type PaymentCreateOrConnectWithoutCommissionInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutCommissionInput, PaymentUncheckedCreateWithoutCommissionInput>
  }

  export type SubscriptionCreateWithoutCommissionInput = {
    id?: string
    productName?: string | null
    paystackSubscriptionCode?: string | null
    paystackCustomerCode?: string | null
    paystackPlanCode?: string | null
    paystackEmailToken?: string | null
    status: $Enums.SubscriptionStatus
    currency: string
    unitAmountMinor: number
    interval: string
    intervalCount: number
    currentPeriodStart?: Date | string | null
    currentPeriodEnd?: Date | string | null
    cancelAtPeriodEnd?: boolean
    canceledAt?: Date | string | null
    affiliateId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSubscriptionsInput
  }

  export type SubscriptionUncheckedCreateWithoutCommissionInput = {
    id?: string
    userId: string
    productName?: string | null
    paystackSubscriptionCode?: string | null
    paystackCustomerCode?: string | null
    paystackPlanCode?: string | null
    paystackEmailToken?: string | null
    status: $Enums.SubscriptionStatus
    currency: string
    unitAmountMinor: number
    interval: string
    intervalCount: number
    currentPeriodStart?: Date | string | null
    currentPeriodEnd?: Date | string | null
    cancelAtPeriodEnd?: boolean
    canceledAt?: Date | string | null
    affiliateId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SubscriptionCreateOrConnectWithoutCommissionInput = {
    where: SubscriptionWhereUniqueInput
    create: XOR<SubscriptionCreateWithoutCommissionInput, SubscriptionUncheckedCreateWithoutCommissionInput>
  }

  export type AffiliateUpsertWithoutCommissionsInput = {
    update: XOR<AffiliateUpdateWithoutCommissionsInput, AffiliateUncheckedUpdateWithoutCommissionsInput>
    create: XOR<AffiliateCreateWithoutCommissionsInput, AffiliateUncheckedCreateWithoutCommissionsInput>
    where?: AffiliateWhereInput
  }

  export type AffiliateUpdateToOneWithWhereWithoutCommissionsInput = {
    where?: AffiliateWhereInput
    data: XOR<AffiliateUpdateWithoutCommissionsInput, AffiliateUncheckedUpdateWithoutCommissionsInput>
  }

  export type AffiliateUpdateWithoutCommissionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    code?: StringFieldUpdateOperationsInput | string
    ratePct?: NullableFloatFieldUpdateOperationsInput | number | null
    flatMinor?: NullableIntFieldUpdateOperationsInput | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    clicks?: IntFieldUpdateOperationsInput | number
    conversions?: IntFieldUpdateOperationsInput | number
    lifetimeMinor?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutAffiliateNestedInput
    referralClicks?: ReferralClickUpdateManyWithoutAffiliateNestedInput
    payouts?: PayoutUpdateManyWithoutAffiliateNestedInput
  }

  export type AffiliateUncheckedUpdateWithoutCommissionsInput = {
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    code?: StringFieldUpdateOperationsInput | string
    ratePct?: NullableFloatFieldUpdateOperationsInput | number | null
    flatMinor?: NullableIntFieldUpdateOperationsInput | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    clicks?: IntFieldUpdateOperationsInput | number
    conversions?: IntFieldUpdateOperationsInput | number
    lifetimeMinor?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referralClicks?: ReferralClickUncheckedUpdateManyWithoutAffiliateNestedInput
    payouts?: PayoutUncheckedUpdateManyWithoutAffiliateNestedInput
  }

  export type UserUpsertWithoutCommissionInput = {
    update: XOR<UserUpdateWithoutCommissionInput, UserUncheckedUpdateWithoutCommissionInput>
    create: XOR<UserCreateWithoutCommissionInput, UserUncheckedCreateWithoutCommissionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCommissionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommissionInput, UserUncheckedUpdateWithoutCommissionInput>
  }

  export type UserUpdateWithoutCommissionInput = {
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isSubscribed?: BoolFieldUpdateOperationsInput | boolean
    paddleCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    paddleEmail?: NullableStringFieldUpdateOperationsInput | string | null
    paystackCustomerCode?: NullableStringFieldUpdateOperationsInput | string | null
    paystackAuthCode?: NullableStringFieldUpdateOperationsInput | string | null
    referredByAffiliateId?: NullableStringFieldUpdateOperationsInput | string | null
    firstPaidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    telegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramUsername?: NullableStringFieldUpdateOperationsInput | string | null
    telegramLinkedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUpdateManyWithoutUserNestedInput
    telegramLinkTokens?: TelegramLinkTokenUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUpdateManyWithoutUserNestedInput
    Ticket?: TicketUpdateManyWithoutUserNestedInput
    Affiliate?: AffiliateUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCommissionInput = {
    clerkUserId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isSubscribed?: BoolFieldUpdateOperationsInput | boolean
    paddleCustomerId?: NullableStringFieldUpdateOperationsInput | string | null
    paddleEmail?: NullableStringFieldUpdateOperationsInput | string | null
    paystackCustomerCode?: NullableStringFieldUpdateOperationsInput | string | null
    paystackAuthCode?: NullableStringFieldUpdateOperationsInput | string | null
    referredByAffiliateId?: NullableStringFieldUpdateOperationsInput | string | null
    firstPaidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    telegramChatId?: NullableStringFieldUpdateOperationsInput | string | null
    telegramUsername?: NullableStringFieldUpdateOperationsInput | string | null
    telegramLinkedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    telegramLinkTokens?: TelegramLinkTokenUncheckedUpdateManyWithoutUserNestedInput
    subscriptions?: SubscriptionUncheckedUpdateManyWithoutUserNestedInput
    Ticket?: TicketUncheckedUpdateManyWithoutUserNestedInput
    Affiliate?: AffiliateUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PaymentUpsertWithoutCommissionInput = {
    update: XOR<PaymentUpdateWithoutCommissionInput, PaymentUncheckedUpdateWithoutCommissionInput>
    create: XOR<PaymentCreateWithoutCommissionInput, PaymentUncheckedCreateWithoutCommissionInput>
    where?: PaymentWhereInput
  }

  export type PaymentUpdateToOneWithWhereWithoutCommissionInput = {
    where?: PaymentWhereInput
    data: XOR<PaymentUpdateWithoutCommissionInput, PaymentUncheckedUpdateWithoutCommissionInput>
  }

  export type PaymentUpdateWithoutCommissionInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    fxRateToGBP?: NullableFloatFieldUpdateOperationsInput | number | null
    amountMinor?: NullableIntFieldUpdateOperationsInput | number | null
    chargedCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    affiliateId?: NullableStringFieldUpdateOperationsInput | string | null
    commissionId?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateWithoutCommissionInput = {
    userId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    fxRateToGBP?: NullableFloatFieldUpdateOperationsInput | number | null
    amountMinor?: NullableIntFieldUpdateOperationsInput | number | null
    chargedCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    affiliateId?: NullableStringFieldUpdateOperationsInput | string | null
    commissionId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SubscriptionUpsertWithoutCommissionInput = {
    update: XOR<SubscriptionUpdateWithoutCommissionInput, SubscriptionUncheckedUpdateWithoutCommissionInput>
    create: XOR<SubscriptionCreateWithoutCommissionInput, SubscriptionUncheckedCreateWithoutCommissionInput>
    where?: SubscriptionWhereInput
  }

  export type SubscriptionUpdateToOneWithWhereWithoutCommissionInput = {
    where?: SubscriptionWhereInput
    data: XOR<SubscriptionUpdateWithoutCommissionInput, SubscriptionUncheckedUpdateWithoutCommissionInput>
  }

  export type SubscriptionUpdateWithoutCommissionInput = {
    productName?: NullableStringFieldUpdateOperationsInput | string | null
    paystackSubscriptionCode?: NullableStringFieldUpdateOperationsInput | string | null
    paystackCustomerCode?: NullableStringFieldUpdateOperationsInput | string | null
    paystackPlanCode?: NullableStringFieldUpdateOperationsInput | string | null
    paystackEmailToken?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    currency?: StringFieldUpdateOperationsInput | string
    unitAmountMinor?: IntFieldUpdateOperationsInput | number
    interval?: StringFieldUpdateOperationsInput | string
    intervalCount?: IntFieldUpdateOperationsInput | number
    currentPeriodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentPeriodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelAtPeriodEnd?: BoolFieldUpdateOperationsInput | boolean
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    affiliateId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSubscriptionsNestedInput
  }

  export type SubscriptionUncheckedUpdateWithoutCommissionInput = {
    userId?: StringFieldUpdateOperationsInput | string
    productName?: NullableStringFieldUpdateOperationsInput | string | null
    paystackSubscriptionCode?: NullableStringFieldUpdateOperationsInput | string | null
    paystackCustomerCode?: NullableStringFieldUpdateOperationsInput | string | null
    paystackPlanCode?: NullableStringFieldUpdateOperationsInput | string | null
    paystackEmailToken?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    currency?: StringFieldUpdateOperationsInput | string
    unitAmountMinor?: IntFieldUpdateOperationsInput | number
    interval?: StringFieldUpdateOperationsInput | string
    intervalCount?: IntFieldUpdateOperationsInput | number
    currentPeriodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentPeriodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelAtPeriodEnd?: BoolFieldUpdateOperationsInput | boolean
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    affiliateId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AffiliateCreateWithoutPayoutsInput = {
    id?: string
    name: string
    email?: string | null
    code: string
    ratePct?: number | null
    flatMinor?: number | null
    currency?: string | null
    isActive?: boolean
    clicks?: number
    conversions?: number
    lifetimeMinor?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user?: UserCreateNestedOneWithoutAffiliateInput
    referralClicks?: ReferralClickCreateNestedManyWithoutAffiliateInput
    commissions?: CommissionCreateNestedManyWithoutAffiliateInput
  }

  export type AffiliateUncheckedCreateWithoutPayoutsInput = {
    id?: string
    userId?: string | null
    name: string
    email?: string | null
    code: string
    ratePct?: number | null
    flatMinor?: number | null
    currency?: string | null
    isActive?: boolean
    clicks?: number
    conversions?: number
    lifetimeMinor?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    referralClicks?: ReferralClickUncheckedCreateNestedManyWithoutAffiliateInput
    commissions?: CommissionUncheckedCreateNestedManyWithoutAffiliateInput
  }

  export type AffiliateCreateOrConnectWithoutPayoutsInput = {
    where: AffiliateWhereUniqueInput
    create: XOR<AffiliateCreateWithoutPayoutsInput, AffiliateUncheckedCreateWithoutPayoutsInput>
  }

  export type AffiliateUpsertWithoutPayoutsInput = {
    update: XOR<AffiliateUpdateWithoutPayoutsInput, AffiliateUncheckedUpdateWithoutPayoutsInput>
    create: XOR<AffiliateCreateWithoutPayoutsInput, AffiliateUncheckedCreateWithoutPayoutsInput>
    where?: AffiliateWhereInput
  }

  export type AffiliateUpdateToOneWithWhereWithoutPayoutsInput = {
    where?: AffiliateWhereInput
    data: XOR<AffiliateUpdateWithoutPayoutsInput, AffiliateUncheckedUpdateWithoutPayoutsInput>
  }

  export type AffiliateUpdateWithoutPayoutsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    code?: StringFieldUpdateOperationsInput | string
    ratePct?: NullableFloatFieldUpdateOperationsInput | number | null
    flatMinor?: NullableIntFieldUpdateOperationsInput | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    clicks?: IntFieldUpdateOperationsInput | number
    conversions?: IntFieldUpdateOperationsInput | number
    lifetimeMinor?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutAffiliateNestedInput
    referralClicks?: ReferralClickUpdateManyWithoutAffiliateNestedInput
    commissions?: CommissionUpdateManyWithoutAffiliateNestedInput
  }

  export type AffiliateUncheckedUpdateWithoutPayoutsInput = {
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    code?: StringFieldUpdateOperationsInput | string
    ratePct?: NullableFloatFieldUpdateOperationsInput | number | null
    flatMinor?: NullableIntFieldUpdateOperationsInput | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    clicks?: IntFieldUpdateOperationsInput | number
    conversions?: IntFieldUpdateOperationsInput | number
    lifetimeMinor?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referralClicks?: ReferralClickUncheckedUpdateManyWithoutAffiliateNestedInput
    commissions?: CommissionUncheckedUpdateManyWithoutAffiliateNestedInput
  }

  export type PaymentCreateManyUserInput = {
    id?: string
    amount: number
    method: string
    status: string
    reference: string
    provider?: string
    createdAt?: Date | string
    currency?: string | null
    fxRateToGBP?: number | null
    amountMinor?: number | null
    chargedCurrency?: string | null
    affiliateId?: string | null
    commissionId?: string | null
  }

  export type TelegramLinkTokenCreateManyUserInput = {
    id?: string
    token: string
    createdAt?: Date | string
    expiresAt: Date | string
    usedAt?: Date | string | null
  }

  export type SubscriptionCreateManyUserInput = {
    id?: string
    productName?: string | null
    paystackSubscriptionCode?: string | null
    paystackCustomerCode?: string | null
    paystackPlanCode?: string | null
    paystackEmailToken?: string | null
    status: $Enums.SubscriptionStatus
    currency: string
    unitAmountMinor: number
    interval: string
    intervalCount: number
    currentPeriodStart?: Date | string | null
    currentPeriodEnd?: Date | string | null
    cancelAtPeriodEnd?: boolean
    canceledAt?: Date | string | null
    affiliateId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TicketCreateManyUserInput = {
    id?: string
    subject: string
    category?: $Enums.TicketCategory
    priority?: $Enums.TicketPriority
    status?: $Enums.TicketStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommissionCreateManyUserInput = {
    id?: string
    affiliateId: string
    paymentId?: string | null
    subscriptionId?: string | null
    currency: string
    amountMinor: number
    status?: $Enums.CommissionStatus
    reason?: string | null
    holdUntil?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AffiliateCreateManyUserInput = {
    id?: string
    name: string
    email?: string | null
    code: string
    ratePct?: number | null
    flatMinor?: number | null
    currency?: string | null
    isActive?: boolean
    clicks?: number
    conversions?: number
    lifetimeMinor?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUpdateWithoutUserInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    fxRateToGBP?: NullableFloatFieldUpdateOperationsInput | number | null
    amountMinor?: NullableIntFieldUpdateOperationsInput | number | null
    chargedCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    affiliateId?: NullableStringFieldUpdateOperationsInput | string | null
    commissionId?: NullableStringFieldUpdateOperationsInput | string | null
    Commission?: CommissionUpdateManyWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateWithoutUserInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    fxRateToGBP?: NullableFloatFieldUpdateOperationsInput | number | null
    amountMinor?: NullableIntFieldUpdateOperationsInput | number | null
    chargedCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    affiliateId?: NullableStringFieldUpdateOperationsInput | string | null
    commissionId?: NullableStringFieldUpdateOperationsInput | string | null
    Commission?: CommissionUncheckedUpdateManyWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateManyWithoutUserInput = {
    amount?: FloatFieldUpdateOperationsInput | number
    method?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    reference?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    fxRateToGBP?: NullableFloatFieldUpdateOperationsInput | number | null
    amountMinor?: NullableIntFieldUpdateOperationsInput | number | null
    chargedCurrency?: NullableStringFieldUpdateOperationsInput | string | null
    affiliateId?: NullableStringFieldUpdateOperationsInput | string | null
    commissionId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TelegramLinkTokenUpdateWithoutUserInput = {
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TelegramLinkTokenUncheckedUpdateWithoutUserInput = {
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TelegramLinkTokenUncheckedUpdateManyWithoutUserInput = {
    token?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SubscriptionUpdateWithoutUserInput = {
    productName?: NullableStringFieldUpdateOperationsInput | string | null
    paystackSubscriptionCode?: NullableStringFieldUpdateOperationsInput | string | null
    paystackCustomerCode?: NullableStringFieldUpdateOperationsInput | string | null
    paystackPlanCode?: NullableStringFieldUpdateOperationsInput | string | null
    paystackEmailToken?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    currency?: StringFieldUpdateOperationsInput | string
    unitAmountMinor?: IntFieldUpdateOperationsInput | number
    interval?: StringFieldUpdateOperationsInput | string
    intervalCount?: IntFieldUpdateOperationsInput | number
    currentPeriodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentPeriodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelAtPeriodEnd?: BoolFieldUpdateOperationsInput | boolean
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    affiliateId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Commission?: CommissionUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateWithoutUserInput = {
    productName?: NullableStringFieldUpdateOperationsInput | string | null
    paystackSubscriptionCode?: NullableStringFieldUpdateOperationsInput | string | null
    paystackCustomerCode?: NullableStringFieldUpdateOperationsInput | string | null
    paystackPlanCode?: NullableStringFieldUpdateOperationsInput | string | null
    paystackEmailToken?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    currency?: StringFieldUpdateOperationsInput | string
    unitAmountMinor?: IntFieldUpdateOperationsInput | number
    interval?: StringFieldUpdateOperationsInput | string
    intervalCount?: IntFieldUpdateOperationsInput | number
    currentPeriodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentPeriodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelAtPeriodEnd?: BoolFieldUpdateOperationsInput | boolean
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    affiliateId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Commission?: CommissionUncheckedUpdateManyWithoutSubscriptionNestedInput
  }

  export type SubscriptionUncheckedUpdateManyWithoutUserInput = {
    productName?: NullableStringFieldUpdateOperationsInput | string | null
    paystackSubscriptionCode?: NullableStringFieldUpdateOperationsInput | string | null
    paystackCustomerCode?: NullableStringFieldUpdateOperationsInput | string | null
    paystackPlanCode?: NullableStringFieldUpdateOperationsInput | string | null
    paystackEmailToken?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumSubscriptionStatusFieldUpdateOperationsInput | $Enums.SubscriptionStatus
    currency?: StringFieldUpdateOperationsInput | string
    unitAmountMinor?: IntFieldUpdateOperationsInput | number
    interval?: StringFieldUpdateOperationsInput | string
    intervalCount?: IntFieldUpdateOperationsInput | number
    currentPeriodStart?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    currentPeriodEnd?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelAtPeriodEnd?: BoolFieldUpdateOperationsInput | boolean
    canceledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    affiliateId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketUpdateWithoutUserInput = {
    subject?: StringFieldUpdateOperationsInput | string
    category?: EnumTicketCategoryFieldUpdateOperationsInput | $Enums.TicketCategory
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: TicketMessageUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutUserInput = {
    subject?: StringFieldUpdateOperationsInput | string
    category?: EnumTicketCategoryFieldUpdateOperationsInput | $Enums.TicketCategory
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messages?: TicketMessageUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateManyWithoutUserInput = {
    subject?: StringFieldUpdateOperationsInput | string
    category?: EnumTicketCategoryFieldUpdateOperationsInput | $Enums.TicketCategory
    priority?: EnumTicketPriorityFieldUpdateOperationsInput | $Enums.TicketPriority
    status?: EnumTicketStatusFieldUpdateOperationsInput | $Enums.TicketStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommissionUpdateWithoutUserInput = {
    currency?: StringFieldUpdateOperationsInput | string
    amountMinor?: IntFieldUpdateOperationsInput | number
    status?: EnumCommissionStatusFieldUpdateOperationsInput | $Enums.CommissionStatus
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    holdUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    affiliate?: AffiliateUpdateOneRequiredWithoutCommissionsNestedInput
    payment?: PaymentUpdateOneWithoutCommissionNestedInput
    subscription?: SubscriptionUpdateOneWithoutCommissionNestedInput
  }

  export type CommissionUncheckedUpdateWithoutUserInput = {
    affiliateId?: StringFieldUpdateOperationsInput | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    amountMinor?: IntFieldUpdateOperationsInput | number
    status?: EnumCommissionStatusFieldUpdateOperationsInput | $Enums.CommissionStatus
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    holdUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommissionUncheckedUpdateManyWithoutUserInput = {
    affiliateId?: StringFieldUpdateOperationsInput | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    amountMinor?: IntFieldUpdateOperationsInput | number
    status?: EnumCommissionStatusFieldUpdateOperationsInput | $Enums.CommissionStatus
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    holdUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AffiliateUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    code?: StringFieldUpdateOperationsInput | string
    ratePct?: NullableFloatFieldUpdateOperationsInput | number | null
    flatMinor?: NullableIntFieldUpdateOperationsInput | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    clicks?: IntFieldUpdateOperationsInput | number
    conversions?: IntFieldUpdateOperationsInput | number
    lifetimeMinor?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referralClicks?: ReferralClickUpdateManyWithoutAffiliateNestedInput
    commissions?: CommissionUpdateManyWithoutAffiliateNestedInput
    payouts?: PayoutUpdateManyWithoutAffiliateNestedInput
  }

  export type AffiliateUncheckedUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    code?: StringFieldUpdateOperationsInput | string
    ratePct?: NullableFloatFieldUpdateOperationsInput | number | null
    flatMinor?: NullableIntFieldUpdateOperationsInput | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    clicks?: IntFieldUpdateOperationsInput | number
    conversions?: IntFieldUpdateOperationsInput | number
    lifetimeMinor?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    referralClicks?: ReferralClickUncheckedUpdateManyWithoutAffiliateNestedInput
    commissions?: CommissionUncheckedUpdateManyWithoutAffiliateNestedInput
    payouts?: PayoutUncheckedUpdateManyWithoutAffiliateNestedInput
  }

  export type AffiliateUncheckedUpdateManyWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    code?: StringFieldUpdateOperationsInput | string
    ratePct?: NullableFloatFieldUpdateOperationsInput | number | null
    flatMinor?: NullableIntFieldUpdateOperationsInput | number | null
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    clicks?: IntFieldUpdateOperationsInput | number
    conversions?: IntFieldUpdateOperationsInput | number
    lifetimeMinor?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommissionCreateManySubscriptionInput = {
    id?: string
    affiliateId: string
    userId: string
    paymentId?: string | null
    currency: string
    amountMinor: number
    status?: $Enums.CommissionStatus
    reason?: string | null
    holdUntil?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommissionUpdateWithoutSubscriptionInput = {
    currency?: StringFieldUpdateOperationsInput | string
    amountMinor?: IntFieldUpdateOperationsInput | number
    status?: EnumCommissionStatusFieldUpdateOperationsInput | $Enums.CommissionStatus
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    holdUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    affiliate?: AffiliateUpdateOneRequiredWithoutCommissionsNestedInput
    user?: UserUpdateOneRequiredWithoutCommissionNestedInput
    payment?: PaymentUpdateOneWithoutCommissionNestedInput
  }

  export type CommissionUncheckedUpdateWithoutSubscriptionInput = {
    affiliateId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    amountMinor?: IntFieldUpdateOperationsInput | number
    status?: EnumCommissionStatusFieldUpdateOperationsInput | $Enums.CommissionStatus
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    holdUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommissionUncheckedUpdateManyWithoutSubscriptionInput = {
    affiliateId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    amountMinor?: IntFieldUpdateOperationsInput | number
    status?: EnumCommissionStatusFieldUpdateOperationsInput | $Enums.CommissionStatus
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    holdUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommissionCreateManyPaymentInput = {
    id?: string
    affiliateId: string
    userId: string
    subscriptionId?: string | null
    currency: string
    amountMinor: number
    status?: $Enums.CommissionStatus
    reason?: string | null
    holdUntil?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CommissionUpdateWithoutPaymentInput = {
    currency?: StringFieldUpdateOperationsInput | string
    amountMinor?: IntFieldUpdateOperationsInput | number
    status?: EnumCommissionStatusFieldUpdateOperationsInput | $Enums.CommissionStatus
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    holdUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    affiliate?: AffiliateUpdateOneRequiredWithoutCommissionsNestedInput
    user?: UserUpdateOneRequiredWithoutCommissionNestedInput
    subscription?: SubscriptionUpdateOneWithoutCommissionNestedInput
  }

  export type CommissionUncheckedUpdateWithoutPaymentInput = {
    affiliateId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    amountMinor?: IntFieldUpdateOperationsInput | number
    status?: EnumCommissionStatusFieldUpdateOperationsInput | $Enums.CommissionStatus
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    holdUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommissionUncheckedUpdateManyWithoutPaymentInput = {
    affiliateId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    amountMinor?: IntFieldUpdateOperationsInput | number
    status?: EnumCommissionStatusFieldUpdateOperationsInput | $Enums.CommissionStatus
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    holdUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketMessageCreateManyTicketInput = {
    id?: string
    authorId: string
    body: string
    isStaff?: boolean
    createdAt?: Date | string
  }

  export type TicketMessageUpdateWithoutTicketInput = {
    authorId?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    isStaff?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketMessageUncheckedUpdateWithoutTicketInput = {
    authorId?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    isStaff?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketMessageUncheckedUpdateManyWithoutTicketInput = {
    authorId?: StringFieldUpdateOperationsInput | string
    body?: StringFieldUpdateOperationsInput | string
    isStaff?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferralClickCreateManyAffiliateInput = {
    id?: string
    ip?: string | null
    ua?: string | null
    referrer?: string | null
    createdAt?: Date | string
  }

  export type CommissionCreateManyAffiliateInput = {
    id?: string
    userId: string
    paymentId?: string | null
    subscriptionId?: string | null
    currency: string
    amountMinor: number
    status?: $Enums.CommissionStatus
    reason?: string | null
    holdUntil?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PayoutCreateManyAffiliateInput = {
    id?: string
    status?: $Enums.PayoutStatus
    currency: string
    amountMinor: number
    note?: string | null
    commissionIds?: PayoutCreatecommissionIdsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReferralClickUpdateWithoutAffiliateInput = {
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    ua?: NullableStringFieldUpdateOperationsInput | string | null
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferralClickUncheckedUpdateWithoutAffiliateInput = {
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    ua?: NullableStringFieldUpdateOperationsInput | string | null
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferralClickUncheckedUpdateManyWithoutAffiliateInput = {
    ip?: NullableStringFieldUpdateOperationsInput | string | null
    ua?: NullableStringFieldUpdateOperationsInput | string | null
    referrer?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommissionUpdateWithoutAffiliateInput = {
    currency?: StringFieldUpdateOperationsInput | string
    amountMinor?: IntFieldUpdateOperationsInput | number
    status?: EnumCommissionStatusFieldUpdateOperationsInput | $Enums.CommissionStatus
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    holdUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCommissionNestedInput
    payment?: PaymentUpdateOneWithoutCommissionNestedInput
    subscription?: SubscriptionUpdateOneWithoutCommissionNestedInput
  }

  export type CommissionUncheckedUpdateWithoutAffiliateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    amountMinor?: IntFieldUpdateOperationsInput | number
    status?: EnumCommissionStatusFieldUpdateOperationsInput | $Enums.CommissionStatus
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    holdUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CommissionUncheckedUpdateManyWithoutAffiliateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    subscriptionId?: NullableStringFieldUpdateOperationsInput | string | null
    currency?: StringFieldUpdateOperationsInput | string
    amountMinor?: IntFieldUpdateOperationsInput | number
    status?: EnumCommissionStatusFieldUpdateOperationsInput | $Enums.CommissionStatus
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    holdUntil?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayoutUpdateWithoutAffiliateInput = {
    status?: EnumPayoutStatusFieldUpdateOperationsInput | $Enums.PayoutStatus
    currency?: StringFieldUpdateOperationsInput | string
    amountMinor?: IntFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    commissionIds?: PayoutUpdatecommissionIdsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayoutUncheckedUpdateWithoutAffiliateInput = {
    status?: EnumPayoutStatusFieldUpdateOperationsInput | $Enums.PayoutStatus
    currency?: StringFieldUpdateOperationsInput | string
    amountMinor?: IntFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    commissionIds?: PayoutUpdatecommissionIdsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PayoutUncheckedUpdateManyWithoutAffiliateInput = {
    status?: EnumPayoutStatusFieldUpdateOperationsInput | $Enums.PayoutStatus
    currency?: StringFieldUpdateOperationsInput | string
    amountMinor?: IntFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    commissionIds?: PayoutUpdatecommissionIdsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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