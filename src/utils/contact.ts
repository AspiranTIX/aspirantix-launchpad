export async function submitContactForm(formData: {
  name: string;
  email: string;
  message: string;
}) {
  // In a real implementation, this would send to your backend API
  // For now, we'll simulate the API call
  
  return new Promise<{ success: boolean }>((resolve, reject) => {
    setTimeout(() => {
      console.log('Contact form submission:', formData);
      
      // Simulate success
      if (formData.name && formData.email && formData.message) {
        resolve({ success: true });
      } else {
        reject(new Error('Invalid form data'));
      }
    }, 1000);
  });
}