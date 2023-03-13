<?php /* Template Name: Home */ get_header(); ?>
<main class="home-page">
  <?php get_template_part( 'partials/_background-svg' ); ?>
  <?php while (have_posts()) : the_post(); ?>

  <?php if( have_rows('hero_content') ): ?>
  <?php while( have_rows('hero_content') ): the_row();?>
  <?php 
						$preheadline = get_sub_field('preheadline');
						$headline = get_sub_field('headline');
						$body = get_sub_field('body');
					?>
  <section id="hero" class="hero-section">
    <div class="non-split-text">
      <h1>
        <?php echo $headline;?>
      </h1>
      <p>
        <?php echo $body;?>
      </p>
    </div>
    <div class="content">
      <div class="preheadline">
        <?php echo $preheadline;?>
      </div>
      <?php get_template_part( 'partials/_hero-logomark' ); ?>

      <h1 data-nosnippet>
        <?php echo $headline;?>
      </h1>
      <p data-nosnippet>
        <?php echo $body;?>
      </p>
    </div>
  </section>
  <?php endwhile; ?>
  <?php endif; ?>



  <?php if( have_rows('redefine_content') ): ?>
  <?php while( have_rows('redefine_content') ): the_row();?>
  <section id="why" class="why-section">
    <div class="why-clock-container">
      <div class="content">
        <div class="why-clock whyClock">
          <?php get_template_part( 'partials/_money-clock' ); ?>
        </div>
      </div>
    </div>
    <div class="content why-main-content">
      <?php 
								$headline = get_sub_field('headline');
								$body = get_sub_field('body');
							?>
      <div class="words-half">
        <h2 class="why-headline">
          <?php echo $headline;?>
        </h2>
        <p class="why-body">
          <?php echo $body;?>
        </p>
        <div class="list-area">
          <?php if( have_rows('list') ): ?>
          <?php while( have_rows('list') ): the_row();?>
          <?php if( have_rows('single_item') ): ?>
          <?php while( have_rows('single_item') ): the_row();?>
          <?php 
														$image = get_sub_field('image');
														$text = get_sub_field('text');
													?>
          <div class="single-item why-list-item">
            <img src="<?php echo esc_url( $image['url'] ); ?>" alt="<?php echo esc_attr( $image['alt'] ); ?>" />
            <p>
              <?php echo $text;?>
            </p>
          </div>
          <?php endwhile; ?>
          <?php endif; ?>
          <?php endwhile; ?>
          <?php endif; ?>
        </div>
      </div>
    </div>
  </section>
  <?php endwhile; ?>
  <?php endif; ?>

  <?php if( have_rows('callout_content') ): ?>
  <?php while( have_rows('callout_content') ): the_row();?>
  <section id="callout" class="callout-section">

    <div class="content">
      <?php 
								$text = get_sub_field('text');
							?>
      <div class="callout-text">
        <?php echo $text;?>
      </div>
    </div>
  </section>
  <?php endwhile; ?>
  <?php endif; ?>
  <?php if( have_rows('what_content') ): ?>
  <?php while( have_rows('what_content') ): the_row();?>
  <section id="whatscroll" class="what-scroller">
    <div class="what-scroller-inner">
      <?php if( have_rows('whatscroller') ): ?>
      <?php while( have_rows('whatscroller') ): the_row();?>
      <?php $text = get_sub_field('text');?>
      <div class="single-scroller singleScroller">
        <?php echo $text;?>
      </div>
      <?php endwhile; ?>
      <?php endif; ?>
      <?php if( have_rows('whatscroller') ): ?>
      <?php while( have_rows('whatscroller') ): the_row();?>
      <?php $text = get_sub_field('text');?>
      <div class="single-scroller singleScroller">
        <?php echo $text;?>
      </div>
      <?php endwhile; ?>
      <?php endif; ?>
    </div>
  </section>
  <!-- Used Because Animations Mess Up Location for Menu Scroll -->
  <div id="whatanchor"></div>
  <section id="what" class="what-section">
    <svg id="background-svg-what-color" class="c-block-fill" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1500 1000"
      preserveAspectRatio="none">
      <polygon id="background-svg-what-1" points="750 0 750 0 750 1000 750 1000" />
      <polygon id="background-svg-what-2" points="750 0 750 0 750 1000 750 1000" />
    </svg>
    <div class="top-half" id="whatTopHalf">
      <div class="content">
        <?php 
									$headline = get_sub_field('headline');
									$body = get_sub_field('body');
								?>
        <div class="headline-half">
          <h2 id="what-headline"><?php echo $headline;?></h2>
        </div>
        <div class="body-half">
          <p id="what-body"><?php echo $body;?></p>
        </div>
      </div>
    </div>
    <div id="whatBottomHalf" class="bottom-half">
      <div class="content">
        <div class="list-area">
          <?php if( have_rows('list') ): ?>
          <?php while( have_rows('list') ): the_row();?>
          <?php if( have_rows('single_item') ): ?>
          <?php while( have_rows('single_item') ): the_row();?>
          <?php 
														$image = get_sub_field('image');
														$title = get_sub_field('title');
														$body = get_sub_field('body');
													?>
          <div class="single-item what-list-item">
            <img src="<?php echo esc_url( $image['url'] ); ?>" alt="<?php echo esc_attr( $image['alt'] ); ?>" />
            <h3>
              <?php echo $title;?>
            </h3>
            <p>
              <?php echo $body;?>
            </p>
          </div>
          <?php endwhile; ?>
          <?php endif; ?>
          <?php endwhile; ?>
          <?php endif; ?>
        </div>
      </div>
    </div>
  </section>
  <?php endwhile; ?>
  <?php endif; ?>

  <?php if( have_rows('who_content') ): ?>
  <?php while( have_rows('who_content') ): the_row();?>
  <section id="who" class="who-section">
    <div class="content">
      <?php 
								$headline = get_sub_field('headline');
								$body = get_sub_field('body');
							?>
      <?php if( have_rows('founder_list') ): ?>
      <?php while( have_rows('founder_list') ): the_row();?>
      <?php if( have_rows('single_item') ): ?>
      <?php while( have_rows('single_item') ): the_row();?>
      <?php 
												$image = get_sub_field('image');
												$name = get_sub_field('name');
												$title = get_sub_field('title');
												$link = get_sub_field('link');
											?>
      <div class="single-item single-founder personLeft">
        <div class="person-image">
          <img src="<?php echo esc_url( $image['url'] ); ?>" alt="<?php echo esc_attr( $image['alt'] ); ?>" />
        </div>
        <div class="person-info">
          <div class="person-name personDeetAnim">
            <?php echo $name;?>
          </div>
          <div class="person-title personDeetAnim">
            <?php echo $title;?>
          </div>
          <a class="personDeetAnim" href="<?php echo $link;?>">
            Linkedin
          </a>
        </div>
      </div>
      <?php endwhile; ?>
      <?php endif; ?>
      <?php endwhile; ?>
      <?php endif; ?>
      <div class="headline-block">
        <h1 id="who-headline">
          <?php echo $headline;?>
        </h1>
      </div>
      <?php if( have_rows('list') ): ?>
      <?php while( have_rows('list') ): the_row();?>
      <?php if( have_rows('single_item') ): ?>
      <?php while( have_rows('single_item') ): the_row();?>
      <?php 
												$image = get_sub_field('image');
												$name = get_sub_field('name');
												$title = get_sub_field('title');
												$link = get_sub_field('link');
											?>
      <div class="single-item single-person">
        <div class="person-image">
          <img src="<?php echo esc_url( $image['url'] ); ?>" alt="<?php echo esc_attr( $image['alt'] ); ?>" />
        </div>
        <div class="person-info">
          <div class="person-name personDeetAnim">
            <?php echo $name;?>
          </div>
          <div class="person-title personDeetAnim">
            <?php echo $title;?>
          </div>
          <a class="personDeetAnim" href="<?php echo $link;?>">
            Linkedin
          </a>
        </div>
      </div>
      <?php endwhile; ?>
      <?php endif; ?>
      <?php endwhile; ?>
      <?php endif; ?>
    </div>
  </section>
  <?php endwhile; ?>
  <?php endif; ?>

  <?php if( have_rows('careers_content') ): ?>
  <?php while( have_rows('careers_content') ): the_row();?>
  <div id="careers-anchor" class="careers-anchor"></div>
  <section id="careers" class="careers-section">
    <div class="content">
      <?php 
								$headline = get_sub_field('headline');
								$body = get_sub_field('body');
								$co_name = get_field('company_name', 'options');
								$co_address = get_field('company_address', 'options');
								$co_email = get_field('company_email', 'options');
								$co_phone = get_field('company_phone', 'options');
							?>
      <div class="careers-half">
        <h2 div class="careerAnimLine1">
          <?php echo $headline;?>
        </h2>
        <div class="career-body">
          <?php echo $body;?>
        </div>
      </div>
      <div class="contact-half">
        <h2 class="careerAnimLine2">Contact</h2>
        <span class="careerAnimLine2">
          <?php echo $co_name;?>
          <br><br>
          <?php echo $co_address;?></span>
        <span class="careerAnimLine2">
          <a href="mailto:<?php echo $co_email;?>">
            <?php echo $co_email;?>
          </a>
          <br><br>
          <a href="tel:<?php echo $co_phone;?>">
            <?php echo $co_phone;?>
          </a>
        </span>
      </div>
    </div>
  </section>
  <?php endwhile; ?>
  <?php endif; ?>




  <?php endwhile; ?>
</main>
<?php get_footer(); ?>