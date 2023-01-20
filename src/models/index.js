// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Styles, Sizes, AIprompt } = initSchema(schema);

export {
  Styles,
  Sizes,
  AIprompt
};