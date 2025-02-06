<template>
  <div class="signup-container">
    <a-form
      :model="formState"
      name="signup"
      autocomplete="off"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
    >
      <p class="title">회원가입</p>
      <p class="subTitle">회원이 되어 다양한 혜택을 경험해 보세요!</p>
      <a-form-item
        name="username"
        :rules="[{ required: true, message: '아이디를 입력해주세요' }]"
      >
        <FormInput
          title="아이디"
          placeholder="아이디 입력 (6-20자)"
          v-model="formState.username"
        ></FormInput>
      </a-form-item>

      <a-form-item
        name="password"
        :rules="[
          { required: true, message: '비밀번호를 입력해주세요' },
          { max: 20, min: 8, message: '8~20자 이내의 비밀번호를 입력해주세요' },
        ]"
      >
        <FormInput
          title="비밀번호"
          isPassword
          placeholder="비밀번호 입력 (문자, 숫자, 특수문자 포함 8~20자)"
          v-model="formState.password"
        ></FormInput>
      </a-form-item>

      <a-form-item
        name="passwordConfirm"
        :rules="[
          {
            validator: validatePasswordConfirm,
            message: '비밀번호가 일치하지 않습니다',
          },
        ]"
      >
        <FormInput
          title="비밀번호 확인"
          isPassword
          placeholder="비밀번호 재입력"
          v-model="formState.passwordConfirm"
        ></FormInput>
      </a-form-item>

      <a-form-item name="name">
        <FormInput
          title="이름"
          placeholder="이름을 입력해주세요"
          v-model="formState.name"
        ></FormInput>
      </a-form-item>

      <a-form-item name="phoneNumber">
        <FormInput
          title="전화번호"
          placeholder="휴대폰 번호 입력('-' 제외 11자리 입력)"
          v-model="formState.phoneNumber"
        ></FormInput>
      </a-form-item>

      <a-form-item name="email">
        <FormInput
          title="이메일 주소"
          placeholder="이메일 주소"
          v-model="formState.email"
        ></FormInput>
      </a-form-item>

      <a-form-item name="birthday">
        <P class="input-title">생년월일</P>
        <a-date-picker
          placeholder="날짜를 선택해주세요"
          size="large"
          v-model:value="formState.birthday"
        />
      </a-form-item>

      <a-form-item class="confirm-buttons">
        <a-button style="margin-right: 10px" type="primary" html-type="submit"
          >가입하기</a-button
        >
        <a-button>가입취소</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import FormInput from "../components/signup/FormInput.vue";

interface FormState {
  username: string;
  password: string;
  passwordConfirm: string;
  name: string;
  phoneNumber: string;
  email: string;
  birthday: string;
}

export default defineComponent({
  components: {
    FormInput,
  },
  methods: {
    validatePasswordConfirm(_: string, value: string) {
      return new Promise((resolve, reject) => {
        if (value === this.formState.password) {
          resolve(""); // 검증 통과
        } else {
          reject("비밀번호가 일치하지 않습니다"); // 검증 실패
        }
      });
    },
  },
  setup() {
    const formState = ref<FormState>({
      username: "",
      password: "",
      passwordConfirm: "",
      name: "",
      phoneNumber: "",
      email: "",
      birthday: "",
    });
    const onFinish = (values: FormState) => {
      console.log("Success:", values);
    };

    const onFinishFailed = (errorInfo: FormState) => {
      console.log("Failed:", errorInfo);
    };

    return {
      formState,
      onFinish,
      onFinishFailed,
    };
  },
});
</script>

<style scoped>
.signup-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  padding: 20px;
  background-color: #f9f9f9;
}

/* Form 스타일 */
.ant-form {
  width: 100%;
  max-width: 550px;
  border: 1px solid #e0e0e0;
  border-radius: 15px;
  padding: 40px 50px;
  background-color: #fff;
}

.signup-container .title {
  font-size: 25px;
  font-weight: 700;
  margin-bottom: 5px;
}
.signup-container .subTitle {
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 50px;
}

.signup-container .confirm-buttons {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
}
.signup-container .confirm-buttons button {
  width: 125px;
}

.signup-container .input-title {
  font-size: 14px;
  font-weight: 600;
  margin: 0 0 3px 0;
}

.signup-container .ant-form-item {
  margin-bottom: 15px;
  position: relative;
}

.signup-container .ant-picker {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
