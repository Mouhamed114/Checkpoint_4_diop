<?php

namespace App\Controller;

use App\Service\ProjectService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;
use Symfony\Component\Routing\Annotation\Route;

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
        $noreply = $request->request->get('email');
        $message = $request->request->get('message');


        // Envoyer l'e-mail
        $email = (new Email())
            ->from($noreply)
            ->to('mouhamediop114@gmail.com')
            ->subject('Nouveau message de ' . $name)
            ->text($message)
            ->html('<p>See Twig integration for better HTML integration!</p>');

        $mailer->send($email);
        $this->addFlash(
            'sucess',
            'Merci pour votre message'
        );
        return $this->redirectToRoute('app_contact');
    }
}
