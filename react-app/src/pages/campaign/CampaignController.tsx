import { FC, useCallback, useEffect, useState, useContext } from 'react';
import { useTitle } from '../../common/Hooks';
import { useParams } from 'react-router-dom';
import CampaignView from './CampaignView';
import { ICampaign } from '../../interfaces';
import { AuthContext } from '../../context/AuthContext';

const dummyCampaigns: ICampaign[] = [
  {
    _id: '1',
    title: 'Carved Exotic Wood Bookcase of Curated Holy Books',
    story: 'A curated library of mankind\'s holy scriptures embedded in an exotic carved block of wood to form one level. Features the Tao Te Ching, Analects of Confucius, The Torah, The Discourses of the Buddha, The Qu\'ran, The Bible and The Bhagavad Gita.',
    image_url: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=600&h=400&fit=crop',
    category: 'Education',
    goal_amount: 12000,
    current_amount: 500,
    published: true,
    owner: 'dummy-owner-1',
    email: 'owner1@test.com',
    faves: 4,
    contributions: [{ amount: 500, fundraiserId: '1' }],
  },
  {
    _id: '2',
    title: 'A JWST Robotic Replica Model with Real Gold-Plated Beryllium Mirrors',
    story: 'The James Webb Space Telescope — get your own replica that can fold and unfold just like the real thing with gold-plated mirrors.',
    image_url: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=600&h=400&fit=crop',
    category: 'Science',
    goal_amount: 25000,
    current_amount: 4000,
    published: true,
    owner: 'dummy-owner-2',
    email: 'owner2@test.com',
    faves: 12,
    contributions: [{ amount: 4000, fundraiserId: '2' }],
  },
  {
    _id: '3',
    title: 'Building the Middle Earth Metaverse World for Oculus Rift',
    story: 'Wander from The Shire to Rivendell, through the great valleys of Rohan to the White Walls of Gondor in full VR.',
    image_url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop',
    category: 'Technology',
    goal_amount: 125000,
    current_amount: 20000,
    published: true,
    owner: 'dummy-owner-3',
    email: 'owner3@test.com',
    faves: 28,
    contributions: [{ amount: 20000, fundraiserId: '3' }],
  },
  {
    _id: '4',
    title: 'Solar-Powered Vertical Farm for Urban Communities',
    story: 'Bringing fresh, organic produce to urban food deserts using cutting-edge vertical farming technology powered entirely by solar energy.',
    image_url: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=600&h=400&fit=crop',
    category: 'Environment',
    goal_amount: 50000,
    current_amount: 8500,
    published: true,
    owner: 'dummy-owner-4',
    email: 'owner4@test.com',
    faves: 9,
    contributions: [{ amount: 8500, fundraiserId: '4' }],
  },
  {
    _id: '5',
    title: 'AI-Powered Braille E-Reader for the Visually Impaired',
    story: 'A revolutionary e-reader that converts any digital text to Braille in real time, making information accessible to millions worldwide.',
    image_url: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop',
    category: 'Technology',
    goal_amount: 75000,
    current_amount: 15000,
    published: true,
    owner: 'dummy-owner-5',
    email: 'owner5@test.com',
    faves: 17,
    contributions: [{ amount: 15000, fundraiserId: '5' }],
  },
  {
    _id: '6',
    title: 'Ocean Plastic to Luxury Furniture — Zero Waste Design Studio',
    story: 'We collect ocean plastic and transform it into stunning, high-end furniture pieces. Every purchase removes 10kg of plastic from the ocean.',
    image_url: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop',
    category: 'Environment',
    goal_amount: 80000,
    current_amount: 32000,
    published: true,
    owner: 'dummy-owner-6',
    email: 'owner6@test.com',
    faves: 35,
    contributions: [{ amount: 32000, fundraiserId: '6' }],
  },
];

const CampaignController: FC = () => {
  const user = useContext(AuthContext);
  const { id } = useParams<string>();

  const defaultState: ICampaign = {
    title: '',
    story: '',
    image_url: '',
    category: '',
    goal_amount: 1,
    current_amount: 0,
    published: false,
    owner: '',
    email: '',
    _id: '',
    date: new Date(),
  };

  const [campaign, setCampaign] = useState<ICampaign>(defaultState);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const fetchData = useCallback(() => {
    const found = dummyCampaigns.find((c) => c._id === id);
    if (found) setCampaign(found);
  }, [id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const giveFaves = async (id: string) => {
    setCampaign((prev) => ({ ...prev, faves: (prev.faves || 0) + 1 }));
  };

  useTitle(campaign.title);

  let owner = false;
  if (user !== null) {
    owner = user.uid === campaign.owner;
  }

  const modal = {
    open: modalOpen,
    handleClose: () => setModalOpen(!modalOpen),
    fetchData: async () => fetchData(),
  };

  return <CampaignView campaign={campaign} giveFaves={giveFaves} owner={owner} modal={modal} />;
};

export default CampaignController;
