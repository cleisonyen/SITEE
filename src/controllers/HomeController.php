<?php

namespace App\Controllers;

use Bolt\Controller\Frontend\FrontendController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends FrontendController
{
    /**
     * @Route("/", name="homepage", methods={"GET"})
     */
    public function index(): Response
    {
        // Get hero section for home page
        $heroSection = $this->getContent('hero_sections', ['page' => 'home', 'status' => 'published'], 1);
        
        // Get featured tours
        $featuredTours = $this->getContent('tours', ['featured' => true, 'status' => 'published'], 6);
        
        // Get all tours for services section
        $allTours = $this->getContent('tours', ['status' => 'published'], 6);
        
        // Get travel safe items
        $travelSafeItems = $this->getContent('travel_safe_items', ['status' => 'published']);
        
        // Get featured testimonials
        $testimonials = $this->getContent('testimonials', ['featured' => true, 'status' => 'published'], 6);
        
        // Get about page content
        $aboutPage = $this->getContent('pages', ['slug' => 'about', 'status' => 'published'], 1);

        return $this->render('home.twig', [
            'hero' => $heroSection,
            'featured_tours' => $featuredTours,
            'tours' => $allTours,
            'travel_safe_items' => $travelSafeItems,
            'testimonials' => $testimonials,
            'about' => $aboutPage,
            'meta_title' => 'EBL Tours - The Iguazu Falls Double Experience',
            'meta_description' => 'Experience the breathtaking Iguazu Falls with EBL Tours. Professional guides, safe travel, and unforgettable memories in Foz do Iguaçu.',
            'meta_keywords' => 'Iguazu Falls, Foz do Iguaçu, Tours, Travel, Brazil, Argentina, Itaipu, EBL Tours'
        ]);
    }

    /**
     * @Route("/tours", name="tours_listing", methods={"GET"})
     */
    public function tours(): Response
    {
        $tours = $this->getContent('tours', ['status' => 'published']);
        $heroSection = $this->getContent('hero_sections', ['page' => 'tours', 'status' => 'published'], 1);

        return $this->render('tours.twig', [
            'tours' => $tours,
            'hero' => $heroSection,
            'meta_title' => 'Our Tours - EBL Tours',
            'meta_description' => 'Discover all our amazing tours in Foz do Iguaçu. From Iguazu Falls to Itaipu Dam, we have the perfect adventure for you.',
            'meta_keywords' => 'Tours, Iguazu Falls, Itaipu Dam, Foz do Iguaçu, Travel packages'
        ]);
    }

    /**
     * @Route("/tour/{slug}", name="tour_detail", methods={"GET"})
     */
    public function tourDetail(string $slug): Response
    {
        $tour = $this->getContent('tours', ['slug' => $slug, 'status' => 'published'], 1);
        
        if (!$tour) {
            throw $this->createNotFoundException('Tour not found');
        }

        // Get related tours
        $relatedTours = $this->getContent('tours', [
            'category' => $tour->get('category'),
            'status' => 'published'
        ], 3);

        return $this->render('tour_detail.twig', [
            'tour' => $tour,
            'related_tours' => $relatedTours,
            'meta_title' => $tour->get('title') . ' - EBL Tours',
            'meta_description' => $tour->get('meta_description') ?: $tour->get('description'),
            'meta_keywords' => $tour->get('title') . ', EBL Tours, Foz do Iguaçu'
        ]);
    }

    /**
     * @Route("/itinerary", name="itinerary", methods={"GET"})
     */
    public function itinerary(): Response
    {
        $itineraryPage = $this->getContent('pages', ['slug' => 'itinerary', 'status' => 'published'], 1);
        $heroSection = $this->getContent('hero_sections', ['page' => 'itinerary', 'status' => 'published'], 1);

        return $this->render('itinerary.twig', [
            'page' => $itineraryPage,
            'hero' => $heroSection,
            'meta_title' => 'Itinerary - EBL Tours',
            'meta_description' => 'Plan your perfect trip to Foz do Iguaçu with our detailed itinerary suggestions.',
            'meta_keywords' => 'Itinerary, Travel plan, Foz do Iguaçu, EBL Tours'
        ]);
    }
}