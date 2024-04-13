
exports.getPersonalPortfolio = (req,res,next)=>{
    res.status(200).render('base',{
        title: 'Personal Portfolio'
    })
}