import { Resend } from 'resend'

export const resend = new Resend(process.env.RESEND_API_KEY)

export const FROM = process.env.EMAIL_FROM || 'Diego Sarmiento <no-reply@diegosarmiento.com>'
export const CONTACT_TO = process.env.EMAIL_TO_CONTACT || 'hola@diegosarmiento.com'
