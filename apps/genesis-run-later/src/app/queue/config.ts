export const queueConfig = {
  host: process.env.RABBIT_HOST || 'amqp://localhost:5672',
  queue: process.env.RABBIT_QUEUE || 'run_later',
} as const;
