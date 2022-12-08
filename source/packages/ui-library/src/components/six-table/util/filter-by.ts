import { Item, FilterModel } from '../types';
import { FilterMode } from '../../six-table-header-cell/types';
import { Invalid } from './is';

type Filter = (a: string, b: string) => boolean;

const modes: Record<FilterMode, Filter> = {
  [FilterMode.Includes]: (a, b) => a.includes(b),
  [FilterMode.NotIncludes]: (a, b) => !a.includes(b),
  [FilterMode.Equals]: (a, b) => a === b,
  [FilterMode.NotEquals]: (a, b) => a !== b,
};

export const filterBy =
  <T extends Item>(filterModel: FilterModel<T> = {}) =>
  (item: T): boolean => {
    const keys = Object.keys(filterModel);

    if (keys.length === 0) {
      return true;
    }

    for (const key of keys) {
      const filter = filterModel[key];

      if (!filter) {
        return true;
      }

      for (const [mode, term] of Object.entries(filter)) {
        if (Invalid.Term(term)) {
          continue;
        }

        const value = String(item[key] ?? '');

        if (Invalid.Term(value)) {
          continue;
        }

        if (!modes[mode](value, term)) {
          return false;
        }
      }
    }

    return true;
  };
