import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "muauvp54",
  dataset: "production",
  apiVersion: "2021-03-25",
  token:
    "skUdYCaKo0xYu5cvL67A7jeIHQft7IrcCYGyLclxc6AnozwqLbYKQSaPN8TdrkQbatbSpM5ZMnVMtZnp0q2uxIImncKBJdaCwyVL6AjGe0fwrdRIovF9b4OT2PqaieGWfZd4xKGQjQCeFqTJVhuZDc2dVi6MJkY7CJtVxElpLv50ZY3fdQet",
  useCdn: false,
});
