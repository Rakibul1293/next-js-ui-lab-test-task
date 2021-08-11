import { useRouter } from 'next/router';

export const getStaticPaths = async() => {
	const res = await fetch('https://next-js-ui-lab-test-task-api.herokuapp.com/api/menuItems'); 
	const data = await res.json();
	
	const paths = data.data.map((items) => {
		return {
			params: { pages: items._id.toString() }
		}
	})
	console.log(paths);

	return {
		paths,
		fallback: false
	}
}

export const getStaticProps = async(context) => {
	const pages = context.params.pages;
	console.log(pages);
	const res = await fetch('https://next-js-ui-lab-test-task-api.herokuapp.com/api/menuItems/' + pages);
	const data = await res.json();
	console.log(data);
	
	return {
		props: { data }
	}
}

export default function Page(props) {
  const router = useRouter();
  console.log(props);
  
  return (
    <>
		<h1 style={{padding: "30px", textAlign: "center"}}>Fetch Id From Database: {props.data.data._id}</h1>
    </>
  )
}
