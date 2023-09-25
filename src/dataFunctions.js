// estas funciones son de ejemplo

export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return [];
};

<label for="countries"
           >Orden alfabetico:
            <select
              name="countries"
              data-testid="select-sort"
              onchange="handleChange()"
            >
              <option value="asc">A - Z</option>
              <option value="desc">Z - A</option>
            </select></label
          >