import Bee from 'bee-queue';
import CacellationMail from '../app/jobs/CancellationMail';
import redisConfig from '../config/redis';

const jobs = [CacellationMail];

class Queue {
  constructor() {
    this.queues = {};

    this.init();
  }

  init() {
    jobs.map(({ key, handle }) => {
      this.queues[key] = {
        bee: new Bee(key, {
          redis: redisConfig,
        }),
        handle,
      };
    });
  }
}

export default new Queue();
