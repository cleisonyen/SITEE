<?php

namespace App\Controllers;

use Bolt\Controller\Frontend\FrontendController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\Validator\Validator\ValidatorInterface;

class ContactController extends FrontendController
{
    /**
     * @Route("/contact", name="contact", methods={"GET", "POST"})
     */
    public function contact(Request $request, ValidatorInterface $validator): Response
    {
        $heroSection = $this->getContent('hero_sections', ['page' => 'contact', 'status' => 'published'], 1);
        $contactPage = $this->getContent('pages', ['slug' => 'contact', 'status' => 'published'], 1);
        
        $errors = [];
        $success = false;

        if ($request->isMethod('POST')) {
            $data = [
                'name' => $request->request->get('name'),
                'email' => $request->request->get('email'),
                'phone' => $request->request->get('phone'),
                'service' => $request->request->get('service'),
                'message' => $request->request->get('message')
            ];

            // Validation constraints
            $constraints = new Assert\Collection([
                'name' => [new Assert\NotBlank(), new Assert\Length(['min' => 2, 'max' => 100])],
                'email' => [new Assert\NotBlank(), new Assert\Email()],
                'phone' => [new Assert\Length(['max' => 20])],
                'service' => [],
                'message' => [new Assert\NotBlank(), new Assert\Length(['min' => 10, 'max' => 1000])]
            ]);

            $violations = $validator->validate($data, $constraints);

            if (count($violations) === 0) {
                // Save to database
                try {
                    $contactMessage = $this->app['storage']->getEmptyContent('contact_messages');
                    $contactMessage->setValues([
                        'name' => $data['name'],
                        'email' => $data['email'],
                        'phone' => $data['phone'],
                        'service' => $data['service'],
                        'message' => $data['message'],
                        'status' => 'new',
                        'ip_address' => $request->getClientIp()
                    ]);
                    
                    $this->app['storage']->saveContent($contactMessage);
                    
                    // Send email notification (implement as needed)
                    $this->sendContactNotification($data);
                    
                    $success = true;
                    
                    if ($request->isXmlHttpRequest()) {
                        return new JsonResponse(['success' => true, 'message' => 'Message sent successfully!']);
                    }
                } catch (\Exception $e) {
                    $errors[] = 'An error occurred while sending your message. Please try again.';
                    
                    if ($request->isXmlHttpRequest()) {
                        return new JsonResponse(['success' => false, 'errors' => $errors]);
                    }
                }
            } else {
                foreach ($violations as $violation) {
                    $errors[] = $violation->getMessage();
                }
                
                if ($request->isXmlHttpRequest()) {
                    return new JsonResponse(['success' => false, 'errors' => $errors]);
                }
            }
        }

        return $this->render('contact.twig', [
            'hero' => $heroSection,
            'page' => $contactPage,
            'errors' => $errors,
            'success' => $success,
            'meta_title' => 'Contact Us - EBL Tours',
            'meta_description' => 'Get in touch with EBL Tours for your Foz do Iguaçu adventure. Professional service and personalized attention.',
            'meta_keywords' => 'Contact, EBL Tours, Foz do Iguaçu, Travel inquiry'
        ]);
    }

    private function sendContactNotification(array $data): void
    {
        // Implement email sending logic here
        // You can use Symfony Mailer or any other email service
        
        $subject = 'New Contact Form Submission - EBL Tours';
        $body = sprintf(
            "New contact form submission:\n\nName: %s\nEmail: %s\nPhone: %s\nService: %s\nMessage: %s",
            $data['name'],
            $data['email'],
            $data['phone'] ?: 'Not provided',
            $data['service'] ?: 'Not specified',
            $data['message']
        );
        
        // Send email to admin
        // mail('admin@ebl-tours.com', $subject, $body);
    }
}