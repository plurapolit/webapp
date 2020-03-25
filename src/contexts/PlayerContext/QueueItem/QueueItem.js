const QueueItem = (function itemObj() {
  let counter = 0;

  const getId = () => {
    const id = counter;
    counter += 1;
    return id;
  };

  const getPrevId = (id) => {
    if (id > 0) return id - 1;
    return false;
  };

  const createQueueItem = (content) => {
    const id = getId();
    const prev = getPrevId(id);

    function setNext(itemId) {
      this.next = itemId;
    }

    function setPrev(itemId) {
      this.prev = itemId;
    }

    return {
      id,
      content,
      played: false,
      prev,
      next: false,
      setPrev,
      setNext,
    };
  };

  return {
    create: (content) => createQueueItem(content),
  };
});

export default QueueItem();
