class Observer {
  constructor(root, ...collections) {
    this.targets = [];
    if(!collections.length) throw new Error('the "collections" arg has length = 0...')    
    collections.forEach(coll => this.targets.push(...coll))
    this.options = {
      root,
      rootMargin: "0px",
      threshold: 0.5,
    };
    this.observer = new IntersectionObserver(this.callback, this.options);
    this.init(this.targets, this.observer);    
  }

  callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.toggle("active");
        observer.unobserve(entry.target);
      }
    });
  };

  init(targets, observer) {    
    targets.forEach((entity) => observer.observe(entity));
  }
}

export { Observer };
