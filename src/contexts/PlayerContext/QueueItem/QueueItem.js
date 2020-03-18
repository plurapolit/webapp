import hash from "object-hash";

const QueueItem = (function itemObj() {
  const getId = (content) => hash(content);

  const createQueueItem = (content) => {
    const id = getId(content);

    function setNext(item) {
      this.next = item.id;
      // eslint-disable-next-line no-param-reassign
      item.prev = this.id;
    }

    function setPrev(item) {
      this.prev = item.id;
      // eslint-disable-next-line no-param-reassign
      item.next = this.id;
    }

    function hasNext() {
      return !!this.next;
    }

    function hasPrev() {
      return !!this.prev;
    }

    function isFirstInQueue() {
      return this.firstInQueue;
    }

    return {
      id,
      content,
      played: false,
      next: false,
      setPrev,
      setNext,
      hasNext,
      hasPrev,
      isFirstInQueue,
    };
  };

  return {
    create: (content) => createQueueItem(content),
  };
});

export default QueueItem();
