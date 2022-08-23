import { useField, useForm } from 'vee-validate'
import * as yup from 'yup'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import { computed, ref } from 'vue'

export function useLoginForm () {
  const store = useStore()
  const router = useRouter()
  const { handleSubmit, isSubmitting } = useForm()
  const authErrorMessage = computed(() => store.state.message)
  const showPassword = ref(false)
  const { value: username, errorMessage: uError, handleBlur: uBlur } = useField('email',
    yup
      .string()
      .trim()
      .email('Enter correct email address')
      .required('This field is required')
  )
  const { value: password, errorMessage: pError, handleBlur: pBlur } = useField('password',
    yup
      .string()
      .trim()
      .required('This field is required')
  )
  const onSubmit = handleSubmit(async values => {
    try {
      await store.dispatch('auth/login', values)
      router.push('/profile')
    } catch (e) {}
  })

  const toggleShowPassword = () => {
    showPassword.value = !showPassword.value
  }
  return {
    username,
    password,
    uError,
    uBlur,
    pError,
    pBlur,
    onSubmit,
    isSubmitting,
    authErrorMessage,
    showPassword,
    toggleShowPassword
  }
}
