import { useRouter } from 'next/router';

/*
export const getStaticPaths = async() => {
	const res = await fetch('https://ui-lab-test-task.herokuapp.com/api/menuItems'); 
	const data = await res.json();
	
	const paths = data.data.map((items) => {
		return {
			params: { pages: items._id.toString() }
		}
	})

	return {
		paths,
		fallback: false
	}
}

export const getStaticProps = async(context) => {
	const pages = context.params.pages;
	const res = await fetch('https://ui-lab-test-task.herokuapp.com/api/menuItems' + pages); 
	const data = await res.json();
	console.log(pages);
	
	return {
		props: { data }
	}
}
*/

export default function Pages(props) {
  const router = useRouter();
  
  return (
    <>
		<h1 style={{padding: "30px", textAlign: "center"}}>{router.query.pages}{props.path}</h1>
    </>
  )
}
