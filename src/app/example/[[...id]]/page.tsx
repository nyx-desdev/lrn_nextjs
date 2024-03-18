export default function Page({params}) {
    console.log(params)
    return <h1>{params?.id}</h1>
}