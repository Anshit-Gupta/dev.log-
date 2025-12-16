// creating instance 

import {Ratelimit} from "@upstash/ratelimit"
import {Redis} from "@upstash/redis"

import dotenv from "dotenv";
dotenv.config();

// cerate a ratelimiter that only allows 100 req in 60 seconds
const ratelimit= new Ratelimit({
    redis:Redis.fromEnv(),
    limiter:Ratelimit.slidingWindow(100,"60 s")
});

export default ratelimit