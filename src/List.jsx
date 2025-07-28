function List(){

    const fruits=["apple","orange","banana","pineaple","strawberry"]
    fruits.sort();
    const listfruits=fruits.map(fruit=><li>{fruit}</li>)
    return(<>
        <h2>fruits list:</h2>
        <ol>{listfruits}</ol>
        </>
    );
}

export default List