interface options {
  extra: string | undefined;
}

function scopedClassMaker(prefix: string) {
  return function x(name?: string, options?: options) {
    const result = [prefix, name].filter(Boolean).join('-')
    if (options && options.extra) {
      return [result, options && options.extra].filter(Boolean).join(' ');
    } else {
      return result;
    }
  }
}

export {scopedClassMaker};