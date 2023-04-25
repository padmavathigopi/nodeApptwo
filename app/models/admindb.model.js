module.exports = (sequelize, Sequelize) => {
    const Admindb = sequelize.define("admindb", {
      marketer_name:{
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      course: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      service_type:{
        type: Sequelize.STRING
      },
      email:{
        type: Sequelize.STRING
      },
      contact_no:{
        type: Sequelize.INTEGER
      },
      qualification:{
        type: Sequelize.STRING
      },
      working_sts:{
        type: Sequelize.STRING
      },
      source:{
        type: Sequelize.STRING
      },
      address:{
        type: Sequelize.STRING
      },
      required_services:{
        type: Sequelize.STRING
      },
      joining_date:{
        type: Sequelize.DATE
      },
      color_val:{
        type: Sequelize.STRING
      },
      followup_date:{
        type: Sequelize.STRING
      }
      
    });
  
    return Admindb;
  };