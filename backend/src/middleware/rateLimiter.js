import ratelimit from "../config/upstash.js";

const rateLimiter = async (req,res,next)=>
{
  try {
     const {success} = await ratelimit.limit("my-limit-key");

     if(!success)
     {
        res.status(429).json({ message:"Too many request, please try again later"});
     }
     next();
  } catch (error) {
    console.log("rate limit error",error);
    next(error);

  }
}

export default rateLimiter
// in place of "my-limit-key" we enter userid/ip address, so that we can rate limit specifically to the user 
// like if A user rate limit it should not affect B user, but as we are not adding auth we cant implemnet it rn
// so we just wrote " my-limit-key"