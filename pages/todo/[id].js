import { useRouter } from 'next/router';

export default function Todo() {
    const router = useRouter();
    const { id } = router.query;
  
    return (
      <div>
<h2>This is page for item {id}</h2>
        </div>
    )
}