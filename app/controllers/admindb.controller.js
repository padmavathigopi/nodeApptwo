const db = require("../models");
const Admindb = db.admindbs;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if(!req.body.status){
        res.status(400).send({
            message:"status should not be empty !"
        });
        return;
    }
    const admindb={
        name:req.body.name,
        course:req.body.course,
        status:req.body.status,
        marketer_name:req.body.marketer_name,
        service_type:req.body.service_type,
        email:req.body.email,
        contact_no:req.body.contact_no,
        qualification:req.body.qualification,
        working_sts:req.body.working_sts,
        source:req.body.source,
        address:req.body.address,
        required_services:req.body.required_services,
        joining_date:req.body.joining_date,
        color_val:req.body.color_val,
        followup_date:req.body.followup_date
    };
    Admindb.create(admindb)
    .then(data=>{
        res.send(data);
    }).catch(err=>{
        res.status(500).send({message:"some error occurs!" + err.message})
    });
  
};

exports.findAll = (req, res) => {
    const status=req.query.status;
    var condition=status? {
        status:{
    [Op.like]:  `%${status}%`
}
    } :null;
    Admindb.findAll({
    where:condition
}).then(data=>{
    res.send(data);
}).catch(err=>{
    res.status(500).send({
        message:err.message||"error occurs while find all"
    });
});
  
};


exports.update = (req, res) => {
    const id=req.params.id;
    Admindb.update(req.body,{
        where:{
            id:id,
        }
    }).then(num=>{
        if(num==1){
            res.send({
                message:"table was updated " 
             });
        }else{
            res.send({
                message:`this table cannot updated with id=${id}`
            });
        }
    }).catch(err=>{
        res.status(500).send({
            message:"error occur with this id ="+id
        });
    });
};

exports.delete = (req, res) => {
    const id=req.params.id;
    Admindb.destroy({
    where :{
        id:id
    }
}).then(num=>{
    if(num==1){
        res.send({
            message:"row deleted successfully"
        });
    }else{
        res.send({
            message:"error occurs with id"+id
        });
    }
}).catch(err=>{
    res.status(500).send({
        message:"error occur with this id ="+id
    });
});
  
};

exports.readSingle=(req,res)=>{
    const id=req.params.id;
    Admindb.findByPk(id).then(data=>{
        if(data){
            res.send(data);
        }else{
    res.status(404).send({
        message:"cannot find value"+id
    });
        }
    }).catch(err=>{
        res.status(500).send({
            message:"error occur with this id ="+id
        });
    });
    };
    
    
exports.deleteAll = (req, res) => {
    Admindb.destroy({
        where:{},
        truncate:false
    }).then(nums=>{
        res.send({
            message:`${nums} these all deleted successfully`
        });
    }).catch(err=>{
        res.status(500).send({
            message:err.message||"error occurs while delete all"
        });
    });
  
};

exports.findAllPublished = (req, res) => {
  
};