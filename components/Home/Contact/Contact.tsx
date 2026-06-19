"use client"

import { useState } from "react"
import { toast } from "sonner"
import SectionHeading from '@/components/Helper/SectionHeading'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { contactInfo, socialLinks } from '@/data'
import { Send } from 'lucide-react'

type FormData = {
  name: string
  email: string
  subject: string
  message: string
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "", email: "", subject: "", message: "",
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      if (!res.ok) throw new Error("Failed")
      toast.success("Message sent! I'll get back to you soon.", { duration: 3000 })
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch {
      toast.error("Something went wrong. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div id="contact" className='py-16 bg-gray-100 dark:bg-gray-950'>
      <SectionHeading
        title_1='Get In'
        title_2='Touch'
        description="Have a project in mind or just want to say hi? I'd love to hear from you."
      />
      <div className='px-6 max-w-5xl mx-auto'>
        <div className="grid lg:grid-cols-2 gap-12">
          {/*contact info*/}
          <div data-aos="fade-right"
            data-aos-delay="0"
            data-aos-anchor-placement="top-center">
            <div className='space-y-8'>
              <div>
                <h3 className='text-2xl font-semibold mb-4'>Let&apos;s talk</h3>
                <p className='text-muted-foreground'>
                  I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
              </div>
              <div className='space-y-4'>
                {
                  contactInfo.map((item) => {
                    return <a href={item.href} key={item.label} target='_blank'
                      className='flex items-center gap-4 p-4 bg-white dark:bg-gray-800 shadow-md rounded-xl
                  hover:scale-105 transition-all duration-300 group'>
                      <div className='w-12 h-12 rounded-lg bg-blue-600/10 flex items-center justify-center
                  group-hover:bg-blue-600/20 transition-colors'>
                        <item.icon className='w-5 h-5 text-blue-500 dark:text-white' />
                      </div>
                      <div>
                        <p className='text-sm text-muted-foreground'>
                          {item.label}
                        </p>
                        <p className='font-medium'>
                          {item.value}
                        </p>
                      </div>
                    </a>
                  })
                }
              </div>
              {/*social media icons*/}
              <div>
                <h4 className='text-lg font-medium'>
                  Follow me
                </h4>
                <div className='flex gap-3 mt-3'>
                  {socialLinks.map((link) => {
                    return <a href={link.href} key={link.label} target='_blank' className='w-12
                    h-12 rounded-xl bg-white dark:bg-gray-800 flex items-center justify-center
                    text-muted-foreground hover:text-blue-500 transition-colors'>
                      <link.icon className="w-5 h-5" />
                    </a>
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* contact form*/}
          <div data-aos="fade-left"
            data-aos-delay="150"
            data-aos-anchor-placement="top-center">
            <form onSubmit={handleSubmit} className='bg-white dark:bg-gray-800 rounded-2xl p-8 space-y-6'>
              <div className='grid sm:grid-cols-2 gap-4'>
                <div className='space-y-2'>
                  <label htmlFor="name" className='text-sm font-medium'>Name</label>
                  <Input id="name" name="name" placeholder='John Doe' required
                    value={formData.name} onChange={handleChange} className='bg-gray-100' />
                </div>
                <div className='space-y-2'>
                  <label htmlFor="email" className='text-sm font-medium'>Email</label>
                  <Input id="email" name="email" type="email" placeholder='johndoe@gmail.com' required
                    value={formData.email} onChange={handleChange} className='bg-gray-100' />
                </div>
              </div>
              <div className='space-y-2'>
                <label htmlFor="subject" className='text-sm font-medium'>Subject</label>
                <Input id="subject" name="subject" placeholder='Project Inquiry' required
                  value={formData.subject} onChange={handleChange} className='bg-gray-100' />
              </div>
              <div className='space-y-2'>
                <label htmlFor="message" className='text-sm font-medium'>Message</label>
                <Textarea id='message' name='message' placeholder='Tell me about your project'
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className='bg-gray-100 h-40'
                />
              </div>
              <Button type="submit" size={"lg"} className="w-full cursor-pointer" disabled={isLoading}>
                <Send className="w-4 h-4 mr-2" />
                {isLoading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
