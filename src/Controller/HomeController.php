<?php

namespace App\Controller;

use App\Service\ProjectService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;
use Symfony\Component\Routing\Annotation\Route;
// use Symfony\Component\Validator\Constraints\Email as ConstraintsEmail;
use Symfony\Component\Validator\Validator\ValidatorInterface;

class HomeController extends AbstractController
{
    #[Route('/', name: 'app_home')]
    public function index(): Response
    {
        return $this->render('home/index.html.twig');
    }

    #[Route('/about', name: 'app_about')]
    public function about(): Response
    {
        return $this->render('home/about.html.twig');
    }

    #[Route('/projects', name: 'app_project')]
    public function project(ProjectService $projectService): Response
    {
        $projects = $projectService->findAllWithTechnos();
        return $this->render('home/project.html.twig', [
            'projects' => $projects,
        ]);
    }

    #[Route('/contact', name: 'app_contact')]
    public function contact(): Response
    {
        return $this->render('home/contact.html.twig');
    }

    #[Route('/email', name: 'send_email', methods: ['POST'])]
public function sendEmail(Request $request, MailerInterface $mailer): Response
{
    $name = $request->request->get('name');
    $userEmail = $request->request->get('email');
    $messageContent = $request->request->get('message');

    // Votre propre adresse e-mail où vous souhaitez recevoir les messages
    $recipientEmail = 'mouhamediop114@gmail.com'; 

    // Vérification que l'adresse e-mail fournie par l'utilisateur est valide
    if (!filter_var($userEmail, FILTER_VALIDATE_EMAIL)) {
        $this->addFlash('error', 'Adresse e-mail invalide.');
        return $this->redirectToRoute('app_contact');
    }

    // Création de l'e-mail
    $email = (new Email())
        ->from($recipientEmail) // Votre propre adresse d'expéditeur
        ->to($recipientEmail) // Où vous souhaitez recevoir les messages
        ->replyTo($userEmail) // Adresse de l'utilisateur comme adresse de réponse
        ->subject('Nouveau message de ' . $name)
        ->text($messageContent)
        ->html('<p>' . nl2br($messageContent) . '</p>');

    // Essai d'envoi de l'e-mail
    try {
        $mailer->send($email);
        $this->addFlash('success', 'Votre message a été envoyé avec succès.');
    } catch (\Exception $e) {
        $this->addFlash('error', 'Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer.');
    }

    return $this->redirectToRoute('app_contact');
}

}