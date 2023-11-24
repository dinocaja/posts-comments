/* function that returns new object props that does not contain properties listed in propKeys */

function removeProps<T extends object>(props: T, propKeys: string[]) {
  const filteredProps: T = Object.keys(props).reduce((acc, key) => {
    if (!propKeys.includes(key)) {
      const propKey = key as keyof T;
      acc[propKey] = props[propKey];
    }
    return acc;
  }, {} as T);

  return filteredProps;
}

export default removeProps;
