const formatDate =(date)=>{
    const d = new Date();
    let month = d.getMonth()+1; //as month is from 0 to 11
    let year = d.getFullYear();
    let day = d.getDate();

    return [day , month , year].join('-');

}
export default formatDate;