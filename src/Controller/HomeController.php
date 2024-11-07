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
    public function sendEmail(Request $request, MailerInterface $mailer, ValidatorInterface $validator): Response
    {
        $name = $request->request->get('name');
        $noreply = $request->request->get('email');
        $message = $request->request->get('message');

         // Valider l'e-mail
    // $errors = $validator->validate($noreply, new ConstraintsEmail());

    // if (count($errors) > 0) {
    //     // Gérer les erreurs de validation de l'e-mail
    //     foreach ($errors as $error) {
    //         $this->addFlash('error', $error->getMessage());
    //     }

    //     return $this->redirectToRoute('app_contact');
    // }

        // Envoyer l'e-mail
        $email = (new Email())
            ->from($noreply)
            ->to('taphadiop2020@gmail.com')
            ->subject('Nouveau message de ' . $name)
            ->text($message)
            ->html($message);

        $mailer->send($email);
        $this->addFlash(
            'sucess',
            'Merci pour votre message'
        );
        return $this->redirectToRoute('app_contact');
    }
}
