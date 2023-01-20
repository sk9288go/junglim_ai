import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";





type EagerStyles = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Styles, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly aipromptID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyStyles = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Styles, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly aipromptID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Styles = LazyLoading extends LazyLoadingDisabled ? EagerStyles : LazyStyles

export declare const Styles: (new (init: ModelInit<Styles>) => Styles) & {
  copyOf(source: Styles, mutator: (draft: MutableModel<Styles>) => MutableModel<Styles> | void): Styles;
}

type EagerSizes = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Sizes, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly small?: string | null;
  readonly medium?: string | null;
  readonly large?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySizes = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Sizes, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly small?: string | null;
  readonly medium?: string | null;
  readonly large?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Sizes = LazyLoading extends LazyLoadingDisabled ? EagerSizes : LazySizes

export declare const Sizes: (new (init: ModelInit<Sizes>) => Sizes) & {
  copyOf(source: Sizes, mutator: (draft: MutableModel<Sizes>) => MutableModel<Sizes> | void): Sizes;
}

type EagerAIprompt = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AIprompt, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Obj?: string | null;
  readonly Sizes?: Sizes | null;
  readonly images?: string | null;
  readonly Styles?: (Styles | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly aIpromptSizesId?: string | null;
}

type LazyAIprompt = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AIprompt, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Obj?: string | null;
  readonly Sizes: AsyncItem<Sizes | undefined>;
  readonly images?: string | null;
  readonly Styles: AsyncCollection<Styles>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly aIpromptSizesId?: string | null;
}

export declare type AIprompt = LazyLoading extends LazyLoadingDisabled ? EagerAIprompt : LazyAIprompt

export declare const AIprompt: (new (init: ModelInit<AIprompt>) => AIprompt) & {
  copyOf(source: AIprompt, mutator: (draft: MutableModel<AIprompt>) => MutableModel<AIprompt> | void): AIprompt;
}