<template>
    <div class="waper">
        <div class="login">
        <div class="block">
            <div class="img">
                <img src="../assets/logo.png" alt="">
            </div>
        </div>
        <el-form  :model="formLabelAlign" :rules="rules" ref="formLabelAlign">
            <el-form-item prop="name">
                <el-input v-model="formLabelAlign.name" prefix-icon='el-icon-user-solid'></el-input>
            </el-form-item>
            <el-form-item prop="pwd">
                <el-input v-model="formLabelAlign.pwd" prefix-icon='el-icon-lock' show-password></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('formLabelAlign')">登录</el-button>
                <el-button class="clear" @click="resetForm('formLabelAlign')">重置</el-button>
            </el-form-item>
              
            </el-form> 
        </div>
    </div>
</template>

<script>
export default {
    props: {

    },
    data() {
        return {
        formLabelAlign: {
          name: '',
          pwd: '',
        },
        rules: {
          name: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          pwd: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 5, max: 11, message: '长度在 5 到 11 个字符', trigger: 'blur' }
          ],
        },
    
        };
    },
    methods: {
        submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$message({
                message: '登陆成功',
                type: 'success',
                duration:1000,
                onClose:()=>{
              
                //   this.axios.post('/api/login', {
                //       username:this.formLabelAlign.name,
                //       password: this.formLabelAlign.pwd
                //     })
                //     .then(response=> {
                //       console.log(response)
                //       sessionStorage.setItem('token',response.data.token)
                //       this.$router.push('/about')
                //     })
                //     .catch(function (error) {
                //       console.log(error);
                //     });
                          
                }
              });
          } else {
                //   console.log('error submit!!');
                //   return false;
                }
        });
      },
    //   清空
    resetForm(formLabelAlign){
        this.$refs[formLabelAlign].resetFields();
    }
    },
    components: {

    },
};
</script>

<style  lang="less">
    .waper{
        height: 100%;
        background-color: #2b4b6b;
        display: flex;
        justify-content: center;
        align-items: center;
        .login{
            display: flex;
            justify-content: center;
            align-items: flex-end;
            background-color: #fff;
            width: 450px;
            height: 300px;
            padding: 20px;
            position: relative;
            border-radius: 5px;
            .block{
                position: absolute;
                left: 50%;
                top: -70px;
                width: 150px;
                height: 150px;
                transform: translate(-50%);
                background-color: #fff;
                border-radius: 50%;
                box-sizing: border-box;
                padding: 10px;
                overflow: hidden;
                box-shadow: 1px 5px 10px #ccc ;
                .img{
                    width: 100%;
                    height: 100%;
                    overflow: hidden;
                    background-color: #eeeeee;
                    border-radius: 50%;
                    img{
                        display: block;
                        width: 100%;
                        height: 100%;
    
                    }
                }
            }
            .el-form{
                width: 100%;

            }
            .el-form-item__content{
                display: flex;
                justify-content: flex-end;
            }
            .clear{
                color: white;
                background-color: #909399;
            }
        }
        
    }
</style>
