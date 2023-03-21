import Link from 'next/link';
 function TodoList({tasks}) {

    return (
        <div>
            <h1>Todo page</h1>
            <ul>
            {
            tasks.map(val=>{
                return (
                    <Link href={`/todo/${val.id}`}>
                <li key={val.id}>{val.title}</li>
                </Link>
                )
            })
            }
            </ul>
        </div>
    );
 }

 export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    const res = await fetch('https://jsonplaceholder.typicode.com/todos')
    const tasks = await res.json()
  
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
      props: {
        tasks,
      },
    }
  }
 export default TodoList;